import React from "react";
import { useState } from "react";
import '../styles/DropdownSection.css';

const DropdownSection = ( props ) => {

    const [ display, setDisplay ] = useState( 'none' );

    function handleClick() {
        
        if ( display === 'none' ) {
            setDisplay( 'block' );
        } else {
            setDisplay( 'none' );
        }
    }

    return (

        <div className="dropdownAll">

            <div className="dropdownHeader" onClick={handleClick}>

                <h2>{props.name}</h2>

            </div>

            <div className="dropdownBody" style={{display:display}}>
                {props.children}
            </div>

        </div>
    
    )
}

DropdownSection.defaultProps = {
    name: "Click to see more"
}

export default DropdownSection