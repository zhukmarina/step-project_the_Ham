let respones = [
  { class:  'box wordpress'   ,
    img: './img/amaizing/open-magazine.jpg',  },
  { class:  'box landing_pages',     
    img: './img/amaizing/paper.jpg',  },
  { class:  'box landing_pages'   ,   
    img: './img/amaizing/megapack.jpg',  },
  { class:  'box web_design'  ,    
    img: './img/amaizing/cup.jpg',  },
  { class:  'box graphic_design'  ,    
    img: './img/amaizing/gadjest.jpg',  },
  { class:  'box wordpress'     , 
    img: './img/amaizing/box.jpg',  },
  { class:  'box graphic_design'  ,    
    img: './img/amaizing/magazine.jpg',  },
  { class:  'box web_design'    ,  
    img: './img/amaizing/black.jpg',  },
  { class:  'box landing_pages'   ,   
    img: './img/amaizing/tybys.jpg',  },
  { class:  'box wordpress'     , 
    img: './img/amaizing/pink-gadjest.jpg',  },
  { class:  'box web_design'     , 
    img: './img/amaizing/disk.jpg',  },
  { class:  'box graphic_design' ,     
    img: './img/amaizing/open-magazine.jpg',  },          
];
let ask = document.getElementById('js-add-more-btn')
ask.addEventListener('click', () => {
  ask.innerText = 'loading.....'
  let conteiner = document.getElementsByClassName('amazing-work__portfolio')[0]
  setTimeout(function () {}, 3000)
  let postlist = respones.splice(0, 4)
  postlist.forEach((portfolio__item) => {
    let elPost = document.createElement('div')
    elPost.classList.add('portfolio__item')
    elPost.innerHTML = `<div class="${portfolio__item.class}">
    <img src=${portfolio__item.img} alt=""/></div>
    <div class="instead-img">
                            <div>
                                <img src="./img/icon (1).png" alt="">
                                <img src="./img/icon (2).png" alt="">
                            </div>
                            <h2 class="instead-img__text">creative design <span>Web Design</span></h2>
                        </div>
                        
    `
    conteiner.append(elPost)
  })
  ask.innerText = 'add More'
  if (respones.length === 0) {
    ask.style.display = 'none'
  }
})