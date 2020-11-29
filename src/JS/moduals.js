const $ = require('jquery')
window.onload = Init

function Init() {
    $('#winhead-section').load('../HTML/sections/application_header.html')
    $('#nav-section').load('../HTML/sections/nav.html')
}
