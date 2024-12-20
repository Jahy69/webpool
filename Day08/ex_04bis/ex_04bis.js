$(document).ready(function () {
    function houdini(name) {
        $("#" + name).fadeOut("fast");
        $("." + name).fadeOut("fast");
    }
    houdini("test");
});
