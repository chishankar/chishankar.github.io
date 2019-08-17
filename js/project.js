
$(document).ready(function () {
    createProjects();
});

function createProjects(){
    for (var proj in projects){
        $("#project_list").append(
            `
            <div class="card text-center">
                <div class="card-header">
                    <h4>${projects[proj].title}</h4>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${projects[proj].semester} | ${projects[proj].type}</h5>
                    <p class="card-text">${projects[proj].description}</p>
                </div>
                <div class="card-footer text-muted">
                    ${createProjectLinks(proj, projects)}
                </div>
            </div>
            `
        )
    }
}


// Creates projects links for the different links
function createProjectLinks(i, obj) {
    links = '';
  
    if (obj[i].github != null) {
      links = links + '<a class="links" target="_blank" href="' + obj[i].github + '">Github</a>';
    }
    if (obj[i].devpost != null) {
      links = links + '<a class="links" target="_blank" href="' + obj[i].devpost + '">Devpost</a>';
    }
    if (obj[i].youtube != null) {
      links = links + '<a class="links" target="_blank" href="' + obj[i].youtube + '">Youtube</a>';
    }
    if (obj[i].website != null) {
      links = links + '<a class="links" target="_blank" href="' + obj[i].website + '">Website</a>';
    }
    return links;
  }