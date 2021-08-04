window.addEventListener('DOMContentLoaded', function() {
    const header_btn = document.querySelector('.header_btn');
    const header_ul = document.querySelector('.header_ul');
    const header_ul_li = document.querySelectorAll('.header_ul li');

    header_btn.addEventListener("click", () => {
        header_ul.classList.toggle('nav_ul');
        header_ul_li.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";   
            }
            else{
             link.style.animation = `navLink 0.5s ease forwards
             ${
                 index / 7 + 0.1
             }s`;
             console.log(link.style.animation)
            }
     });

     header_btn.classList.toggle('toggle')



    });

    // animtion link

 
});

