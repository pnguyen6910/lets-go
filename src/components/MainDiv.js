import React from "react";

function MainDiv(props) {
    return (
        <div className="mainDiv">
            { props.children }
        </div>
    )
}

export default MainDiv;