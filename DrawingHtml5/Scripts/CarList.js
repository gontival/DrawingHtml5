/// <reference path="jquery-3.1.1.js" />
$(document).ready(function () {
    
    $('#carList').on('dragstart', dragging);
    $('#favoriteCars').on('dragenter', preventDefault);
    $('#favoriteCars').on('dragover', preventDefault);
    $('#favoriteCars').on('drop', dropItem);
    //jQuery.event.props.push('dataTransfer');
});

function dragging(e) {
    e.dataTransfer = e.originalEvent.dataTransfer;
    var val = e.target.getAttribute('data-value');
    e.dataTransfer.setData('text', val);
    e.dataTransfer.effectAllowed = 'copy';
}

function preventDefault(e) { e.preventDefault(); }

function dropItem(e) {
    e.dataTransfer = e.originalEvent.dataTransfer;
    var data = e.dataTransfer.getData('text').split(',');
    if (data[0] == 'car') {
        var li = document.createElement('li');
        li.textContent = data[1];
        e.target.appendChild(li);
    }
}
