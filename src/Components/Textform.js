import React, { useState } from 'react'

export default function Textform(props) {
    const HandleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert('Converted to Uppercase','success')
    }

    const HandleLoClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert('Converted to Lowercase','success')
    }

    const HandleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showalert('Copied to Clipboard','success')
    }
    
    const HandleRmvExSpClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert('Removed Extraspaces','success')
    }
    
    const HandleClearClick = () => {
        let newtext = ''
        setText(newtext)
        props.showalert('Cleared Textarea','success')
    }

    const HandleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter texthere')
    return (
        <>
            <div className={`container text-${props.Textcol}`}>
                <h3 className='mx-1'> {props.heading}</h3>
                {/* <label htmlfor="Mybox" class="form-label">Enter the text to analyze</label> */}
                <textarea className="form-control" value={text} onChange={HandleOnChange} id="Mybox" rows="5" ></textarea>
                <button className="btn btn-primary mx-1 my-2" onClick={HandleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={HandleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={HandleCopyClick}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-1 my-2" onClick={HandleRmvExSpClick}>Remove extra space</button>
                <button className="btn btn-primary mx-1 my-2" onClick={HandleClearClick}>Clear</button>
            </div>
            <div className={`container my-2 mx-1 text-${props.Textcol}`}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} </p>
                <p>{0.08 * text.split(" ").length} Minutes to read </p>
                <h3>Preview</h3>
                <p>{text} </p>
            </div>
        </>
    )
}
