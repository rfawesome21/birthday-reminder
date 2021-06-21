import React from 'react'


const Profile = (props) => {
    return (
    <div>
        <div className = "row g-0">
            <div className = "col-sm-7">
            <img src = {props.image} alt = "Could not find" className = "rounded-circle mt-2 p-3 w-50"/>
            </div>
            <div className = "col-md-3">
                <div className = "row">
            <h2 className = "lead navbar-brand fw-bold mt-4">{props.name}</h2>
            </div>
            <h2 className = "lead ms-4">{props.age + " years"} </h2>
            </div>
        </div>
        </div>
    )
}

export default Profile
