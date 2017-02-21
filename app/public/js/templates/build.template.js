
const BuildTemplate = function(build) {

  const stageToTemplate = function(stages) {
    const templateString = stage =>
    `<section class="build-stage ${stage.result}">
      <h3 class="build-stage-result">${stage.result}</h3>
      <p>${stage.name}</p>
    </section>`;
    return stages.map(templateString).join('');
  };

  const templateString =
  `<section class="build-info" id="${build.commitHash}">
    <section class="build-commit-details">
      <img src="https://www.gravatar.com/avatar/${build.user.avatar.gravatar}" alt="">
      <h1>${build.commitMessage}</h1>
    </section>
    <section class="build-stages">
      ${stageToTemplate(build.pipelines)}
    </section>
  </section>
  `;

  return templateString;

};