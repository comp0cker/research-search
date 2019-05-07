$(document).ready(function() {

    function app(key){
        $('.list').append(
            "<ul class = 'collection with-header'>" +
            "<li class = 'collection-header'><h5>" + key + "</h5></li>" +
            "<li class = 'collection-item'>" + data[key] + "</li>");
    }

    function parse(input, key){
        var split = input.split(" ");

        for (var j = 0; j < split.length; j++) {
            if (data[key].toLowerCase().indexOf(split[j].toLowerCase()) >= 0
                || key.toLowerCase().indexOf(split[j].toLowerCase()) >= 0);
            else
                return 0;
        }

        return 1;
    }

    for (var key in data) {
        app(key);
    }


    $('#search').keyup(function () {
        $('.prompt').text("Results for " + $(this).val() + ":");
        $('.list').empty();

        for (var key in data) {
            if (parse($(this).val(), key)){
                app(key);
            }
        }
    });
});