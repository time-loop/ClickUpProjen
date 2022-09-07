import { JobPermission } from 'projen/lib/github/workflows-model';
import { NodeProject } from 'projen/lib/javascript';

export module datadog {
  export interface ReleaseEventTags extends Record<string, string | boolean> {}

  export interface ReleaseEventOptions {
    /**
     * @default secrets.DD_PROJEN_RELEASE_API_KEY
     */
    readonly datadog_api_key?: string;
    /**
     * @default The release repo and semantically versioned release number
     */
    readonly event_title?: string;
    /**
     * @default The release repo and semantically versioned release number
     */
    readonly event_text?: string;
    /**
     * @default normal
     */
    readonly event_priority?: 'normal' | 'low';
    /**
     * @default true
     */
    readonly datadog_us?: boolean;
    /**
     * Additional tags to append to the standard tags (project, release, version, actor)
     * @default undefined
     */
    readonly event_tags?: ReleaseEventTags;
  }

  // When passed in ReleaseEventOptions is rendered, this interface is the result
  // which is passed directly to the GitHub Action inputs.
  // Based on: https://github.com/Glennmen/datadog-event-action/releases/tag/1.1.0
  interface ReleaseEventActionOptions extends Omit<ReleaseEventOptions, 'event_tags'> {
    /**
     * Formatted as an array of stringified, colon delimited key:value pairs.
     * Example: '["Key1:Val1", "Key2:Val2"]'
     */
    readonly event_tags: string;
  }

  /**
   * Adds a 'send Datadog release event' job to the release workflow, if it exists.
   * Uses the DD_PROJEN_RELEASE_API_KEY for authentication to Datadog.
   *
   * @param project The NodeProject to which the release event workflow will be added
   * @param opts Optional properties to send along with the DD release event
   */
  export function addReleaseEvent(project: NodeProject, opts?: ReleaseEventOptions) {
    project.release?.addJobs({
      send_release_event: {
        name: 'Send Release Event',
        permissions: {
          contents: JobPermission.READ,
        },
        runsOn: ['ubuntu-latest'],
        needs: ['release'],
        if: 'needs.release.outputs.latest_commit == github.sha',
        env: {
          CI: 'true',
        },
        steps: [
          {
            name: 'Download build artifacts',
            uses: 'actions/download-artifact@v3',
            with: {
              name: 'build-artifact',
              path: project.release!.artifactsDirectory,
            },
          },
          {
            name: 'Get version',
            id: 'event_metadata',
            run: `echo ::set-output name=release_tag::"$(cat ${project.release!.artifactsDirectory}/releasetag.txt)"`,
          },
          {
            name: 'Send Datadog event',
            // https://github.com/Glennmen/datadog-event-action/releases/tag/1.1.0
            uses: 'Glennmen/datadog-event-action@fb18624879901f1ff0c3c7e1e102179793bfe948',
            with: setReleaseEventInputs(project, opts),
          },
        ],
      },
    });
  }

  function parseReleaseEventTags(tags: ReleaseEventTags): string {
    const tagsArr = Object.keys(tags).map((key) => `${key}:${tags[key]}`);
    return JSON.stringify(tagsArr);
  }

  function setReleaseEventInputs(project: NodeProject, opts?: ReleaseEventOptions): ReleaseEventActionOptions {
    const defaultTags: ReleaseEventTags = {
      project: project.name,
      release: true,
      version: '${{ steps.event_metadata.outputs.release_tag }}',
      actor: '${{ github.actor }}',
    };
    const rendered: ReleaseEventActionOptions = {
      datadog_api_key: opts?.datadog_api_key ?? '${{ secrets.DD_PROJEN_RELEASE_API_KEY }}',
      datadog_us: opts?.datadog_us ?? true,
      event_title:
        opts?.event_title ?? `Released ${project.name} version \${{ steps.event_metadata.outputs.release_tag }}`,
      event_text:
        opts?.event_text ?? `Released ${project.name} version \${{ steps.event_metadata.outputs.release_tag }}`,
      event_priority: opts?.event_priority ?? 'normal',
      event_tags: parseReleaseEventTags({ ...defaultTags, ...opts?.event_tags }),
    };
    return rendered;
  }
}
