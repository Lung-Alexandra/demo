$.getJSON('publications.json', function(jsonData) {
    // Iterate through the publications and generate pub
    $.each(jsonData.publications, function(index, publication) {
        var pub = '<div class="publication">';
        pub += '<div class="number">' + (index + 1).toString().padStart(2, '0') + '</div>';
        pub += '<div class="title bold">' + publication.title + '</div>';
        pub += '<div class="subtitle">' + (publication.subtitle || publication.volume) + '</div>';
        pub += '<div class="authors">' + publication.authors + '</div>';
        pub += '<div class="details">';
        pub += '<div class="links">';
        if (publication.details.link) {
            pub+='<a href="' + publication.details.link + '" class = "link">'+publication.details.link+'</a>';
        } else if (publication.details.pages) {
            pub += 'Pages: ' + publication.details.pages;
        }
        pub +='</div>'
        pub += '<div class="an">' + publication.details.year + '</div>';
        pub += '</div>';
        pub += '</div>';

        // Append the generated pub to the body
        $('.content').append(pub);
    });

});
