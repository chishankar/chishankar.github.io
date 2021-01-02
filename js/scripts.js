function getProjects() {
    classProjectList = [];
    // var values = [classes];
    for (var course in classes) {
        for (var proj in classes[course].projects) {
            // console.log(classes[course].projects[proj])
            tempProj = classes[course].projects[proj]
            tempProj.classTitle = classes[course].title;
            tempProj.semester = classes[course].semester;
            tempProj.languages = classes[course].languages;
            classProjectList.push(tempProj)
        }
    }
    return classProjectList;
}

(function ($) {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $('#txt-search').keyup(function () {
        var searchField = $(this).val();
        if (searchField === '') {
            $('#filter-records').html('');
            return;
        }
        var projects = getProjects();
        var regex = new RegExp(searchField, "i");
        var output = '';
        var count = 0;
        $.each(projects, function (key, val) {
            try {
                if ((val.description.search(regex) != -1) || (val.discription.search(regex) != -1) || (val.title.search(regex) != -1) || (val.title.search(regex) != -1)) {
                    output += `<div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><span><i class="fas fa-project-diagram"></i></span>
                            ${val.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${val.classTitle} | ${val.semester} </h6>
                            <p class="card-text">${val.description}</p>
                        </div>
                    </div>`
                    count++;
                }
            } catch (err) { }
        });
        $('#project-count').html(count);
        $('#filter-records').html(output);
    });

})(jQuery); // End of use strict
