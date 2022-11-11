

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    getVisitCount();

});
  
  
  const functionApi = 'https://hariresumefapp.azurewebsites.net/api/HttpTrigger1?code=2IN_llAmBShI1fsvmlI4qNsWMdHZi7FImIAoFsKf2ComAzFuTESc2w==';
  
  const getVisitCount = () => {
    let count = 10;
    fetch(functionApi)
      .then(response => {
        return response.json()
      })
      .then(response => {
        count = response;
        console.log("Hello 👋, you are visitor number - " + count);
        document.getElementById('counter').innerText = count;
      }).catch(function (error) {
        console.log(error);
      });
    return count;
  }
  
