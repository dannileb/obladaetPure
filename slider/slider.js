const sliderWrapper = document.querySelector(".Slider__Wrapper");

const sliderButtons = Array.from(document.querySelectorAll(".Slider__Button"));

const  sliderBlocks = Array.from(document.querySelectorAll(".Slider__Block"));

//one block width
const blockWidth = sliderBlocks[0].offsetWidth;

let currentBlock = 0;

//slider on buttons
sliderButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        //the block where we need to scroll
        const pointBlock = sliderButtons.indexOf(button)

        //scroll to the block
        sliderWrapper.scrollLeft = pointBlock*blockWidth;

        //changing nav buttons styles
        changeButtons(pointBlock);

    })
})

//slider on drag
sliderWrapper.addEventListener("touchend", (event)=>{
    //changing nav buttons styles
    changeButtons(Math.round(sliderWrapper.scrollLeft/blockWidth))
})

//function that changes styles on active button
function changeButtons(pointBlock){

    //remove active button classes
    sliderButtons[currentBlock].classList.remove("Slider__Button_active");
    sliderButtons[pointBlock].classList.add("Slider__Button_active");

    //switch current and point blocks
    currentBlock=pointBlock;
}