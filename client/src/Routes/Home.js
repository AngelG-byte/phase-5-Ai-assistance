import React,{useEffect, useState, useRef} from "react"
import {aiKey} from "../config.js"
import Ai from "../components/Ai";
import Logout from "../components/Logout.jsx";
import Shapes from "../components/Shapes.js";
import Speech from 'react-speech';
import HouseScene from "../three.js/house-scene";

export default function Home({ai, setAi}){
const [result, setResult] = useState('')
const [input, setInput] = useState('')
const [luminence, setLight] = useState(false)
const [color, setColor] = useState('red')
const speechRef = useRef(null)
const handlePatch = () =>{
        fetch("/prompt",{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    prompt: ai.prompt +`\nHuman:${input}`
                })
        }).then(r => r.json())
        .then(data=>{
            setAi(data)
        })
        }

     useEffect(()=>{
        if(result){
            speechRef.current.play()
        }
        },[result])



    return(
    <>
            <Logout />
       <div className="main-style" >
       <h1>{ai.name}</h1>
       <p className="p-tag">{result}</p>
       <Speech  className="hidden" ref={speechRef} text={result} />
        <Ai setLight={setLight} setColor={setColor} ai={ai} result={result} setResult={setResult} handlePatch={handlePatch} setInput={setInput} input={input}/>
        </div>
        <HouseScene luminence={luminence} hue={color}/>
    </>

    )
}