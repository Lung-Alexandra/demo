$.getJSON('cv.json', function (jsonData) {
// Function to generate HTML content for a section
    function generateSectionHTML(title, content) {
        var sectionHTML = '<div class="page-section">' +
            '<div class="page-section-title">' + title + '</div>' +
            '<div class="line"></div>' +
            '<div class="geometric-box"></div>' +
            '<div class="page-section-content">';

        let nrPhrases = 0;
        $.each(content, function (index, item) {
            if (item.hasOwnProperty("label")) {
                sectionHTML += '<p>' + item.label + ": " + item.value + '</p>';
            } else if (item.hasOwnProperty("year")) {
                sectionHTML += '<div class="job">' +
                    '<div class="year">' + item.year + '</div>' +
                    '<div class="where">' + item.where ;

                if (item.hasOwnProperty("thesisTitle")) {
                    var advisors = Array.isArray(item.advisors) ? item.advisors.join(', ') : item.advisors
                    sectionHTML += '<p>Title of thesis: ' + item.thesisTitle + '<br>Advisor: ' + advisors + '</p>';
                }

                sectionHTML += '</div></div>';
            } else if (item.hasOwnProperty("phrase")) {
                sectionHTML += '<p>' + item.phrase + '</p>';
                nrPhrases +=1;
            } else if (item.hasOwnProperty("title")) {
                sectionHTML += '<div class="project">';

                if (item.hasOwnProperty("link"))
                    sectionHTML += '<div class="title"> <span class="bold">' + (index - nrPhrases + 1) + '. </span><a href="' + item.link + '" class="link">' + item.title + '</a></div>'
                else sectionHTML += '<div class="title"><span class="bold">' + (index - nrPhrases + 1) + '. </span>' + item.title + '</div>';
                var team = Array.isArray(item.team) ? item.team.join(', ') : item.team

                sectionHTML += '<p>' + team + '</p>';
                sectionHTML += '</div>';
            } else if (item.hasOwnProperty("activity")) {
                sectionHTML += '<p>' + item.activity + '<a href="' + item.link + '" class="link">' + item.linkwords + '</a></p>';
            }
        });


        return sectionHTML;
    }

    // Display data for each section
    jsonData.sections.forEach(function (section, index) {
        $(".content").append(generateSectionHTML(section.title, section.content));
        $.each(section.style, function (property, value) {
            $('.page-section-content').eq(index).css(property, value);
        });

    });

});