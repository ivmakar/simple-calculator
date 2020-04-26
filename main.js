var elems = document.querySelectorAll('.button');
var display = document.querySelector('#display');

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', func);
}

var str = '';

function func() {
  var type = this.getAttribute('data-type');

  if (type === '=') {
    str = display.value;
    str = eval(str);
    display.value = str;
    return;
  }

  if (type === 'C') {
    display.value = '';
    return;
  }

  display.value += type;  
}   
