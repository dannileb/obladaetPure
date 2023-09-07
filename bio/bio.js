
//banner element
const bio = document.querySelector(".Bio");


createBioObserver();



function createBioObserver(){
    let observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75,
    };

    let observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            //when content is loaded
            if(entry.isIntersecting){
                showBioContent();
            }
        })
    }, observerOptions);

    observer.observe(bio);
}

function showBioContent(){
    const text = document.querySelectorAll(".Bio__Text");
    const images = document.querySelectorAll(".Bio__Image");
    const heading = document.querySelector(".Bio__Heading");

    setTimeout(()=>{

        images.forEach((image)=>{
            image.classList.remove("Bio__Image_hidden")
        })
        text.forEach((textEl)=>{
            textEl.classList.remove("Bio__Text_hidden")
        })

        heading.classList.remove("Bio__Heading_shadow_active")

        //after 500ms
    }, 250)






}