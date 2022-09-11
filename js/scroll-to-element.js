function scrollToElement(element) {
    const headerHeight = 110
    const elementDOM = document.querySelector(element);
    const topOfElement = window.pageYOffset + elementDOM.getBoundingClientRect().top - headerHeight;
    
    window.scroll({ top: topOfElement });
  }
  