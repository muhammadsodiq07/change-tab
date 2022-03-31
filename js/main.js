let form = document.querySelector("#form");
let text = document.querySelector('#text');
let categ = document.querySelector(".first");
let second  = document.querySelector(".second");
let third = document.querySelector(".third");
let spam = document.querySelector('.span')

categ.addEventListener('click', ()=> {
  text.value = 1
  categ.classList.add('red');
  second.classList.remove('red');
  third.classList.remove('red') ;
});

second.addEventListener('click', ()=> {
  text.value = 2
  categ.classList.remove('red');
  second.classList.add('red');
  third.classList.remove('red');
});

third.addEventListener('click', ()=> {
  text.value = 3
  categ.classList.remove('red');
  second.classList.remove('red');
  third.classList.add('red');
});
form.addEventListener("submit", (e)=> {
  e.preventDefault();
 console.log(categ);
  if(text.value == 1) {
    categ.classList.add('red');
    second.classList.remove('red');
    third.classList.remove('red') ;
    spam.innerHTML = 'positive';
  }
  else if (text.value == 2) {
    categ.classList.remove('red');
    second.classList.add('red');
    third.classList.remove('red');
    spam.innerHTML = 'negtive';
  }else if (text.value == 3) {
    categ.classList.remove('red');
    second.classList.remove('red');
    third.classList.add('red');
    spam.innerHTML = 'neural';
  }else if (text.value >= 4) {
    alert("wrong");
  }

});