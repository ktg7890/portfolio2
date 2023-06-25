
window.addEventListener('load', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        var sub = el.dataset.index;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
                if(sub == 'sub01') {
                    $('#title').text('테스트다');
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
     
    });
});