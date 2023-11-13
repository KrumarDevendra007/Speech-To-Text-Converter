import React from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import { useState } from "react";


const SpeechConverter = () => {
     
    const [copyText, setCopyText] = useState();
    const [isCopied, setCopied] = useClipboard(copyText, {successDuration: 1000, });
    


    const startListening = () => SpeechRecognition.startListening({ continuous: true , language : 'en-IN'});
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    
    
    if (!browserSupportsSpeechRecognition) {
        return null;
      }


    return (
        <div className="container"> 
        <h2 id="title">Speech To Text Converter</h2>
        <br/>
        

        <div className="main-content" onClick={() => setCopyText(transcript)}>
            {transcript}
        </div>

        <div className="btn-style">
        <button onClick={setCopied}>
         {!isCopied ? "Copy Text" : "Copied "}
        </button>
            <button onClick={startListening}> Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
                
        </div>
        
    )
      
}


export default SpeechConverter;