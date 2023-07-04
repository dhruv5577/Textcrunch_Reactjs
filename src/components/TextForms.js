import React, { useState } from 'react'

export default function TextForms(props) {
    const handleupchange = () => {
        console.log("you clicked here" + text)
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("changed to uppercase", "success");
    }

    const handleonchange = (event) => {
        console.log('onchange')
        settext(event.target.value)

    }
    const handlelpchange = (event) => {
        console.log(text)
        let lptext = text.toLowerCase();
        settext(lptext);
        props.showalert("changed to lowercase", "success");
    }
    const handle = () => {
        let clear = '';
        settext(clear);
        props.showalert("clear case", "success");
    }
    const handlecopy = () => {
        let text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert("text copied", "success");
    }

    const handlermvspaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));

    }

    const [text, settext] = useState('')
    return (

        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ margin: 'my-5' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleonchange} id="mybox" rows="8"></textarea>
                    <button disabled={text.length === 0} className="btn-primary my-3 mx-2 " onClick={handleupchange}>click to uppercase</button>
                    <button disabled={text.length === 0} className="btn-primary my-3 mx-2 " onClick={handlelpchange}>click to lowercase</button>
                    <button disabled={text.length === 0} className="btn-primary my-3 mx-2  " onClick={handle}>click to action</button>
                    <button disabled={text.length === 0} className="btn-primary my-3 mx-2  " onClick={handlecopy}>copy text</button>
                    <button disabled={text.length === 0} className="btn-primary my-3 mx-2  " onClick={handlermvspaces}>remove extra spaces </button>
                </div>

            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charaters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes for read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter something to Preview it"}</p>
            </div>
        </>
    )
}
