import { Configuration, OpenAIApi } from 'openai'
import React,{useEffect, useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {aiKey} from "../config.js"
import Dictaphone from "../components/Dictaphone.jsx";




export default function Ai({ai, setResult, handlePatch, setInput, input, speech, setLight, setColor}){


    const handleComms = (e) => {
    talk()
    speech()

}
// speech recognition stuff



 // sets the API_KEY
    const configuration = new Configuration({
  apiKey: aiKey,
});

//allows API talk
const openai = new OpenAIApi(configuration);

// response from Ai
const talk = async ()  =>{
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: ai.personality + input,
  temperature: 0.9,
  max_tokens: 300,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
})
setResult(response.data.choices[0].text)
}

return(
        <div>
            <form onSubmit={handlePatch}>
               <span> <input className='jarvis' value={input} onChange={(e)=> setInput(e.target.value)}></input></span>

            </form>
            {/* <button onClick={handleComms}> Do Stuff </button> */}
             <Dictaphone  setColor={setColor} setLight={setLight} setResult={setResult} handleComms={handleComms} input={input} setInput={setInput}/>


        </div>
    )
}