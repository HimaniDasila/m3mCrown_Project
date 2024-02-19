const scrollElements = document.querySelectorAll(".cb-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("cb-scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("cb-scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

document.querySelectorAll('.price-structure .know-more-btn').forEach(function(el){
  el.addEventListener('click', function(){
    document.querySelector('body .cb-modal-container.cb-form-modal').classList.add('cb-show-modal');
  })
})

document.querySelectorAll('.amenities-section .amenities-block-inner').forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelector('.cb-modal-container.cb-image-modal .cb-modal-content img').src = el.querySelector('.amenity-img img').src;
  })
})

document.querySelectorAll('.amenities-section .amenities-block-inner').forEach(function(el){
  el.addEventListener('click', function(){
    document.querySelector('body .cb-modal-container.cb-image-modal').classList.add('cb-show-modal');
  })
})

document.querySelector('.cb-modal-container.cb-form-modal .cb-close-btn').addEventListener('click', function(){
  document.querySelector('body .cb-modal-container.cb-form-modal').classList.remove('cb-show-modal');
})

window.addEventListener('click', function(e){ 
  console.log(e.target);
  if (e.target == document.querySelector('.cb-modal-container.cb-form-modal .cb-modal-overlay')) {
    document.querySelector('body .cb-modal-container.cb-form-modal').classList.remove("cb-show-modal");
  }
  if (e.target == document.querySelector('.cb-modal-container.cb-image-modal .cb-modal-overlay')) {
    document.querySelector('body .cb-modal-container.cb-image-modal').classList.remove("cb-show-modal");
  }
});

document.querySelector(".menubar .hamberger-menu-btn").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container.cb-list-modal").classList.add("cb-show-modal");
});

document.querySelector("body .cb-modal-container.cb-list-modal .cb-close-btn").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container.cb-list-modal").classList.remove("cb-show-modal");
});

document.querySelectorAll(".cb-modal-container.cb-list-modal ul li").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelector("body .cb-modal-container.cb-list-modal").classList.remove("cb-show-modal");
  });
});