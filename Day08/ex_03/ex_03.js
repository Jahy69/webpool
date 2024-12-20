document.addEventListener("DOMContentLoaded", function () {
    const elements = [
        {selector: '#button', msg: 'This is a clickable button!'},
        {selector: '#square', msg: 'This is a square!'},
        {selector: '#mp3', msg: 'This is a sound player!'},
        {selector: '#image', msg: 'This is an image!'},
        {selector: '#mp4', msg: 'This is a video player!'}
    ];

    elements.forEach(function (e) {
        tippy(e.selector, {
            content: e.msg,
            trigger: 'click',
            interactive: true,
            hideOnClick: true,
        });
    });

});
