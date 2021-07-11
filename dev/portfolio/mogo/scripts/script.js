'use dirict'
let acord = document.querySelectorAll('.block__list');

for (let element of acord) {

  element.onclick = function() {
    element.classList.toggle('active')
  };
}
