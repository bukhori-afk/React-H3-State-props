import React from 'react';
import './style.css';

const Materi = (props) => {
    return(
        <div className="wrraper">
            <div className="content">
                <div className="gambarpaket">
                    <img src={props.img} className="imagesliderr"/>
                </div>
                <p className="des">{props.des}</p>
                <p className="des">{props.harga}</p>
            </div>

        </div>
    );
}

export default Materi;