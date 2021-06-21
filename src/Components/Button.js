import React from 'react'

const Button = props => {
    const style = {
        "backgroundColor" : "#F28AB2"
    }
    return (
        <div>
            <button className = "btn btn-lg form-control text-light" style = {style} onClick = {props.onClick}>Clear All</button>
        </div>
    )
}

Button.propTypes = {

}

export default Button
