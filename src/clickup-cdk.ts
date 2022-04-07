import { awscdk, Component, SampleDir, SampleReadme } from 'projen';
import merge from 'ts-deepmerge';

import { clickupTs } from './clickup-ts';
import { codecov } from './codecov';

export module clickupCdk {
  export interface ClickUpCdkTypeScriptAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {}

  export const deps = ['@time-loop/cdk-library', 'cdk-constants', 'cdk-iam-floyd', 'colors', 'multi-convention-namer'];
  export const defaults = {
    deps,
    jestOptions: {
      jestConfig: {
        coveragePathIgnorePatterns: ['/node_modules/', '/src/main.ts'],
      },
    },
    releaseToNpm: false,
  };

  /**
   * ClickUp standardized CDK TypeScript App
   *
   * Includes:
   * - default author information
   * - default proprietary license
   * - default release build configuration
   * - default linting and codecov configuration
   * - default minNodeVersion: '14.17.0'
   * - default deps and devDeps (you can add your own, but the base will always be present)
   */
  export class ClickUpCdkTypeScriptApp extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: ClickUpCdkTypeScriptAppOptions) {
      super(merge(clickupTs.defaults, defaults, options, { sampleCode: false }));
      new AppSampleCode(this);
      new SampleReadme(this, {
        contents: `[![codecov](https://codecov.io/gh/time-loop/WRITEME/branch/main/graph/badge.svg?token=WRITEME)](https://codecov.io/gh/time-loop/WRITEME)

        # my-new-app-cdk
        `,
      });
      codecov.addCodeCovYml(this);
      codecov.addCodeCovOnRelease(this);
    }
  }

  class AppSampleCode extends Component {
    constructor(project: ClickUpCdkTypeScriptApp) {
      super(project);

      // src files
      new SampleDir(project, project.srcdir, {
        files: {
          'main.ts': `import { core } from '@time-loop/cdk-library';
import { App } from 'aws-cdk-lib';
import 'colors';
import { Namer } from 'multi-convention-namer';

import { WidgetStack } from './widget';

const app = new App();
const env = process.env.AWS_PROFILE || (process.env.CI ? 'usDev' : '');
const region = process.env.AWS_REGION || (process.env.CI ? 'us-east-1' : undefined);
if (!env) {
  console.log('You should probably set AWS_PROFILE before using this.'.yellow);
}
const namedEnvFactory = core.Environment.findByName(env);
const namedEnv = namedEnvFactory(region);

console.log(\`Deploying to \${JSON.stringify(namedEnv.name).blue} in \${JSON.stringify(namedEnv.region).blue}.\`);

const commonProps = {
  businessUnit: core.BusinessUnit.PRODUCT,
  clickUpEnvironment: core.ClickUpEnvironment.PRODUCTION,
  clickUpRole: core.ClickUpRole.APP,
  confidentiality: core.Confidentiality.PUBLIC,
  namedEnv,
};
new WidgetStack(app, new Namer(['my', 'cool', 'widget']), {
  ...commonProps,
  managedPolicyName: 'yarf',
});

app.synth();
`,
          'widget.ts': `
import { core } from '@time-loop/cdk-library';
import { aws_iam, aws_kms, RemovalPolicy } from 'aws-cdk-lib';
import * as statement from 'cdk-iam-floyd';
import { Construct } from 'constructs';
import { Namer } from 'multi-convention-namer';

export interface WidgetProps {
  /**
   * The name to assign the widget policy.
   * @default - have CDK generate a unique name
   */
  readonly managedPolicyName?: string;
}

/**
 * Useful comment describing the Widget construct.
 */
export class Widget extends Construct {
  // Expose the policy for use by another Construct in this Stack.
  // WARNING: cdk absolutely will let you pass objects between stacks.
  // This will generate CfnOutputs that will in turn create tight coupling between stacks.
  // This is almost never a Good Idea.
  // Instead, consider using \`core.Param.put\` to put the ARN
  // and then use myThingy.fromThingyArn() to instantiate a Interface object.
  readonly policy: aws_iam.ManagedPolicy;

  constructor(scope: Construct, id: Namer, props: WidgetProps) {
    super(scope, id.pascal);

    const key = new aws_kms.Key(this, 'Key', {
      removalPolicy: RemovalPolicy.DESTROY,
    });
    // Save the key ARN using SSM, for use by another Stack
    core.Param.put(key, 'keyArn', { rootId: 'ThisAppName' });

    this.policy = new aws_iam.ManagedPolicy(this, 'Policy', {
      managedPolicyName: props.managedPolicyName,
    });
    this.policy.addStatements(
      // Reference the ARN of a locally created thingy.
      // Note that the \`allow()\` is implicit.
      new statement.Kms({ sid: 'DescriptiveName' }).to('Decrypt*').on(key.keyArn),
      // Have \`cdk-iam-floyd\` construct the ARN for you
      new statement.Cloudfront({ sid: 'GrantInvalidation' }).toCreateInvalidation().onDistribution(
        // Pull the distributionId from an SSM parameter
        core.Param.get(this, 'distributionId', {
          rootId: 'SomeOtherApp',
          stackId: 'SomeOtherStack',
          constructId: 'FooBar',
        }),
      ),
    );
  }
}

export interface WidgetStackProps extends core.StackProps, WidgetProps {}

export class WidgetStack extends core.Stack {
  constructor(scope: Construct, id: Namer, props: WidgetStackProps) {
    super(scope, id, props);

    const widget = new Widget(this, id, props);

    // Example of passing the widget.policy to another construct in the same stack.
    // \`\`\`
    // new FrozzleBop(this, id, { policy: widget.policy });
    // \`\`\`
    // placeholder to keep lint happy
    console.log(widget.policy.managedPolicyArn);
  }
}
`,
        },
      });

      // test files
      new SampleDir(project, project.testdir, {
        files: {
          'widget.test.ts': `import { core } from '@time-loop/cdk-library';
import { App, assertions } from 'aws-cdk-lib';
import { Namer } from 'multi-convention-namer';
import { WidgetStack } from '../src/widget';

// Minimum props required by @time-loop/cdk-library/core.StackProps
const commonProps = {
  businessUnit: core.BusinessUnit.PRODUCT,
  clickUpEnvironment: core.ClickUpEnvironment.PRODUCTION,
  clickUpRole: core.ClickUpRole.APP,
  confidentiality: core.Confidentiality.PUBLIC,
  namedEnv: core.Environment.usDev('us-west-2'),
};

describe('Widget', () => {
  describe('default', () => {
    // These are resources shared by all the tests in this context.
    const app = new App();
    const stack = new WidgetStack(app, new Namer(['test']), commonProps);
    const template = assertions.Template.fromStack(stack);

    // Tests are super thin, consisting of just an assertion.
    test('creates resources', () => {
      ['AWS::IAM::ManagedPolicy', 'AWS::KMS::Key'].forEach((resource) => template.hasResourceCount(resource, 1));
    });

    // Demonstrate super-cool matcher stuff
    test('policy should reference key', () => {
      template.hasResourceProperties('AWS::IAM::ManagedPolicy', {
        PolicyDocument: {
          // The statement array must contain the following array.
          Statement: assertions.Match.arrayWith([
            assertions.Match.objectLike({
              // The array must contain an object with at least the following key / value.
              Resource: {
                'Fn::GetAtt': [
                  assertions.Match.anyValue(), // TODO: figure out how to actually reference the generated Kms key
                  'Arn',
                ],
              },
            }),
          ]),
        },
      });
    });
  });

  describe('options', () => {
    // Here we aren't sharing setup code...
    test('managedPolicyName', () => {
      // ...because each test is exercising a specific part of the functionality.
      // Which means that setups are slightly different and we can't re-use things.
      const app = new App();
      const stack = new WidgetStack(app, new Namer(['test']), {
        ...commonProps,
        managedPolicyName: 'fakeName',
      });
      const template = assertions.Template.fromStack(stack);

      template.hasResourceProperties('AWS::IAM::ManagedPolicy', {
        ManagedPolicyName: 'fakeName',
      });
    });
  });
});
`,
        },
      });
    }
  }
}
