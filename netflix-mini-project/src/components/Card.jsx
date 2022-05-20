import React from "react";

// Gettin Card component custom properties passing from app.js while calling <Card /> in "props";
// props hold all custom attribues and their values;

function Card(props){
    console.log(props);
    return (
        <>
            <div className='cards'>
                <div className='card'>
                <img src={props.imgSrc} alt='myPic' className='card_img' />
                <div className='card_info'>
                    <span className='card_category'>{props.title}</span>
                    <h3 className='card_title'>{props.seriesName}</h3>
                    <a href={props.seriesLink} target="_blank">
                    <button>Watch Now</button>
                    </a>
                </div>
                </div>
            </div>
        </>
    );
}

export default Card;