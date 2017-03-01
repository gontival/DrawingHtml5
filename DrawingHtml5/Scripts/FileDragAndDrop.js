/// <reference path="jquery-3.1.1.js" />
$(document).ready(function () {
    //jQuery.event.props.push()
    $('#target').on('dragenter', preventDefault);
    $('#target').on('dragover', preventDefault);
    $('#target').on('drop', dropItem);
});

function preventDefault(e){
    e.preventDefault();
}

function dropItem(e) {
    e.dataTransfer = e.originalEvent.dataTransfer;
    preventDefault(e);
    var files = e.dataTransfer.files;
    var $table = $('#fileInfo');
    var i = 0;
    $table.html(
        '<thead><tr><th>Name</th><th>Type</th><th>Size</th></thead>');
    for(i=0; i < files.length; i++)
    {
        $('<tr><td>'
            + files[i].name + '</td><td>'
            + files[i].type + '</td><td>'
            + files[i].size + '</td><>tr>').appendTo($table);
    }
}
