import React from "react";
import Proptypes from "prop-types";

export default function Digito({digit}) {
    return (
        <div className="col-2">
            <div className="d-inline-flex py-2 px-4 bg-white rounded-4" style={{"--bs-bg-opacity": 0.005, border: "1px solid rgba(255,255,255, 0.1)"}}>
                <p>{digit}</p>
            </div>
        </div>
    );
}

Digito.propTypes = {
	digito: Proptypes.string
}