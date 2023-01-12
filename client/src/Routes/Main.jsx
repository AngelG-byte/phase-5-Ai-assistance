import React,{useState} from "react"
import {aiKey} from "../config.js"
import Ai from "../components/Ai";



export default function Main(ai){
console.log(aiKey)
const [result, setResult] = useState('')
    return(
       <div className="main-style">
       <h1> Welcome my name is {ai.ai.name}</h1>
       <p>{result}</p>
       <Ai ai={ai} setResult={setResult}/>

        </div>

    )
}