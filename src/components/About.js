import React, { useState } from 'react'

export default function About() {
    let [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    let [btn, setbtn] = useState("Dark Mode")

    const dkmode = () => {
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtn("White Mode")

        }
        else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtn("dark Mode")



        }
    }
    return (
        <>
            <div className="container" style={myStyle}>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>Analyze Your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body " style={myStyle}>
                                Textcrunch is gives users to a way so they can analyze their text.so use it like word counter,changes to uppercase-lowercase and some other function.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>Free To Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Users can use it as a word and charactor counter for their report and essay and also gives statistic of reading time of the text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                <strong>Browser compatiable</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This webpage also works on the all brower like chrome,safari,firefox etc.this is also compatiable for pds,execl,word doc.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button onClick={dkmode} type="button" className="btn btn-secondary my-3">{btn}</button>
                </div>
            </div>
        </>
    )
}
