var rootEl = document.getElementById("root"); // or  var rootEl = document.querySelector("#root");
var titleEl = document.createElement("h1");
titleEl.textContent = "Hello friends";
titleEl.className = 'fancy';
titleEl.classList.add('p-5') //  - (`p-5` is for padding)
titleEl.style.border = "rgb(122, 242, 242) 3px solid";
rootEl.appendChild(titleEl);
var alertButtonEl = document.querySelector('#alert-btn');
alertButtonEl.addEventListener('click', function () {
    alert('Hello World');
  });
document.querySelector("body").setAttribute("style", "background-color:red;");