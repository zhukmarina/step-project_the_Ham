const filterBox = document.querySelectorAll('.box');

let filterBtn = document.querySelector('.our-amazing-work__panel');

filterBtn.addEventListener('click', (event) => {
console.log(1)
    if (event.target.tagName == 'A') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});