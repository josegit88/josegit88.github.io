/* ==========================================================
   Main JavaScript file
   José Benavides - Personal Website
   ========================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /*
    ----------------------------------------------------------
    Smooth scrolling
    ----------------------------------------------------------
    */

    const links = document.querySelectorAll("a[href^='#']");


    links.forEach(link => {

        link.addEventListener("click", function(event){

            event.preventDefault();


            const target = document.querySelector(
                this.getAttribute("href")
            );


            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



    /*
    ----------------------------------------------------------
    Automatic copyright year
    ----------------------------------------------------------
    */

    const year = document.querySelector("#year");


    if (year) {

        year.textContent = new Date().getFullYear();

    }



});
