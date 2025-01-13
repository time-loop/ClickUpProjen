# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClickUpCdkConstructLibrary <a name="ClickUpCdkConstructLibrary" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary"></a>

ClickUp standardized CDK Construct Library.

Note: disgusting hack to achieve "defaults" in the constructor
leverages "empty string is falsy" behavior of TS.
I am not proud of this.
It's better than cloning the interface since projen revs pretty fast.
Marginally.

#### Initializers <a name="Initializers" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.Initializer"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

new clickupCdk.ClickUpCdkConstructLibrary(options: ClickUpCdkConstructLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.Initializer.parameter.options">options</a></code> | <code>@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.Initializer.parameter.options"></a>

- *Type:* @time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCdkDependencies">addCdkDependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCdkTestDependencies">addCdkTestDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### ~~`addCdkDependencies`~~ <a name="addCdkDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCdkDependencies"></a>

```typescript
public addCdkDependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

Since this is a library project, dependencies will be added as peer dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCdkDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### ~~`addCdkTestDependencies`~~ <a name="addCdkTestDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCdkTestDependencies"></a>

```typescript
public addCdkTestDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.addCdkTestDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.isConstruct"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

clickupCdk.ClickUpCdkConstructLibrary.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.isProject"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

clickupCdk.ClickUpCdkConstructLibrary.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.of"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

clickupCdk.ClickUpCdkConstructLibrary.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.datadogEvent">datadogEvent</a></code> | <code>boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

##### ~~`version`~~<sup>Required</sup> <a name="version" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.version"></a>

- *Deprecated:* use `cdkVersion`

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `datadogEvent`<sup>Required</sup> <a name="datadogEvent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.datadogEvent"></a>

```typescript
public readonly datadogEvent: boolean;
```

- *Type:* boolean

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibrary.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### ClickUpCdkTypeScriptApp <a name="ClickUpCdkTypeScriptApp" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp"></a>

ClickUp standardized CDK TypeScript App.

Includes:
- default author information
- default proprietary license
- default release build configuration
- default linting and codecov configuration
- default minNodeVersion: '14.17.0'
- default deps and devDeps (you can add your own, but the base will always be present)

#### Initializers <a name="Initializers" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.Initializer"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

new clickupCdk.ClickUpCdkTypeScriptApp(options: ClickUpCdkTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.Initializer.parameter.options">options</a></code> | <code>@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.Initializer.parameter.options"></a>

- *Type:* @time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |

---

##### `toString` <a name="toString" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `addCdkDependency` <a name="addCdkDependency" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: string): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.addCdkDependency.parameter.modules"></a>

- *Type:* string

The list of modules to depend on.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.isConstruct"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

clickupCdk.ClickUpCdkTypeScriptApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.isProject"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

clickupCdk.ClickUpCdkTypeScriptApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.of"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

clickupCdk.ClickUpCdkTypeScriptApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.datadogEvent">datadogEvent</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

##### `datadogEvent`<sup>Required</sup> <a name="datadogEvent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.datadogEvent"></a>

```typescript
public readonly datadogEvent: boolean;
```

- *Type:* boolean

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### ClickUpTypeScriptProject <a name="ClickUpTypeScriptProject" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject"></a>

ClickUp standardized TypeScript Project.

Includes:
- default author information
- default proprietary license
- default release build configuration
- default linting and codecov configuration
- default minNodeVersion: '14.17.0'
- default devDeps (you can add your own, but the base will always be present)

Note that for GitHub Packages to work, the package has to be scoped into the `@time-loop` project.
We handle that automatically.

#### Initializers <a name="Initializers" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.Initializer"></a>

```typescript
import { clickupTs } from '@time-loop/clickup-projen'

new clickupTs.ClickUpTypeScriptProject(options: ClickUpTypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.Initializer.parameter.options">options</a></code> | <code>@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.Initializer.parameter.options"></a>

- *Type:* @time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.isConstruct"></a>

```typescript
import { clickupTs } from '@time-loop/clickup-projen'

clickupTs.ClickUpTypeScriptProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.isProject"></a>

```typescript
import { clickupTs } from '@time-loop/clickup-projen'

clickupTs.ClickUpTypeScriptProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.of"></a>

```typescript
import { clickupTs } from '@time-loop/clickup-projen'

clickupTs.ClickUpTypeScriptProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CDKDiffOptionsConfig <a name="CDKDiffOptionsConfig" id="@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.Initializer"></a>

```typescript
import { cdkDiffWorkflow } from '@time-loop/clickup-projen'

const cDKDiffOptionsConfig: cdkDiffWorkflow.CDKDiffOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | Specify a nodeVersion. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.envsToDiff">envsToDiff</a></code> | <code>@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff \| @time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff[]</code> | Collection of environments to cdk diff. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.createOidcRoleStack">createOidcRoleStack</a></code> | <code>boolean</code> | Detrmines if the OIDC role stack should be created. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | Which package manager is being used? |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | What version of pnpm? |

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string
- *Default:* should be parameters.PROJEN_NODE_VERSION

Specify a nodeVersion.

---

##### `envsToDiff`<sup>Required</sup> <a name="envsToDiff" id="@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.envsToDiff"></a>

```typescript
public readonly envsToDiff: EnvToDiff | ExplicitStacksEnvToDiff[];
```

- *Type:* @time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff | @time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff[]

Collection of environments to cdk diff.

---

##### `createOidcRoleStack`<sup>Optional</sup> <a name="createOidcRoleStack" id="@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.createOidcRoleStack"></a>

```typescript
public readonly createOidcRoleStack: boolean;
```

- *Type:* boolean

Detrmines if the OIDC role stack should be created.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* the packageManager in the project

Which package manager is being used?

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* 9 if you are using PNPM

What version of pnpm?

---

### ClickUpCdkCommonOptions <a name="ClickUpCdkCommonOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.Initializer"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

const clickUpCdkCommonOptions: clickupCdk.ClickUpCdkCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendSlackWebhookOnRelease">sendSlackWebhookOnRelease</a></code> | <code>boolean</code> | Should we send a slack webhook on release (required for compliance audits). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendSlackWebhookOnReleaseOpts">sendSlackWebhookOnReleaseOpts</a></code> | <code>@time-loop/clickup-projen.slackAlert.ReleaseEventOptions</code> | Slack alert on release options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.cdkDiffOptionsConfig">cdkDiffOptionsConfig</a></code> | <code>@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig</code> | Cdk diff options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.codecovBypassOptionsConfig">codecovBypassOptionsConfig</a></code> | <code>@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig</code> | Codecov Bypass options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.renovateOptionsConfig">renovateOptionsConfig</a></code> | <code>@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig</code> | Renovate options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendReleaseEvent">sendReleaseEvent</a></code> | <code>boolean</code> | Feature flag for datadog event sending on release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendReleaseEventOpts">sendReleaseEventOpts</a></code> | <code>@time-loop/clickup-projen.datadog.ReleaseEventOptions</code> | Datadog event options to use on release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.serviceCatalogOptions">serviceCatalogOptions</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions</code> | Datadog Service Catalog options. |

---

##### `sendSlackWebhookOnRelease`<sup>Optional</sup> <a name="sendSlackWebhookOnRelease" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendSlackWebhookOnRelease"></a>

```typescript
public readonly sendSlackWebhookOnRelease: boolean;
```

- *Type:* boolean
- *Default:* true

Should we send a slack webhook on release (required for compliance audits).

---

##### `sendSlackWebhookOnReleaseOpts`<sup>Optional</sup> <a name="sendSlackWebhookOnReleaseOpts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendSlackWebhookOnReleaseOpts"></a>

```typescript
public readonly sendSlackWebhookOnReleaseOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.slackAlert.ReleaseEventOptions

Slack alert on release options.

Only valid when `sendSlackWebhookOnRelease` is true.

---

##### `cdkDiffOptionsConfig`<sup>Optional</sup> <a name="cdkDiffOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.cdkDiffOptionsConfig"></a>

```typescript
public readonly cdkDiffOptionsConfig: CDKDiffOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig
- *Default:* undefined

Cdk diff options.

---

##### `codecovBypassOptionsConfig`<sup>Optional</sup> <a name="codecovBypassOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.codecovBypassOptionsConfig"></a>

```typescript
public readonly codecovBypassOptionsConfig: CodecovBypassOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig
- *Default:* undefined

Codecov Bypass options.

---

##### `renovateOptionsConfig`<sup>Optional</sup> <a name="renovateOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.renovateOptionsConfig"></a>

```typescript
public readonly renovateOptionsConfig: RenovateOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig
- *Default:* undefined

Renovate options.

---

##### `sendReleaseEvent`<sup>Optional</sup> <a name="sendReleaseEvent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendReleaseEvent"></a>

```typescript
public readonly sendReleaseEvent: boolean;
```

- *Type:* boolean
- *Default:* true

Feature flag for datadog event sending on release.

---

##### `sendReleaseEventOpts`<sup>Optional</sup> <a name="sendReleaseEventOpts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.sendReleaseEventOpts"></a>

```typescript
public readonly sendReleaseEventOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.datadog.ReleaseEventOptions
- *Default:* undefined

Datadog event options to use on release.

Only valid when
`sendReleaseEvent` is true.

---

##### `serviceCatalogOptions`<sup>Optional</sup> <a name="serviceCatalogOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkCommonOptions.property.serviceCatalogOptions"></a>

```typescript
public readonly serviceCatalogOptions: ServiceCatalogOptions;
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions
- *Default:* undefined

Datadog Service Catalog options.

---

### ClickUpCdkConstructLibraryOptions <a name="ClickUpCdkConstructLibraryOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.Initializer"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

const clickUpCdkConstructLibraryOptions: clickupCdk.ClickUpCdkConstructLibraryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.catalog">catalog</a></code> | <code>projen.cdk.Catalog</code> | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendSlackWebhookOnRelease">sendSlackWebhookOnRelease</a></code> | <code>boolean</code> | Should we send a slack webhook on release (required for compliance audits). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendSlackWebhookOnReleaseOpts">sendSlackWebhookOnReleaseOpts</a></code> | <code>@time-loop/clickup-projen.slackAlert.ReleaseEventOptions</code> | Slack alert on release options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkDiffOptionsConfig">cdkDiffOptionsConfig</a></code> | <code>@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig</code> | Cdk diff options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codecovBypassOptionsConfig">codecovBypassOptionsConfig</a></code> | <code>@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig</code> | Codecov Bypass options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.renovateOptionsConfig">renovateOptionsConfig</a></code> | <code>@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig</code> | Renovate options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendReleaseEvent">sendReleaseEvent</a></code> | <code>boolean</code> | Feature flag for datadog event sending on release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendReleaseEventOpts">sendReleaseEventOpts</a></code> | <code>@time-loop/clickup-projen.datadog.ReleaseEventOptions</code> | Datadog event options to use on release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.serviceCatalogOptions">serviceCatalogOptions</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions</code> | Datadog Service Catalog options. |

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "~5.6.0"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.catalog"></a>

```typescript
public readonly catalog: Catalog;
```

- *Type:* projen.cdk.Catalog
- *Default:* new version will be announced

Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.

https://awscdk.io/packages/[@SCOPE/]PACKAGE@VERSION

The catalog will also post a tweet to https://twitter.com/awscdkio with the
package name, description and the above link. You can disable these tweets
through `{ announce: false }`.

You can also add a Twitter handle through `{ twitter: 'xx' }` which will be
mentioned in the tweet.

> [https://github.com/construct-catalog/catalog](https://github.com/construct-catalog/catalog)

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `sendSlackWebhookOnRelease`<sup>Optional</sup> <a name="sendSlackWebhookOnRelease" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendSlackWebhookOnRelease"></a>

```typescript
public readonly sendSlackWebhookOnRelease: boolean;
```

- *Type:* boolean
- *Default:* true

Should we send a slack webhook on release (required for compliance audits).

---

##### `sendSlackWebhookOnReleaseOpts`<sup>Optional</sup> <a name="sendSlackWebhookOnReleaseOpts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendSlackWebhookOnReleaseOpts"></a>

```typescript
public readonly sendSlackWebhookOnReleaseOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.slackAlert.ReleaseEventOptions

Slack alert on release options.

Only valid when `sendSlackWebhookOnRelease` is true.

---

##### `cdkDiffOptionsConfig`<sup>Optional</sup> <a name="cdkDiffOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.cdkDiffOptionsConfig"></a>

```typescript
public readonly cdkDiffOptionsConfig: CDKDiffOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig
- *Default:* undefined

Cdk diff options.

---

##### `codecovBypassOptionsConfig`<sup>Optional</sup> <a name="codecovBypassOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.codecovBypassOptionsConfig"></a>

```typescript
public readonly codecovBypassOptionsConfig: CodecovBypassOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig
- *Default:* undefined

Codecov Bypass options.

---

##### `renovateOptionsConfig`<sup>Optional</sup> <a name="renovateOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.renovateOptionsConfig"></a>

```typescript
public readonly renovateOptionsConfig: RenovateOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig
- *Default:* undefined

Renovate options.

---

##### `sendReleaseEvent`<sup>Optional</sup> <a name="sendReleaseEvent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendReleaseEvent"></a>

```typescript
public readonly sendReleaseEvent: boolean;
```

- *Type:* boolean
- *Default:* true

Feature flag for datadog event sending on release.

---

##### `sendReleaseEventOpts`<sup>Optional</sup> <a name="sendReleaseEventOpts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.sendReleaseEventOpts"></a>

```typescript
public readonly sendReleaseEventOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.datadog.ReleaseEventOptions
- *Default:* undefined

Datadog event options to use on release.

Only valid when
`sendReleaseEvent` is true.

---

##### `serviceCatalogOptions`<sup>Optional</sup> <a name="serviceCatalogOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkConstructLibraryOptions.property.serviceCatalogOptions"></a>

```typescript
public readonly serviceCatalogOptions: ServiceCatalogOptions;
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions
- *Default:* undefined

Datadog Service Catalog options.

---

### ClickUpCdkTypeScriptAppOptions <a name="ClickUpCdkTypeScriptAppOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.Initializer"></a>

```typescript
import { clickupCdk } from '@time-loop/clickup-projen'

const clickUpCdkTypeScriptAppOptions: clickupCdk.ClickUpCdkTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendSlackWebhookOnRelease">sendSlackWebhookOnRelease</a></code> | <code>boolean</code> | Should we send a slack webhook on release (required for compliance audits). |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendSlackWebhookOnReleaseOpts">sendSlackWebhookOnReleaseOpts</a></code> | <code>@time-loop/clickup-projen.slackAlert.ReleaseEventOptions</code> | Slack alert on release options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkDiffOptionsConfig">cdkDiffOptionsConfig</a></code> | <code>@time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig</code> | Cdk diff options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codecovBypassOptionsConfig">codecovBypassOptionsConfig</a></code> | <code>@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig</code> | Codecov Bypass options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.renovateOptionsConfig">renovateOptionsConfig</a></code> | <code>@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig</code> | Renovate options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendReleaseEvent">sendReleaseEvent</a></code> | <code>boolean</code> | Feature flag for datadog event sending on release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendReleaseEventOpts">sendReleaseEventOpts</a></code> | <code>@time-loop/clickup-projen.datadog.ReleaseEventOptions</code> | Datadog event options to use on release. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.serviceCatalogOptions">serviceCatalogOptions</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions</code> | Datadog Service Catalog options. |
| <code><a href="#@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkContextJsonOptions">cdkContextJsonOptions</a></code> | <code>@time-loop/clickup-projen.cdkContextJson.Options</code> | Add support for cdk.context.json lookups? This allows GitHub PRs to lookup missing things from your cdk.context.json file and then commit a self-mutation so that your PRs don't break. |

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `sendSlackWebhookOnRelease`<sup>Optional</sup> <a name="sendSlackWebhookOnRelease" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendSlackWebhookOnRelease"></a>

```typescript
public readonly sendSlackWebhookOnRelease: boolean;
```

- *Type:* boolean
- *Default:* true

Should we send a slack webhook on release (required for compliance audits).

---

##### `sendSlackWebhookOnReleaseOpts`<sup>Optional</sup> <a name="sendSlackWebhookOnReleaseOpts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendSlackWebhookOnReleaseOpts"></a>

```typescript
public readonly sendSlackWebhookOnReleaseOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.slackAlert.ReleaseEventOptions

Slack alert on release options.

Only valid when `sendSlackWebhookOnRelease` is true.

---

##### `cdkDiffOptionsConfig`<sup>Optional</sup> <a name="cdkDiffOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkDiffOptionsConfig"></a>

```typescript
public readonly cdkDiffOptionsConfig: CDKDiffOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.cdkDiffWorkflow.CDKDiffOptionsConfig
- *Default:* undefined

Cdk diff options.

---

##### `codecovBypassOptionsConfig`<sup>Optional</sup> <a name="codecovBypassOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.codecovBypassOptionsConfig"></a>

```typescript
public readonly codecovBypassOptionsConfig: CodecovBypassOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig
- *Default:* undefined

Codecov Bypass options.

---

##### `renovateOptionsConfig`<sup>Optional</sup> <a name="renovateOptionsConfig" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.renovateOptionsConfig"></a>

```typescript
public readonly renovateOptionsConfig: RenovateOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig
- *Default:* undefined

Renovate options.

---

##### `sendReleaseEvent`<sup>Optional</sup> <a name="sendReleaseEvent" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendReleaseEvent"></a>

```typescript
public readonly sendReleaseEvent: boolean;
```

- *Type:* boolean
- *Default:* true

Feature flag for datadog event sending on release.

---

##### `sendReleaseEventOpts`<sup>Optional</sup> <a name="sendReleaseEventOpts" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.sendReleaseEventOpts"></a>

```typescript
public readonly sendReleaseEventOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.datadog.ReleaseEventOptions
- *Default:* undefined

Datadog event options to use on release.

Only valid when
`sendReleaseEvent` is true.

---

##### `serviceCatalogOptions`<sup>Optional</sup> <a name="serviceCatalogOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.serviceCatalogOptions"></a>

```typescript
public readonly serviceCatalogOptions: ServiceCatalogOptions;
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions
- *Default:* undefined

Datadog Service Catalog options.

---

##### `cdkContextJsonOptions`<sup>Optional</sup> <a name="cdkContextJsonOptions" id="@time-loop/clickup-projen.clickupCdk.ClickUpCdkTypeScriptAppOptions.property.cdkContextJsonOptions"></a>

```typescript
public readonly cdkContextJsonOptions: Options;
```

- *Type:* @time-loop/clickup-projen.cdkContextJson.Options

Add support for cdk.context.json lookups? This allows GitHub PRs to lookup missing things from your cdk.context.json file and then commit a self-mutation so that your PRs don't break.

---

### ClickUpTypeScriptProjectOptions <a name="ClickUpTypeScriptProjectOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.Initializer"></a>

```typescript
import { clickupTs } from '@time-loop/clickup-projen'

const clickUpTypeScriptProjectOptions: clickupTs.ClickUpTypeScriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.sendSlackWebhookOnRelease">sendSlackWebhookOnRelease</a></code> | <code>boolean</code> | Should we send a slack webhook on release (required for compliance audits). |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.sendSlackWebhookOnReleaseOpts">sendSlackWebhookOnReleaseOpts</a></code> | <code>@time-loop/clickup-projen.slackAlert.ReleaseEventOptions</code> | Slack alert on release options. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email address for project author. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.docgenOptions">docgenOptions</a></code> | <code>@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions</code> | Additional options pertaining to the typedoc config file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.renovateOptionsConfig">renovateOptionsConfig</a></code> | <code>@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `sendSlackWebhookOnRelease`<sup>Optional</sup> <a name="sendSlackWebhookOnRelease" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.sendSlackWebhookOnRelease"></a>

```typescript
public readonly sendSlackWebhookOnRelease: boolean;
```

- *Type:* boolean
- *Default:* true

Should we send a slack webhook on release (required for compliance audits).

---

##### `sendSlackWebhookOnReleaseOpts`<sup>Optional</sup> <a name="sendSlackWebhookOnReleaseOpts" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.sendSlackWebhookOnReleaseOpts"></a>

```typescript
public readonly sendSlackWebhookOnReleaseOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.slackAlert.ReleaseEventOptions

Slack alert on release options.

Only valid when `sendSlackWebhookOnRelease` is true.

---

##### `authorAddress`<sup>Optional</sup> <a name="authorAddress" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string

Email address for project author.

---

##### `docgenOptions`<sup>Optional</sup> <a name="docgenOptions" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.docgenOptions"></a>

```typescript
public readonly docgenOptions: TypedocDocgenOptions;
```

- *Type:* @time-loop/clickup-projen.clickupTs.TypedocDocgenOptions

Additional options pertaining to the typedoc config file.

NOTE: `docgen` attribute cannot be false.

---

##### `renovateOptionsConfig`<sup>Optional</sup> <a name="renovateOptionsConfig" id="@time-loop/clickup-projen.clickupTs.ClickUpTypeScriptProjectOptions.property.renovateOptionsConfig"></a>

```typescript
public readonly renovateOptionsConfig: RenovateOptionsConfig;
```

- *Type:* @time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig

---

### CodecovBypassOptionsConfig <a name="CodecovBypassOptionsConfig" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.Initializer"></a>

```typescript
import { codecovBypassWorkflow } from '@time-loop/clickup-projen'

const codecovBypassOptionsConfig: codecovBypassWorkflow.CodecovBypassOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.checkName">checkName</a></code> | <code>string</code> | Check Name. |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.checkSuiteCheckNames">checkSuiteCheckNames</a></code> | <code>string[]</code> | Check Suite Check Names. |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.detailsUrl">detailsUrl</a></code> | <code>string</code> | Details URL. |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.disabled">disabled</a></code> | <code>boolean</code> | Skip creating (using) the workflow. |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.githubAppId">githubAppId</a></code> | <code>string</code> | GitHub App ID. |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.githubAppPrivateKey">githubAppPrivateKey</a></code> | <code>string</code> | GitHub App Private Key. |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.skipLabel">skipLabel</a></code> | <code>string</code> | Skip Label. |
| <code><a href="#@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.workflowName">workflowName</a></code> | <code>string</code> | Workflow Name. |

---

##### `checkName`<sup>Optional</sup> <a name="checkName" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.checkName"></a>

```typescript
public readonly checkName: string;
```

- *Type:* string
- *Default:* 'Code coverage increased'

Check Name.

---

##### `checkSuiteCheckNames`<sup>Optional</sup> <a name="checkSuiteCheckNames" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.checkSuiteCheckNames"></a>

```typescript
public readonly checkSuiteCheckNames: string[];
```

- *Type:* string[]
- *Default:* ['codecov/patch', 'codecov/project']

Check Suite Check Names.

---

##### `detailsUrl`<sup>Optional</sup> <a name="detailsUrl" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.detailsUrl"></a>

```typescript
public readonly detailsUrl: string;
```

- *Type:* string
- *Default:* 'https://app.codecov.io/gh/${{ github.repository }}/pull/<% prNumber %>'

Details URL.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* boolean
- *Default:* false

Skip creating (using) the workflow.

---

##### `githubAppId`<sup>Optional</sup> <a name="githubAppId" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.githubAppId"></a>

```typescript
public readonly githubAppId: string;
```

- *Type:* string
- *Default:* '${{ vars.CODECOV_GITHUB_APP_ID }}'

GitHub App ID.

---

##### `githubAppPrivateKey`<sup>Optional</sup> <a name="githubAppPrivateKey" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.githubAppPrivateKey"></a>

```typescript
public readonly githubAppPrivateKey: string;
```

- *Type:* string
- *Default:* '${{ secrets.CODECOV_GITHUB_APP_PRIVATE_KEY }}'

GitHub App Private Key.

---

##### `skipLabel`<sup>Optional</sup> <a name="skipLabel" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.skipLabel"></a>

```typescript
public readonly skipLabel: string;
```

- *Type:* string
- *Default:* 'code coverage not required'

Skip Label.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@time-loop/clickup-projen.codecovBypassWorkflow.CodecovBypassOptionsConfig.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string
- *Default:* 'Code coverage increased'

Workflow Name.

---

### ContactInfo <a name="ContactInfo" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo.Initializer"></a>

```typescript
import { datadogServiceCatalog } from '@time-loop/clickup-projen'

const contactInfo: datadogServiceCatalog.ContactInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo.property.contact">contact</a></code> | <code>string</code> | The actual contact information for the contact. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo.property.name">name</a></code> | <code>string</code> | The name of the contact. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo.property.type">type</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.ContactType</code> | The type of the contact. |

---

##### `contact`<sup>Required</sup> <a name="contact" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo.property.contact"></a>

```typescript
public readonly contact: string;
```

- *Type:* string

The actual contact information for the contact.

For example, if the type is email, this would be the email address.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the contact.

---

##### `type`<sup>Required</sup> <a name="type" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo.property.type"></a>

```typescript
public readonly type: ContactType;
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.ContactType

The type of the contact.

Acceptable values are: email, slack, and microsoft-teams

---

### EnvToDiff <a name="EnvToDiff" id="@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.Initializer"></a>

```typescript
import { cdkDiffWorkflow } from '@time-loop/clickup-projen'

const envToDiff: cdkDiffWorkflow.EnvToDiff = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.labelToApplyWhenNoDiffPresent">labelToApplyWhenNoDiffPresent</a></code> | <code>string</code> | Label that will be applied to the PR when there are no changes in the diff Example: `no-qa-changes`. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.name">name</a></code> | <code>string</code> | Unique name for the cdk diff action. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.oidcRoleArn">oidcRoleArn</a></code> | <code>string</code> | Name of the OIDC role name which contains neccesasry IAM policies to run the CDK diff. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.stackSearchString">stackSearchString</a></code> | <code>string</code> | String to search for stacks to diff Example: `Qa`, 'Staging', 'Prod'. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.roleDuration">roleDuration</a></code> | <code>number</code> | Duration in seconds for the assumed role to be valid Defaut value: `900`. |

---

##### `labelToApplyWhenNoDiffPresent`<sup>Required</sup> <a name="labelToApplyWhenNoDiffPresent" id="@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.labelToApplyWhenNoDiffPresent"></a>

```typescript
public readonly labelToApplyWhenNoDiffPresent: string;
```

- *Type:* string

Label that will be applied to the PR when there are no changes in the diff Example: `no-qa-changes`.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the cdk diff action.

This will be used to create the output file name, header on comments, and more
Example: `qa`, `staging`, `prod`

---

##### `oidcRoleArn`<sup>Required</sup> <a name="oidcRoleArn" id="@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.oidcRoleArn"></a>

```typescript
public readonly oidcRoleArn: string;
```

- *Type:* string

Name of the OIDC role name which contains neccesasry IAM policies to run the CDK diff.

Example arn: `arn:aws:iam::123123123123:role/squad-github-actions-permissions-squad-cdk-github-actions-role`

---

##### `stackSearchString`<sup>Required</sup> <a name="stackSearchString" id="@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.stackSearchString"></a>

```typescript
public readonly stackSearchString: string;
```

- *Type:* string

String to search for stacks to diff Example: `Qa`, 'Staging', 'Prod'.

---

##### `roleDuration`<sup>Optional</sup> <a name="roleDuration" id="@time-loop/clickup-projen.cdkDiffWorkflow.EnvToDiff.property.roleDuration"></a>

```typescript
public readonly roleDuration: number;
```

- *Type:* number

Duration in seconds for the assumed role to be valid Defaut value: `900`.

---

### ExplicitStacksEnvToDiff <a name="ExplicitStacksEnvToDiff" id="@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.Initializer"></a>

```typescript
import { cdkDiffWorkflow } from '@time-loop/clickup-projen'

const explicitStacksEnvToDiff: cdkDiffWorkflow.ExplicitStacksEnvToDiff = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.labelToApplyWhenNoDiffPresent">labelToApplyWhenNoDiffPresent</a></code> | <code>string</code> | Label that will be applied to the PR when there are no changes in the diff Example: `no-qa-changes`. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.name">name</a></code> | <code>string</code> | Unique name for the cdk diff action. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.oidcRoleArn">oidcRoleArn</a></code> | <code>string</code> | Name of the OIDC role name which contains neccesasry IAM policies to run the CDK diff. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.stacks">stacks</a></code> | <code>string[]</code> | Explicit stacks given instead of using stackSearchString to find stacks via cdk ls Example: `['stack1', 'stack2']`. |
| <code><a href="#@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.roleDuration">roleDuration</a></code> | <code>number</code> | Duration in seconds for the assumed role to be valid Defaut value: `900`. |

---

##### `labelToApplyWhenNoDiffPresent`<sup>Required</sup> <a name="labelToApplyWhenNoDiffPresent" id="@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.labelToApplyWhenNoDiffPresent"></a>

```typescript
public readonly labelToApplyWhenNoDiffPresent: string;
```

- *Type:* string

Label that will be applied to the PR when there are no changes in the diff Example: `no-qa-changes`.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the cdk diff action.

This will be used to create the output file name, header on comments, and more
Example: `qa`, `staging`, `prod`

---

##### `oidcRoleArn`<sup>Required</sup> <a name="oidcRoleArn" id="@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.oidcRoleArn"></a>

```typescript
public readonly oidcRoleArn: string;
```

- *Type:* string

Name of the OIDC role name which contains neccesasry IAM policies to run the CDK diff.

Example arn: `arn:aws:iam::123123123123:role/squad-github-actions-permissions-squad-cdk-github-actions-role`

---

##### `stacks`<sup>Required</sup> <a name="stacks" id="@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.stacks"></a>

```typescript
public readonly stacks: string[];
```

- *Type:* string[]

Explicit stacks given instead of using stackSearchString to find stacks via cdk ls Example: `['stack1', 'stack2']`.

---

##### `roleDuration`<sup>Optional</sup> <a name="roleDuration" id="@time-loop/clickup-projen.cdkDiffWorkflow.ExplicitStacksEnvToDiff.property.roleDuration"></a>

```typescript
public readonly roleDuration: number;
```

- *Type:* number

Duration in seconds for the assumed role to be valid Defaut value: `900`.

---

### InjectionOptions <a name="InjectionOptions" id="@time-loop/clickup-projen.cdkContextJson.InjectionOptions"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.cdkContextJson.InjectionOptions.Initializer"></a>

```typescript
import { cdkContextJson } from '@time-loop/clickup-projen'

const injectionOptions: cdkContextJson.InjectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.cdkContextJson.InjectionOptions.property.lookupAccountId">lookupAccountId</a></code> | <code>string</code> | The account number where the role the GH actions will assume lives. |
| <code><a href="#@time-loop/clickup-projen.cdkContextJson.InjectionOptions.property.awsRegion">awsRegion</a></code> | <code>string</code> | Which region should GH Auth into? |
| <code><a href="#@time-loop/clickup-projen.cdkContextJson.InjectionOptions.property.roleDurationSeconds">roleDurationSeconds</a></code> | <code>number</code> | How long should the requested role be valid. |

---

##### `lookupAccountId`<sup>Required</sup> <a name="lookupAccountId" id="@time-loop/clickup-projen.cdkContextJson.InjectionOptions.property.lookupAccountId"></a>

```typescript
public readonly lookupAccountId: string;
```

- *Type:* string

The account number where the role the GH actions will assume lives.

This is usually the same account running cdk-pipelines,
but can be any account which has been configured with

```ts
cdk bootstrap --trust-for-lookup $this_account_number ...
```

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@time-loop/clickup-projen.cdkContextJson.InjectionOptions.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string
- *Default:* 'us-west-2'

Which region should GH Auth into?

---

##### `roleDurationSeconds`<sup>Optional</sup> <a name="roleDurationSeconds" id="@time-loop/clickup-projen.cdkContextJson.InjectionOptions.property.roleDurationSeconds"></a>

```typescript
public readonly roleDurationSeconds: number;
```

- *Type:* number
- *Default:* 900 15min seems pretty generous.

How long should the requested role be valid.

---

### LinkInfo <a name="LinkInfo" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo.Initializer"></a>

```typescript
import { datadogServiceCatalog } from '@time-loop/clickup-projen'

const linkInfo: datadogServiceCatalog.LinkInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo.property.name">name</a></code> | <code>string</code> | The name of the link. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo.property.type">type</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.LinkType</code> | The type for the link. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo.property.url">url</a></code> | <code>string</code> | The URL of the link. |

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the link.

---

##### `type`<sup>Required</sup> <a name="type" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo.property.type"></a>

```typescript
public readonly type: LinkType;
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.LinkType

The type for the link.

Acceptable values are: 'doc', 'runbook', 'repo', 'dashboard', and 'other'

---

##### `url`<sup>Required</sup> <a name="url" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the link.

---

### OptionalNodeVersion <a name="OptionalNodeVersion" id="@time-loop/clickup-projen.OptionalNodeVersion"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.OptionalNodeVersion.Initializer"></a>

```typescript
import { OptionalNodeVersion } from '@time-loop/clickup-projen'

const optionalNodeVersion: OptionalNodeVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.OptionalNodeVersion.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | Specify a nodeVersion. |

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@time-loop/clickup-projen.OptionalNodeVersion.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string
- *Default:* should be parameters.PROJEN_NODE_VERSION

Specify a nodeVersion.

---

### Options <a name="Options" id="@time-loop/clickup-projen.cdkContextJson.Options"></a>

Options to support cdk.context.json management.

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.cdkContextJson.Options.Initializer"></a>

```typescript
import { cdkContextJson } from '@time-loop/clickup-projen'

const options: cdkContextJson.Options = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.cdkContextJson.Options.property.createOidcRoleStack">createOidcRoleStack</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.cdkContextJson.Options.property.injectionOptions">injectionOptions</a></code> | <code>@time-loop/clickup-projen.cdkContextJson.InjectionOptions</code> | You must configure this if you want to self-mutation cdk.context.json. |

---

##### `createOidcRoleStack`<sup>Optional</sup> <a name="createOidcRoleStack" id="@time-loop/clickup-projen.cdkContextJson.Options.property.createOidcRoleStack"></a>

```typescript
public readonly createOidcRoleStack: boolean;
```

- *Type:* boolean
- *Default:* do not create stack SampleCode for OIDC role

---

##### `injectionOptions`<sup>Optional</sup> <a name="injectionOptions" id="@time-loop/clickup-projen.cdkContextJson.Options.property.injectionOptions"></a>

```typescript
public readonly injectionOptions: InjectionOptions;
```

- *Type:* @time-loop/clickup-projen.cdkContextJson.InjectionOptions
- *Default:* do not modify the build workflow to authorize against AWS.

You must configure this if you want to self-mutation cdk.context.json.

---

### ReleaseEventOptions <a name="ReleaseEventOptions" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions"></a>

Options to set for the event sent to Datadog on release.

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions.Initializer"></a>

```typescript
import { datadog } from '@time-loop/clickup-projen'

const releaseEventOptions: datadog.ReleaseEventOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.datadogApiKey">datadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.datadogUs">datadogUs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventPriority">eventPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventTags">eventTags</a></code> | <code>@time-loop/clickup-projen.datadog.ReleaseEventTags</code> | Additional tags to append to the standard tags (project, release, version, actor). |
| <code><a href="#@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventText">eventText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventTitle">eventTitle</a></code> | <code>string</code> | *No description.* |

---

##### `datadogApiKey`<sup>Optional</sup> <a name="datadogApiKey" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.datadogApiKey"></a>

```typescript
public readonly datadogApiKey: string;
```

- *Type:* string
- *Default:* secrets.DD_PROJEN_RELEASE_API_KEY

---

##### `datadogUs`<sup>Optional</sup> <a name="datadogUs" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.datadogUs"></a>

```typescript
public readonly datadogUs: boolean;
```

- *Type:* boolean
- *Default:* true

---

##### `eventPriority`<sup>Optional</sup> <a name="eventPriority" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventPriority"></a>

```typescript
public readonly eventPriority: string;
```

- *Type:* string
- *Default:* normal

---

##### `eventTags`<sup>Optional</sup> <a name="eventTags" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventTags"></a>

```typescript
public readonly eventTags: ReleaseEventTags;
```

- *Type:* @time-loop/clickup-projen.datadog.ReleaseEventTags
- *Default:* undefined

Additional tags to append to the standard tags (project, release, version, actor).

---

##### `eventText`<sup>Optional</sup> <a name="eventText" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventText"></a>

```typescript
public readonly eventText: string;
```

- *Type:* string
- *Default:* The release repo and semantically versioned release number

---

##### `eventTitle`<sup>Optional</sup> <a name="eventTitle" id="@time-loop/clickup-projen.datadog.ReleaseEventOptions.property.eventTitle"></a>

```typescript
public readonly eventTitle: string;
```

- *Type:* string
- *Default:* The release repo and semantically versioned release number

---

### ReleaseEventOptions <a name="ReleaseEventOptions" id="@time-loop/clickup-projen.slackAlert.ReleaseEventOptions"></a>

Options to set for the event sent to Slack on release.

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.slackAlert.ReleaseEventOptions.Initializer"></a>

```typescript
import { slackAlert } from '@time-loop/clickup-projen'

const releaseEventOptions: slackAlert.ReleaseEventOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.slackAlert.ReleaseEventOptions.property.messageBody">messageBody</a></code> | <code>string</code> | Override the default slack message body. |
| <code><a href="#@time-loop/clickup-projen.slackAlert.ReleaseEventOptions.property.messageTitle">messageTitle</a></code> | <code>string</code> | Override the default slack message title. |
| <code><a href="#@time-loop/clickup-projen.slackAlert.ReleaseEventOptions.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@time-loop/clickup-projen.slackAlert.ReleaseEventOptions.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

Override the default slack message body.

---

##### `messageTitle`<sup>Optional</sup> <a name="messageTitle" id="@time-loop/clickup-projen.slackAlert.ReleaseEventOptions.property.messageTitle"></a>

```typescript
public readonly messageTitle: string;
```

- *Type:* string

Override the default slack message title.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@time-loop/clickup-projen.slackAlert.ReleaseEventOptions.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string
- *Default:* secrets.PROJEN_RELEASE_SLACK_WEBHOOK

---

### ReleaseEventTags <a name="ReleaseEventTags" id="@time-loop/clickup-projen.datadog.ReleaseEventTags"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.datadog.ReleaseEventTags.Initializer"></a>

```typescript
import { datadog } from '@time-loop/clickup-projen'

const releaseEventTags: datadog.ReleaseEventTags = { ... }
```


### RenovateOptionsConfig <a name="RenovateOptionsConfig" id="@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig.Initializer"></a>

```typescript
import { renovateWorkflow } from '@time-loop/clickup-projen'

const renovateOptionsConfig: renovateWorkflow.RenovateOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig.property.autoMergeNonBreakingUpdates">autoMergeNonBreakingUpdates</a></code> | <code>boolean</code> | Whether to auto merge non breaking dependency updates. |
| <code><a href="#@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig.property.defaultOverrides">defaultOverrides</a></code> | <code>projen.RenovatebotOptions</code> | Allows overriding any renovate config option default. |

---

##### `autoMergeNonBreakingUpdates`<sup>Optional</sup> <a name="autoMergeNonBreakingUpdates" id="@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig.property.autoMergeNonBreakingUpdates"></a>

```typescript
public readonly autoMergeNonBreakingUpdates: boolean;
```

- *Type:* boolean

Whether to auto merge non breaking dependency updates.

Note: if you have the "Require review from Code Owners" option enabled in the branch protection rules this will not work

---

##### `defaultOverrides`<sup>Optional</sup> <a name="defaultOverrides" id="@time-loop/clickup-projen.renovateWorkflow.RenovateOptionsConfig.property.defaultOverrides"></a>

```typescript
public readonly defaultOverrides: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions

Allows overriding any renovate config option default.

This is deep merged into the default config

---

### SendSlackOptions <a name="SendSlackOptions" id="@time-loop/clickup-projen.slackAlert.SendSlackOptions"></a>

Options to add to interface for projects that wish to off send slack functionality.

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.slackAlert.SendSlackOptions.Initializer"></a>

```typescript
import { slackAlert } from '@time-loop/clickup-projen'

const sendSlackOptions: slackAlert.SendSlackOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.slackAlert.SendSlackOptions.property.sendSlackWebhookOnRelease">sendSlackWebhookOnRelease</a></code> | <code>boolean</code> | Should we send a slack webhook on release (required for compliance audits). |
| <code><a href="#@time-loop/clickup-projen.slackAlert.SendSlackOptions.property.sendSlackWebhookOnReleaseOpts">sendSlackWebhookOnReleaseOpts</a></code> | <code>@time-loop/clickup-projen.slackAlert.ReleaseEventOptions</code> | Slack alert on release options. |

---

##### `sendSlackWebhookOnRelease`<sup>Optional</sup> <a name="sendSlackWebhookOnRelease" id="@time-loop/clickup-projen.slackAlert.SendSlackOptions.property.sendSlackWebhookOnRelease"></a>

```typescript
public readonly sendSlackWebhookOnRelease: boolean;
```

- *Type:* boolean
- *Default:* true

Should we send a slack webhook on release (required for compliance audits).

---

##### `sendSlackWebhookOnReleaseOpts`<sup>Optional</sup> <a name="sendSlackWebhookOnReleaseOpts" id="@time-loop/clickup-projen.slackAlert.SendSlackOptions.property.sendSlackWebhookOnReleaseOpts"></a>

```typescript
public readonly sendSlackWebhookOnReleaseOpts: ReleaseEventOptions;
```

- *Type:* @time-loop/clickup-projen.slackAlert.ReleaseEventOptions

Slack alert on release options.

Only valid when `sendSlackWebhookOnRelease` is true.

---

### ServiceCatalogOptions <a name="ServiceCatalogOptions" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions"></a>

Service Catalog Options.

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.Initializer"></a>

```typescript
import { datadogServiceCatalog } from '@time-loop/clickup-projen'

const serviceCatalogOptions: datadogServiceCatalog.ServiceCatalogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.contacts">contacts</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.ContactInfo[]</code> | The list of contacts for the service. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.links">links</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.LinkInfo[]</code> | A list of links associated with the service. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.serviceInfo">serviceInfo</a></code> | <code>@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo[]</code> | Information about the services that will be published to the service catalog. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.serviceTags">serviceTags</a></code> | <code>{[ key: string ]: string}</code> | The list of tags that are associated with the service. |

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.contacts"></a>

```typescript
public readonly contacts: ContactInfo[];
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.ContactInfo[]
- *Default:* undefined

The list of contacts for the service.

Each of these contacts is an object with the following properties: name, type, and contact.

---

##### `links`<sup>Optional</sup> <a name="links" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.links"></a>

```typescript
public readonly links: LinkInfo[];
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.LinkInfo[]
- *Default:* undefined

A list of links associated with the service.

Each of these links is an object with the following properties: name, type, and url.

---

##### `serviceInfo`<sup>Optional</sup> <a name="serviceInfo" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.serviceInfo"></a>

```typescript
public readonly serviceInfo: ServiceInfo[];
```

- *Type:* @time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo[]

Information about the services that will be published to the service catalog.

---

##### `serviceTags`<sup>Optional</sup> <a name="serviceTags" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceCatalogOptions.property.serviceTags"></a>

```typescript
public readonly serviceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* undefined

The list of tags that are associated with the service.

---

### ServiceInfo <a name="ServiceInfo" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo"></a>

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.Initializer"></a>

```typescript
import { datadogServiceCatalog } from '@time-loop/clickup-projen'

const serviceInfo: datadogServiceCatalog.ServiceInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.application">application</a></code> | <code>string</code> | The application/product that this service assists. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.description">description</a></code> | <code>string</code> | Some details on what this service does. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.lifecycle">lifecycle</a></code> | <code>string</code> | Where is this service in the development cycle (development, staging, production, deprecated). |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.pagerdutyUrl">pagerdutyUrl</a></code> | <code>string</code> | The PagerDuty URL for the service. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.team">team</a></code> | <code>string</code> | Which squad owns this service. |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.tier">tier</a></code> | <code>string</code> | How important is this service for business functionality (low, medium, high, critical). |

---

##### `application`<sup>Optional</sup> <a name="application" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string
- *Default:* 'Not Provided'

The application/product that this service assists.

---

##### `description`<sup>Optional</sup> <a name="description" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 'Not Provided'

Some details on what this service does.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: string;
```

- *Type:* string
- *Default:* 'Not Provided'

Where is this service in the development cycle (development, staging, production, deprecated).

---

##### `pagerdutyUrl`<sup>Optional</sup> <a name="pagerdutyUrl" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.pagerdutyUrl"></a>

```typescript
public readonly pagerdutyUrl: string;
```

- *Type:* string
- *Default:* 'Not Provided'

The PagerDuty URL for the service.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string
- *Default:* project.name

The name of the service.

This must be unique across all services.

---

##### `team`<sup>Optional</sup> <a name="team" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

Which squad owns this service.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@time-loop/clickup-projen.datadogServiceCatalog.ServiceInfo.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string
- *Default:* 'low'

How important is this service for business functionality (low, medium, high, critical).

---

### TypedocDocgenOptions <a name="TypedocDocgenOptions" id="@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions"></a>

Optional properties for configuring the `typedoc` documentation generator.

This configuration provides further customization than what is offered by
projen's typescript.TypedocDocgen class.

#### Initializer <a name="Initializer" id="@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions.Initializer"></a>

```typescript
import { clickupTs } from '@time-loop/clickup-projen'

const typedocDocgenOptions: clickupTs.TypedocDocgenOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions.property.configFileContents">configFileContents</a></code> | <code>{[ key: string ]: any}</code> | Supports all config keys enumerated in the Typedoc Options. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions.property.configFilePath">configFilePath</a></code> | <code>string</code> | The file path at which to create the Typedoc config file. |
| <code><a href="#@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions.property.html">html</a></code> | <code>boolean</code> | Whether to generate the documentation in rendered HTML as opposed to the Markdown format. |

---

##### `configFileContents`<sup>Optional</sup> <a name="configFileContents" id="@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions.property.configFileContents"></a>

```typescript
public readonly configFileContents: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* {   $schema: 'https://typedoc.org/schema.json',   entryPoints: ['./src/index.ts'],   out: project.docsDirectory,   readme: 'none', }

Supports all config keys enumerated in the Typedoc Options.

https://typedoc.org/guides/options/

---

##### `configFilePath`<sup>Optional</sup> <a name="configFilePath" id="@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions.property.configFilePath"></a>

```typescript
public readonly configFilePath: string;
```

- *Type:* string
- *Default:* 'typedoc.json'

The file path at which to create the Typedoc config file.

---

##### `html`<sup>Optional</sup> <a name="html" id="@time-loop/clickup-projen.clickupTs.TypedocDocgenOptions.property.html"></a>

```typescript
public readonly html: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to generate the documentation in rendered HTML as opposed to the Markdown format.

---



## Enums <a name="Enums" id="Enums"></a>

### ContactType <a name="ContactType" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ContactType.EMAIL">EMAIL</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ContactType.SLACK">SLACK</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.ContactType.MICROSOFT_TEAMS">MICROSOFT_TEAMS</a></code> | *No description.* |

---

##### `EMAIL` <a name="EMAIL" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactType.EMAIL"></a>

---


##### `SLACK` <a name="SLACK" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactType.SLACK"></a>

---


##### `MICROSOFT_TEAMS` <a name="MICROSOFT_TEAMS" id="@time-loop/clickup-projen.datadogServiceCatalog.ContactType.MICROSOFT_TEAMS"></a>

---


### DefaultServiceCatalogValues <a name="DefaultServiceCatalogValues" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.SERVICE_VERSION">SERVICE_VERSION</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.DATADOG_HOSTNAME">DATADOG_HOSTNAME</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.DATADOG_KEY">DATADOG_KEY</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.DATADOG_APP_KEY">DATADOG_APP_KEY</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.SLACK_SUPPORT_CHANNEL">SLACK_SUPPORT_CHANNEL</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.TIER">TIER</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.NOT_PROVIDED">NOT_PROVIDED</a></code> | *No description.* |

---

##### `SERVICE_VERSION` <a name="SERVICE_VERSION" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.SERVICE_VERSION"></a>

---


##### `DATADOG_HOSTNAME` <a name="DATADOG_HOSTNAME" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.DATADOG_HOSTNAME"></a>

---


##### `DATADOG_KEY` <a name="DATADOG_KEY" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.DATADOG_KEY"></a>

---


##### `DATADOG_APP_KEY` <a name="DATADOG_APP_KEY" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.DATADOG_APP_KEY"></a>

---


##### `SLACK_SUPPORT_CHANNEL` <a name="SLACK_SUPPORT_CHANNEL" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.SLACK_SUPPORT_CHANNEL"></a>

---


##### `TIER` <a name="TIER" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.TIER"></a>

---


##### `NOT_PROVIDED` <a name="NOT_PROVIDED" id="@time-loop/clickup-projen.datadogServiceCatalog.DefaultServiceCatalogValues.NOT_PROVIDED"></a>

---


### LinkType <a name="LinkType" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkType.DOC">DOC</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkType.RUNBOOK">RUNBOOK</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkType.REPO">REPO</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkType.DASHBOARD">DASHBOARD</a></code> | *No description.* |
| <code><a href="#@time-loop/clickup-projen.datadogServiceCatalog.LinkType.OTHER">OTHER</a></code> | *No description.* |

---

##### `DOC` <a name="DOC" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkType.DOC"></a>

---


##### `RUNBOOK` <a name="RUNBOOK" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkType.RUNBOOK"></a>

---


##### `REPO` <a name="REPO" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkType.REPO"></a>

---


##### `DASHBOARD` <a name="DASHBOARD" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkType.DASHBOARD"></a>

---


##### `OTHER` <a name="OTHER" id="@time-loop/clickup-projen.datadogServiceCatalog.LinkType.OTHER"></a>

---

