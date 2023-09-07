const homeRun = document.querySelector(".HomeRun");
const heading = document.querySelector(".HomeRun__Heading");
const date = document.querySelector(".HomeRun__Date");
const content = document.querySelector(".HomeRun_Content");
const coverImage = document.querySelector(".HomeRun__Image");

function createHomeRunObserver(){
    let observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            //when content is loaded
            if(entry.isIntersecting){
                console.log("HOME RUN")
                setTimeout(showHomeRunContent, 250)
            }else {
                setTimeout(hideHomeRunContent, 250)
            }
        })
    }, observerOptions);

    observer.observe(homeRun);
}

createHomeRunObserver();


function showHomeRunContent(){
    heading.classList.remove("HomeRun__Heading_unload");
    date.classList.remove("unload")
    content.classList.remove("unload")
    coverImage.classList.remove("loaded")
    coverImage.classList.add("unload")
}
function hideHomeRunContent(){
    heading.classList.add("HomeRun__Heading_unload");

    date.classList.add("unload")
    content.classList.add("unload")

    coverImage.classList.add("loaded")
    coverImage.classList.remove("unload")
}