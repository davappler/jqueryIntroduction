var rootEl = $('#root');
var titleEl = $('<h1>');
titleEl.text('Hello friends');
titleEl.attr('class', 'fancy');
titleEl.addClass('p-5'); //  - (`p-5` is for padding)
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');
rootEl.append(titleEl);
var alertButtonEl = $('#alert-btn');
alertButtonEl.on('click', function () {
    alert('Hello World');
  });
$('body').css({ 'background-color': 'red'});