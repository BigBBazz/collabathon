import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// for rtl format comment out bootstrap.min.css and uncomment bootstrap.rtl.min.css

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
