import React from "react";
import { Link } from "react-router-dom";

import { Connect } from "./";

const TestComponent = () => {
    return(
        <section>
            <p>this is my test paragraph, i'm just messing around and such</p>
            <p>if you click on the link below, it will take you somewhere!</p>
            <Link to="/connect">Connect!</Link>
        </section>
    )
}

export default TestComponent;