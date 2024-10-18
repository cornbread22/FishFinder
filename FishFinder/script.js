(function () {
    var cx = '210b06286d70b46c7';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol ==
        'https:' ? 'https:': 'http:') +
    '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
window.onload = function () {
    var title = "Search Geeksforgeeks";
    var textBox = document.querySelector("#gsc-i-id1");
    var button = document.querySelector
    (".gsc-search-button-v2 svg title");
    textBox.placeholder = title;
    textBox.title = title;
    button.innerHTHL = title;
}

