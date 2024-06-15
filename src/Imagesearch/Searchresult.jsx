import React from 'react'

function Searchresult(props) {
    // const img = `https://source.unsplash.com/400x300/?${props.name}`;
    const img = 'https://source.unsplash.com/user/erondu';
    return (
        <div style={{ width: '50%', margin: '10px auto' }}>
            <img src={img} alt='search' />
        </div>
    );
}

export default Searchresult;