import React from "react";
import "./App.css";

const fs = require("fs");
const images = ("./../images/")

let readDir = cb => {
    fs.readdir(images, (err, content) => {
        if (err) {
            return err;
        } else if (content.length) {
            return cb(content);
        }
        else { console.log("idk why this isnt working") }
    })
}

let imgArr = readDir(pics => { return pics });
console.log(imgArr);


function Pics(props) {
    return (
        <ul className="gallery">
            <div className="images">{imgArr}></div>
        </ul>
    )
}

export default Pics;