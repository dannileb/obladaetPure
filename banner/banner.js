
//banner element
const banner = document.querySelector(".Banner");

window.onload = () => {
    createObserver();
}

        //loading script
function createObserver(){
    let observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    let observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            //when content is loaded
           if(entry.isIntersecting){
               //show content
               showContent();
               document.querySelector(".Banner__Heading-Wrapper_Loaded").style.opacity="1";
           }else
           {
               document.querySelector(".Banner__Heading-Wrapper_Loaded").style.opacity="0";
           }

        })
    }, observerOptions);

    observer.observe(banner);
}

//function that adds classes for hidden elements
function showContent(){
    const preLoader = document.querySelector(".PreLoader");
    preLoader.classList.add("PreLoader_Loaded");


    const bannerHeadingWrapper = document.querySelector(".Banner__Heading-Wrapper");
    bannerHeadingWrapper.classList.add("Banner__Heading-Wrapper_Loaded");
    bannerHeadingWrapper.classList.add("animate__fadeIn");
    bannerHeadingWrapper.classList.add("animate_slow");

    const bannerHeading = document.querySelector(".Banner__Heading");
    bannerHeading.classList.remove("Banner__Heading_Unloaded");
    bannerHeading.classList.add("Banner__Heading_Loaded");

    const page = document.querySelector(".Background");
    page.classList.remove("Background_Unloaded");
}

