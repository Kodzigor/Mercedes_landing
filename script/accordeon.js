const btn = document.querySelector('.feature__link');
const btns = document.querySelectorAll('.feature__link');
const features = document.querySelectorAll('.feature-sub');
// console.dir(btn);

// btn.addEventListener('click', () => {
//     alert('click');
// })


// for(let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => console.log(btns[i]));
// }

btns.forEach((item, index) => {
    
    item.addEventListener('click', () => {
        btns.forEach((item) => {
            item.classList.remove('feature__link_active')
        })

       item.classList.add('feature__link_active')

       features.forEach((listitem) => {
           listitem.classList.add('hidden')
       })

       features[index].classList.remove('hidden')
  })
})

