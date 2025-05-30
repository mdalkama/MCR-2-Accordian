import {React, useState} from 'react'
import '../App.css'

function Accordians({data}) {
    const [isAccordianOpen, setIsAccordianOpen] = useState(0);
    
    return (
        <div className='accordian-container'>
            {
                data.map((data) => {
                    return (
                        <div className='accordian' key={data.id}>
                            <div className='accordian-header'>
                                <p className='accordian-title'>{data.title}</p>
                                <span onClick={() => {
                                    if (data.id == isAccordianOpen) {
                                        setIsAccordianOpen(null);

                                    }else{
                                        setIsAccordianOpen(data.id);

                                    }

                                }} className='accordian-icon'>{data.id == isAccordianOpen ? '-' : '+'}</span>
                            </div>
                            {data.id == isAccordianOpen && <p className='accordian-content'>{data.content}</p>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordians