import React from 'react'
import Resume from "../../Assets/RINKI_SINGH_Resume.pdf"

const CTA = () => {
    return (
        <div className='cta'>
            <a href={Resume} download
            className='cta_btn'>Download Resume</a>
            <a href={Resume} target='_blank'
            className='cta_btn'>Show Resume</a>
        </div>
    )
}

export default CTA