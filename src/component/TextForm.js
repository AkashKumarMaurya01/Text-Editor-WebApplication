import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState(" ");


    const handuppercase = () => {
        // console.log("you are invoking the handuppercase", Text);
        let newtxt = Text.toUpperCase();
        setText(newtxt);
        props.showAlert("Converted to Uppercase" , 'success');
        
    }
    
    const handlowercase = (event) => {
        // console.log("you are invoking the handuppercase", Text);
        let newtxt = Text.toLowerCase();
        
        setText(newtxt);
        props.showAlert("Converted to Lowercase" , 'success');
    }
    const handDoubler = (event) => {
        // console.log("you are invoking the handuppercase", Text);
        let newtxt = Text.toLowerCase();
        
        setText(newtxt+newtxt);
        props.showAlert("Text Get Copied" , 'success');
    }
    const handonchange = (event) => {
        // console.log("on change");
        setText(event.target.value);
       
    }
    const GetCopy=()=>{
       
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Getcopied" , 'success');
    }
    const GetRemovespace=()=>
    {
        let Newtext = Text.split(/[ ]+/);
        setText(Newtext.join(" "))
        props.showAlert("Removed Extra Space" , 'success');

    }


    return (
        <>
         <div className='container my-3 'style={{color:props.mode==='dark'?'white':'#0b2137'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handonchange} value={Text} style={{backgroundColor:props.mode==='dark'?'#264c6e':'white',color:props.mode==='dark'?'white':'#0b2137' }} id="mybox" rows="6"></textarea>
            </div>
 
            <button disabled={Text.length===0}  onClick={handlowercase} className="btn btn-primary mx-1 my-1">convert to lower case</button>
            <button disabled={Text.length===0} onClick={handuppercase} className="btn btn-primary mx-1 my-1">convert to Upper case</button>
            <button disabled={Text.length===0} onClick={handDoubler}   className="btn btn-primary mx-1 my-1">Get double the text</button>
            <button disabled={Text.length===0} onClick={GetCopy}       className="btn btn-primary mx- my-1">Copy text</button>
            <button disabled={Text.length===0} onClick={GetRemovespace} className="btn btn-primary mx-1 my-1">Remove extra space</button> 
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0b2137'}} >
            <h2>YOUR TEXT SUMMARY IS HERE</h2> 
            <h6>WORD:{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} CHARACTER IS :{Text.length}</h6>
            <h5>READING TIME:{0.008*Text.split(" ").filter((element)=>{return element.length!==0}).length} MINUTES</h5>
            <h2>PREVIEW</h2> 
            <p>{Text.length>0?Text:"ENTER  THE TEXT FOR THE PREVIEW"}</p>

        </div>
       </>
    )
}
