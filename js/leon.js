/* header links list show */
let links = document.querySelector("header .container .links");
let linksList = document.querySelector("header .container .links ul");
let linksListIsShow = false ;

links.onclick=function(){
    if (linksListIsShow == false){
        linksList.style.display="block";
        linksListIsShow = true ;
    }
    else if (linksListIsShow == true){
        linksList.style.display="none";
        linksListIsShow = false ;
    }
}

/* features variables */ 
let feature1 = document.querySelector(".features .container .feat1");
let feature2 = document.querySelector(".features .container .feat2");
let feature3 = document.querySelector(".features .container .feat3");


/* services variables */
let srv1 = document.querySelector(".services .container .services-content .col .srv1");
let srv2 = document.querySelector(".services .container .services-content .col .srv2");
let srv3 = document.querySelector(".services .container .services-content .col .srv3");
let srv4 = document.querySelector(".services .container .services-content .col .srv4");
let servicesImage = document.querySelector(".services .container .services-content .col .image");

/* about variables */ 

let aboutImage = document.querySelector(".about .container .about-content .image");
let aboutTxt = document.querySelector(".about .container .about-content .info");

window.onscroll=function () {

  

    /* in xsmall screen*/
    if (window.innerWidth <= 767){
      /* show features */ 
      if(window.scrollY > 560){
        feature1.style.left = "0";
        
      }

      if(window.scrollY > 700){
        feature2.style.opacity = "1";
      }

      if(window.scrollY > 900){
        feature3.style.right = "0";
      }

       /* show services */ 
       if(window.scrollY > 1400){
        srv1.style.opacity = "1";
       }

       if(window.scrollY > 1750){
        srv2.style.opacity = "1";
       }

       if(window.scrollY > 1900){
        srv3.style.opacity = "1";
       }

       if(window.scrollY > 2200){
        srv4.style.opacity = "1";
       }

       /* show about */ 
      if(window.scrollY > 4400){
        aboutImage.style.left="0";
       
      }

      if(window.scrollY > 4700){
        aboutTxt.style.right="0";
      }

    }

    /* in small screen */
    if (window.innerWidth > 767 && window.innerWidth <= 991){
      /* show features */ 
      if(window.scrollY > 800){
        feature1.style.left = "0";
        feature2.style.opacity = "1";
        feature3.style.right = "0";
      }

      /* show services */ 
      if(window.scrollY > 1500){
        srv1.style.opacity = "1";
        srv2.style.opacity = "1";
        srv3.style.opacity = "1";  
        srv4.style.opacity = "1"; 
        servicesImage.style.right = "0";
     }

      /* show about */ 
      if(window.scrollY > 3100){
        aboutImage.style.left="0";
        aboutTxt.style.right="0";
      }
    }

    /* in medium screen*/
    if (window.innerWidth > 991 & window.innerWidth < 1200){
      /* show features */ 
      if(window.scrollY > 450){
        feature1.style.left = "0";
        feature2.style.opacity = "1";
        feature3.style.right = "0";
      }

      /* show services */ 
      if(window.scrollY > 1000){
        srv1.style.opacity = "1";
        srv2.style.opacity = "1";
        srv3.style.opacity = "1";  
        srv4.style.opacity = "1"; 
        servicesImage.style.right = "0";
     }

      /* show about */ 
      if(window.scrollY > 2800){
        aboutImage.style.left="0";
        aboutTxt.style.right="0";
      }
    }
    
    /* in large screen*/
    if (window.innerWidth >= 1200){
      /* show features */ 
      if(window.scrollY > 600){
        feature1.style.left = "0";
        feature2.style.opacity = "1";
        feature3.style.right = "0";
      }

      /* show services */ 
      if(window.scrollY > 1000){
        srv1.style.opacity = "1";
        srv2.style.opacity = "1";
        srv3.style.opacity = "1";  
        srv4.style.opacity = "1"; 
        servicesImage.style.right = "0";
     }

      /* show about */ 
      if(window.scrollY > 2400){
        aboutImage.style.left="0";
        aboutTxt.style.right="0";
      }
    }
    
}
