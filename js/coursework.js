
$(document).ready(function () {
    createCourses();
});

// Creates courses and the button
function createCourses() {
  for (var course in classes) {
    let id = getRandID()
    $("#course_list").append(
        `
        <div class="class-project">
            <h2>${classes[course].title}</h2>
            <p>${course} | ${classes[course].semester}</p>
            <a class="btn btn-primary" data-toggle="collapse" href="#${id}" role="button"
                aria-expanded="false" aria-controls="${id}" >
                ${course} Projects
            </a>
            <div class="collapse card-spacing" id="${id}">
                <div class="card card-body language-barrier">
                    ${createLanguages(course,classes)}
                    ${createClassProjects(course,classes)}
                </div>
            </div>
        </div>
        `
    );
  }
}
function createClassProjects(i,obj){
    let projects = '';
    for (var proj in obj[i].projects) {
        projects +=
          '<h4>' + obj[i].projects[proj].title + '</h4>' +
          '<p>' + obj[i].projects[proj].description +
          '</p>'
    }
    return projects

}

function createLanguages(i, obj) {
    languages = 'Languages: ';
    if (obj[i].languages.length == 0) {
      return "None";
    }
  
    for (var lang in obj[i].languages) {
      if (lang <= obj[i].languages.length - 2) {
        languages += "<code>" + obj[i].languages[lang] + "</code> | ";
      } else {
        languages += "<code>" + obj[i].languages[lang] + "</code>";
      }
    }
    return languages;
  }

function getRandID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '' + Math.random().toString(36).substr(2, 9);
  };