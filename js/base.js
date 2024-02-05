import {addCvData} from "./cv.js"
import {addPublicationData} from "./publications.js"
import {loadPDF} from "./teaching.js";


$.get("navbar.html", function (data) {
    $("nav").replaceWith(data);
});

var currentPage = $(location).attr('href');


if (currentPage.includes('cv')) {
    addCvData();
}

if (currentPage.includes('publications')) {
    addPublicationData();
}

if (currentPage.includes('teaching')) {
    loadPDF();
}
