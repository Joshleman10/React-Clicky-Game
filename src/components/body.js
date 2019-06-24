import React from "react";
import "./App.css";

function PresPics(props) {
    return (
        <div className="presPics">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default PresPics;