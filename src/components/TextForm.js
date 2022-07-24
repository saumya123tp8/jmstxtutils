import React, { useState } from "react";
import About from "./About";
// import About from "./About";
export default function TextForm(props) {

  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert("extra spaces has been removed successfully", "success");
     voicegen("extra spaces removed succesfully")
  };

  const handlecopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(
      "content in text are has been copied to clipboard",
      "success"
    );
    voicegen("text is copied to your clipboard");
  };
  const voicegen=(text)=>{
    var utter=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
  }

  const handleupclick = () => {
    // console.log("uppercase was clicked");
    let newtext = text.toUpperCase();
    /*to Uppercase is java script inbuilt function */
    props.showAlert(
      "content in text are has been converted tro uppercase",
      "success"
    );
    settext(newtext);
    voicegen("text is converted into uppercase");
  };

  const handlelowclick = () => {
    // console.log("uppercase was clicked");
    let newtext = text.toLocaleLowerCase();
    /*to Uppercase is java script inbuilt function */
    settext(newtext);
    props.showAlert(
      "content in text are has been converted tro lowercase",
      "success"
    );
    voicegen("text is converted into lowercase");
  };

  const handleonchange = (event) => {
    //  console.log("on change");
    settext(event.target.value);
    // voicegen(event.target.value);
  };
  const speak=()=>{
    text.length>0?voicegen(text):voicegen("enter text here")
  }

  const cleartextarea = () => {
    // let blanktext=settext;
    settext("");
    props.showAlert("contnt in text area has been deleted", "danger");
    // voicegen("text i converted into lowercase");
  };
  const [text, settext] = useState("enter your text here");
<About text={text}/>
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="mb-4">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="mybox"
            rows="8"
          ></textarea>

        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleupclick}>
          Convert into Uppercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary" onClick={handlelowclick}>
          Convert into Lowercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={cleartextarea}>
          Clear Text Area
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlecopy}>
          Copy
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleextraspaces}>
          Remove extra space
        </button>
        <button  className="btn btn-primary mx-1" onClick={speak}>
          Speak
        </button>

      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>your text summary</h1>

        <p>
          Number of words in given text {text.length} and number of words{" "}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length - 1}
        </p>

        <h3>Preview</h3>

        <p>
          {text.length > 0 ? text : "enter some text in textarea to see here" }
        </p>
      </div>
         {/* {text.length>0?voicegen(text):voicegen("enter text here")} */}
    </>
  );
}
