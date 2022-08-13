import React from "react"
import ReactDOM from "react-dom"
import Head from "./Head"
import Foot from "./Foot"
import Content from "./Content"
import  './index.css'


function City() {
    return (


        <div>
            
            <Head />

            <Content/>
            <Foot/>
        </div>

    )


}

ReactDOM.render(<City />, document.getElementById("root"))