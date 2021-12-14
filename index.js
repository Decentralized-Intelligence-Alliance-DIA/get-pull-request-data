const core = require('@actions/core');
const github = require('@actions/github');

(function run() {
  if (!(github && github.context && github.context.payload && github.context.payload.pull_request)) {
    throw new Error('There is no pull request data');
  }

  const title = github.context.payload.pull_request.title;
  core.info(`PR title: ${title}`);
  const prURL = github.context.payload.pull_request._links.html.href;
  core.info(`PR url: ${prURL}`);

  if (!title) throw new Error(`Pull request title is empty`);
  core.info(`Title: ${title}`);

  core.setOutput('title', title);
  core.setOutput('url', prURL);
  core.info(`PR title: ${title}`);
  core.info(`PR URL: ${prURL}`);
})();
