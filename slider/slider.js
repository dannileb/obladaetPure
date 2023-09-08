class Slider{

    constructor(sliderWrapper, sliderBlocks, sliderButtons) {

        this.currentBlock =0;

        this.sliderWrapper = sliderWrapper;
        this.sliderBlocks = sliderBlocks;
        this.sliderButtons = sliderButtons;

        this.blockWidth = this.sliderBlocks[0].offsetWidth;

        //slider on buttons
        this.sliderButtons.forEach((button) =>{
            button.addEventListener("click", ()=>{
                //the block where we need to scroll
                const pointBlock = this.sliderButtons.indexOf(button)

                //scroll to the block
                this.sliderWrapper.scrollLeft = pointBlock*this.blockWidth;

                //changing nav buttons styles
                changeButtons(pointBlock, this.currentBlock, this.sliderButtons);

                this.currentBlock=pointBlock;
            })
        })

        //slider on drag
        this.sliderWrapper.addEventListener("touchend", (event)=>{
            //changing nav buttons styles
            changeButtons(Math.round(sliderWrapper.scrollLeft/this.blockWidth),this.currentBlock, this.sliderButtons)
        })
    }

}

const homeRunSlider = new Slider(
    document.querySelector(".HomeRun__SliderWrapper"),
    Array.from(document.querySelectorAll(".HomeRun__SliderBlock")),
    Array.from(document.querySelectorAll(".HomeRun__SliderButton"))

)

const doubleTapSlider = new Slider(
    document.querySelector(".DoubleTap__SliderWrapper"),
    Array.from(document.querySelectorAll(".DoubleTap__SliderBlock")),
    Array.from(document.querySelectorAll(".DoubleTap__SliderButton"))

)


//function that changes styles on active button
function changeButtons(pointBlock, currentBlock, sliderButtons){

    //remove active button classes
    sliderButtons[currentBlock].classList.remove("Slider__Button_active");
    sliderButtons[pointBlock].classList.add("Slider__Button_active");

}