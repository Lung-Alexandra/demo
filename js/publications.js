function addPublicationData() {
    $.getJSON('publications.json', function (jsonData) {
        $.each(jsonData.sections, function (index, sec) {
            var section = '<div class="up-titles"><div class="bold subtiles"><span>' + sec.title + '</span></div>' +
                '</div>'
            $('.content').append(section);
            $.each(sec.content, function (index, publication) {
                var pub = '<div class="publication">';
                pub += '<p class="information"><span>' + (index + 1).toString().padStart(2, '0') + '.</span> ';
                pub += [
                    publication.authors,
                    '<span class="italic">' + publication.title + '</span>',
                    publication.subtitle,
                    publication.place,
                    publication.year,
                    publication.volume,
                    publication.page ? '<span class="nowraptext">' + publication.page + '</span>' : '', // Verificare pentru pagini
                    publication.yearAfter
                ].filter(Boolean).join(", ");
                pub += '</div>'

                // Append the generated pub to the body
                $('.content').append(pub);
            });

        });
    });
}
export {addPublicationData}