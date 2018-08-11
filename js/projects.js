$(document).ready(function () {
  createProjectCards();
  createJobs();
  createExperiences();
  createCourses();

});

// Creating your job descriptions. Clickable card description
function createProjectDescriptions(i, obj) {
  desc = '<ul class="list-group list-group-flush">';
  for (var proj in obj[i].description) {
    desc += '<li class="list-group-item">' + obj[i].description[proj] + "</li>";
  }

  desc += "</ul>";
  return desc;
}

// Creates class project lists for each class
function createClassProjects(i, obj) {
  if (obj[i].projects == 0) {
    return "No projects";
  }

  projects = "<ul>" + createLanguages(i, obj);

  for (var proj in obj[i].projects) {
    projects +=
      "<li>" +
      '<h4>' + obj[i].projects[proj].title + '</h4>' +
      '<div>' + obj[i].projects[proj].description +
      '</div>' +
      "</li>";
  }

  projects += "</ul>";
  return projects;
}

// Creates the string of languages for the projects and the course
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

// Creates the links for jobs and the websites
function createJobsLinks(i, obj) {
  links = '';
  for (var link in obj[i].links) {
    links += '<a href="' + obj[i].links[link] + '">' + link + '</a>'
  }
  return links;
}

// Creates projects links for the different links
function createProjectLinks(i, obj) {
  links = '';

  if (obj[i].github != null) {
    links = links + '<a target="_blank" href="' + obj[i].github + '">Github</a>';
  }
  if (obj[i].devpost != null) {
    links = links + '<a target="_blank" href="' + obj[i].devpost + '">Devpost</a>';
  }
  if (obj[i].youtube != null) {
    links = links + '<a target="_blank" href="' + obj[i].youtube + '">Youtube</a>';
  }
  if (obj[i].website != null) {
    links = links + '<a target="_blank" href="' + obj[i].website + '">Website</a>';
  }
  return links;
}

// Creates the project cards
function createProjectCards() {
  for (var project in projects) {
    $("#project_list").append(
      '<div class="col-md-12 col-sm-12 col-xs-12 m6  bounceIn">' +
      '<div class="card blue-grey darken-1">' +
      '<div class="card-content white-text">' +
      '<span class="card-title">' + projects[project].title + '<h6>' + projects[project].semester + ' | ' + projects[project].type + ' </h6></span>' +
      '<p><b>Purpose: </b>' + projects[project].description +
      '</p>' +
      '</div>' +
      '<div class="card-action">' + createProjectLinks(project, projects) + '</div>' +
      '</div>' +
      '</div> '
    );
  }
}

// Creates job cards
function createJobs() {
  for (var job in jobs) {
    $("#experience_list").append(
      '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">' +
      '<div class="card">' +
      '<div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' + jobs[job].img + '">' +
      '</div>' +
      '<div class="card-content jobs">' +
      '<span class="card-title activator grey-text text-darken-4"><b>' + jobs[job].title + '<h6>' + jobs[job].role + ' | ' + jobs[job].year + '</h6></b></span>' +
      createJobsLinks(job, jobs) +
      '</div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4"><b>' + jobs[job].title + '</b><i class="material-icons right">close</i></span>' +
      '<p>' + createProjectDescriptions(job, jobs) +
      '</p>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }
}

// Create hackathon cards
function createExperiences() {
  for (var exp in experiences) {
    $("#experience_list").append(
      '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">' +
      '<div class="card">' +
      '<div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' + experiences[exp].img + '">' +
      '</div>' +
      '<div class="card-content experience">' +
      '<span class="card-title activator grey-text text-darken-4"><b>' + experiences[exp].title + '<h6> ' + experiences[exp].year + '</h6></b></span>' +
      createJobsLinks(exp, experiences) +
      '</div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4"><b>' + experiences[exp].title + '</b><i class="material-icons right">close</i></span>' +
      '<p>' +
      '</p>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }
}

// Creates courses and the button
function createCourses() {
  for (var course in classes) {
    $("#course_list").append(
      '<div class="col-md-12 col-sm-12 col-xs-12">' +
      '<div class="service-item">' +
      '<h3>' + classes[course].title + '<h6>' + course + ' | ' + classes[course].semester + '</h6></h3>' +
      '</div>' +
      '<a class="btn btn-primary" data-toggle="collapse" href="#' + course + '" role="button" aria-expanded="false" aria-controls="collapseExample">' +
      course + ' projects' +
      '</a>' +
      '<div class="collapse" id="' + course + '">' +
      '<div class="card card-body">' +
      createClassProjects(course, classes) +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }
}