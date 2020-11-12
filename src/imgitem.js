import React from 'react';

export default function ImgItem(props){
    let caption = props.data.CAPTION.split(" ").join("-");
    let id = props.data.ID.split("{").join("");
    id = id.split("}").join("");
    let imgid = props.data.AR;
    return(
        <div className="image-card">
            <a href={`https://c8.alamy.com/comp/${imgid}/${caption}-${imgid}.jpg`}>
                <img src={`https://c8.alamy.com/comp/${imgid}/${caption}-${imgid}.jpg`} />
            </a>
            <div className="image-captions">
                <span>{caption}</span>
                <span>{id}</span>
            </div>
        </div>
    )
}