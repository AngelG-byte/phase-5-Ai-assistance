import { Configuration, OpenAIApi } from 'openai'
import React,{useState} from 'react';
import {aiKey} from "../config.js"


export default function Ai({ai, setResult}){
    const [input, setInput] = useState('')

    const handlePatch = () =>{
fetch("/prompt",{
    method: "PATCH",
    headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
            prompt: ai.ai.prompt +`\nHuman: ${input}`
        })
}).then(r => r.json())
.then(data=>{
    console.log(data);
})
}

 // sets the API_KEY
    const configuration = new Configuration({
  apiKey: aiKey,
});
console.log(input);
//allows API talk
const openai = new OpenAIApi(configuration);
// response from Ai
const talk = async ()  =>{
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: input,
  temperature: 0.9,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
});
//this sends the responce text to main
setResult(response.data.choices[0].text)
}

function masterButton(){
    handlePatch()
    talk()
}



return(
        <div>
            <form onSubmit={handlePatch}>
                <input onChange={(e)=>setInput(e.target.value)}></input>
            </form>
            <button onClick={masterButton}> hello </button>


        </div>
    )
}