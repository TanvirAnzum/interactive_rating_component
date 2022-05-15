const wrapper = document.getElementsByClassName('main__wrapper')[0];
const feedback = document.getElementsByClassName('main__feedback')[0];
const rate = document.getElementById('rating');
const selected = document.querySelectorAll('.main__rating-number');


let final_rating;

let marked = new Array(5).fill(0);


document.querySelectorAll('.main__rating-number').forEach(item => {
    item.addEventListener('click', event => {
      for(let i=0;i<5;i++) {
        if(marked[i]) {
          selected[i].classList.remove('main__rating-selected');
          marked[i] = 0;
        }
      }
      final_rating = item.getAttribute('value');
      marked[final_rating - 1] = 1;
      item.classList.add('main__rating-selected');
      rate.innerHTML = "You selected "+ final_rating + " out of 5"; 
    })
  })




let submit = document.getElementById('submit');


submit.addEventListener('click', event => {
    wrapper.style.display = "none";
    feedback.style.display ="grid";
})