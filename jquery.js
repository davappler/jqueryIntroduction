var rootEl = $('#root');
var titleEl = $('<h1>');
titleEl.text('Hello friends');
titleEl.attr('class', 'fancy');
titleEl.addClass('p-5'); //  - (`p-5` is for padding)
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');
rootEl.append(titleEl);
rootEl.append('<h2>With jQuery we can:</h2>');