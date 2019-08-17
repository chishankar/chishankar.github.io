$(document).ready(function () {
    createJobs();
    createExperiences();
});

function createExperiences() {
    for (var exp in experiences) {
      $("#experience_list").append(
        `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="${experiences[exp].img}" class="card-img">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${experiences[exp].title}</h5>
                    <p class="card-text"><small class="text-muted">${experiences[exp].year}</small></p>
                </div>
                </div>
            </div>
        </div>
        `
      );
    }
}


function createJobs() {
    for (var job in jobs) {
      $("#experience_list").append(
        `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="${jobs[job].img}" class="card-img">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${jobs[job].title}</h5>
                    <p class="card-text"><small class="text-muted">${jobs[job].role} | ${jobs[job].year}</small></p>
                    <p class="card-text">${createJobDescriptions(job,jobs)}</p>
                </div>
                </div>
            </div>
        </div>
        `
      );
    }
  }

// Creating your job descriptions. Clickable card description
function createJobDescriptions(i, obj) {
    desc = '<ul>';
    for (var proj in obj[i].description) {
      desc += '<li class="list-group-item">' + obj[i].description[proj] + "</li>";
    }
  
    desc += "</ul>";
    return desc;
  }