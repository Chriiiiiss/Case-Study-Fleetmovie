import React from "react";

import { useParams } from "react-router-dom";

export default function Movie () {
    let params  = useParams();

    return (
        <div>
            <p>{params.id}</p>
        </div>
    )
}