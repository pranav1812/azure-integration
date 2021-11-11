import React from 'react'

export default function ContactTab(props) {
    return (
        <div>
            
            <h5> {props.obj.concat_name} </h5> 
            
            {
                props.obj.numbers.length? props.obj.numbers.map((num, ind)=>(
                        <div>
                            <p> {num.number} </p> 
                        </div>
                    ) 
                )  : null
            }
            
        </div>
    )
}
