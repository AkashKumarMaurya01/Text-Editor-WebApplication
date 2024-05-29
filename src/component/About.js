import React from 'react'

export default function About(props) {

 
    // const [myStyle, setMystyle] = useState({ color: "black", backgroundColor: 'white', })
    let myStyle={
        color:props.mode==="light"?'black':"white",
        backgroundColor:props.mode==="light"?"white":"black"
    }
    
   


    return (
        <div className='container' style={myStyle}>
            <h1 className="my-3">About Us</h1>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h3>Info</h3>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"   >
                            Manage app info from your devices. You can choose to save information about installed apps from your signed-in devices, like the name and version of an app, ...
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h3>Knowledge</h3>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            Go to Your data in the Assistant or Your data in Search. Under "Google-wide controls," tap App info from your devices. Turn on App info from your devices.

                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h3>About app</h3>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            Close an app by swiping it up and off the screen. For vertically listed apps, swipe left or right.
                            Some devices have an exit button in the upper-right corner of each app. Tap the exit button to close the app.
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
