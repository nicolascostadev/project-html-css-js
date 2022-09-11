function toggleMenu (){

    let menu = document.querySelector('header ul')
    let backdrop = document.querySelector('.backdrop');
  
    if (menu.className.includes('toggled')) {
      removeToggled();
    } else {
      menu.classList.add('toggled')
      backdrop.classList.add('active')
    }
  }
  
  let menuItem = document.querySelectorAll('.header-bot ul li a');
  
  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
     removeToggled()
    })
    
  })
  
  function removeToggled() {
    let menu = document.querySelector('header ul');
    let backdrop = document.querySelector('.backdrop');
  
    menu.classList.remove('toggled');
    backdrop.classList.remove('active')
  }
  