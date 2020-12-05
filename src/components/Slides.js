import React, {useState, useRef} from "react";

function Slides({slides}) {
    
    console.log(JSON.stringify(slides))
    
    // const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    
    const currentSlideIndexChanged = (idx) => {
        if (0 > idx || slides.length <= idx) {
            idx = 0;
        }
        if (currentSlideIndex != idx) {
            setCurrentSlideIndex(idx);
        }
    }
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined"
                    disabled={0 == currentSlideIndex} onClick={(evt) => currentSlideIndexChanged(0)}>Restart</button>
                <button data-testid="button-prev" className="small"
                    disabled={0 == currentSlideIndex} onClick={(evt) => currentSlideIndexChanged(currentSlideIndex-1)}>Prev</button>
                <button data-testid="button-next" className="small" 
                    disabled={slides.length-1 <= currentSlideIndex} onClick={(evt) => currentSlideIndexChanged(currentSlideIndex+1)}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlideIndex].title}</h1>
                <p data-testid="text">{slides[currentSlideIndex].text}</p>
            </div>
        </div>
    );

}

export default Slides;
