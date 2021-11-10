import React from 'react'

export default function CallHistoryTab(props) {
    return (
        <div>
            {
                props.obj.contact? <h5> {props.obj.concat_name} </h5> : 
                <h5> New Contact </h5>
            }
            
            <h6> {props.obj.contact_number} </h6>
            <h6> {props.obj.direction} </h6>
            <h6> {props.obj.incall_duration || 0} s </h6>
        </div>
    )
}
