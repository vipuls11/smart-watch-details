import React, { useState } from 'react'
import Searchresult from './Searchresult';
import './Searchresult.css';

function Imagesearch() {
    const [img, setImg] = useState("");
    const inputEvent = (e) => {
        const data = e.target.value;
        console.log(data)
        setImg(data);
    }
    return (
        <div>
            <div className="searchbar" >
                <h5 style={{ fontSize: '24px' }}>Search Any Image by Name</h5>
                <input type="text" placeholder="Search Anything" value={img} onChange={inputEvent} />
            </div>
            <div className="">
                <Searchresult name={img} />
            </div>
        </div>
    )
}

export default Imagesearch