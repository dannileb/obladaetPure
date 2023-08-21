

const banner = document.querySelector(".Banner");
window.addEventListener("scroll", (event)=>{

})
window.onload = () => {
    createObserver();
}

let currentHeightOffset = window.scrollY;

function createObserver(){
    let observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    let observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
           if(entry.isIntersecting){
               showContent();

               window.addEventListener("scroll", handleScroll);
               document.querySelector(".Banner__Heading-Wrapper_Loaded").style.opacity="1";
           }else
           {
               window.removeEventListener("scroll", handleScroll);
               document.querySelector(".Banner__Heading-Wrapper_Loaded").style.opacity="0";
           }

        })
    }, observerOptions);

    observer.observe(banner);
}

function showContent(){
    const preLoader = document.querySelector(".PreLoader");
    preLoader.classList.add("PreLoader_Loaded");


    const bannerHeadingWrapper = document.querySelector(".Banner__Heading-Wrapper");
    bannerHeadingWrapper.classList.add("Banner__Heading-Wrapper_Loaded");

    const bannerHeading = document.querySelector(".Banner__Heading");
    bannerHeading.classList.remove("Banner__Heading_Unloaded");
    bannerHeading.classList.add("Banner__Heading_Loaded");
    bannerHeading.classList.add("animate__fadeInDown");
    bannerHeading.classList.add("animate__slow");

    const page = document.querySelector(".Background");
    page.classList.remove("Background_Unloaded");
}

function handleScroll(){

    banner.innerHeight=0;
    let bannerHeight = banner.offsetHeight;
    let viewPortOffset = window.scrollY;


        let heightOffset = 5*(viewPortOffset-currentHeightOffset);

        currentHeightOffset = window.scrollY;

        banner.style.height = `${bannerHeight - heightOffset}px`;



}
