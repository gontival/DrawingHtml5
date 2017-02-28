/// <reference path="jquery-3.1.1.js" />
var $draggedItem;

$(document).ready(function () {
    $('.item').on('dragstart', dragging);
    $('.item').on('dragend', draggingEnded);
});

function dragging(e) {
    $(e.target).addClass('dragging');
    $draggedItem = $(e.target);
}

function draggingEnded(e) {
    $(e.target).removeClass('dragging');
}