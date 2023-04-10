import React from 'react';

function SingleButton(props){
    return <button onClick={props.handleClick}style={props.style} className='button'><h1>{props.innerValue}</h1></button>
}

export default SingleButton;