const cardList = document.querySelector('.cards__list').children;
let choiceBtn = document.querySelectorAll('.card__choice');

choiceBtn.forEach((btn)=> {
  btn.addEventListener('click', (e) => {
    cardList.forEach((card)=> {
      if(card.classList.contains('active')) {
        card.classList.remove('active');
        card.querySelector('.card__choice').innerText = 'Выбрать'; 
      }
    });
    e.path[3].classList.add('active');
    btn.innerText = 'Выбрано';
  })
})