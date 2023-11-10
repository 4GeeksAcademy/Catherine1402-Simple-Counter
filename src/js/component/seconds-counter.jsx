import React from "react";
import Proptypes from "prop-types";

import Digito from "./digito";


export default function SecondsCounter({seconds}) {
    const digito = seconds.toString().padStart(6, '0').split("");

    return <div className="container-fluid d-flex align-items-center justify-content-center text-light bg-dark display-1 fw-semibold py-3">
        <div className="rounded-4 container d-flex justify-content-center align-items-center">

            <div className="d-inline-flex py-4 px-2 bg-white rounded-4" style={{"--bs-bg-opacity": 0.005, border: "1px solid rgba(255,255,255, 0.1)"}}>
            <i className="fas fa-clock fa-lg"></i>
                <div/>
            </div>


            <div className="d-inline-flex align-items-center mx-4">
                <div className="row">
                    {
                        digito.map((digit, index) => {
                            return <Digito key={index} digit={digit}></Digito>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

SecondsCounter.propTypes = {
	seconds: Proptypes.number
}