import React from 'react'
import './Error.css'
function Error() {
    const img = 'https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png'
    return (
        <>
            <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={img} alt='404 page not found' style={{ width: '50%', borderRadius: '8px' }} />
            </div>
            <div className='Error'>
                <h2 className="">Oops! 404 Page is not define</h2>
            </div>
        </>
    )
}

export default Error