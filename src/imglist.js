import React from 'react';
import ImgItem from './imgitem';
import {carData, results} from './car';

export default function ImgList(props){
    console.log(carData);
    console.log(results);
    return(
        <div className="image-container">
            {
                carData.map((item, idx) => {
                    return <ImgItem key={idx} data={item} />
                })
            }
        </div>
    )
}