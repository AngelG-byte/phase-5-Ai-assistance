import React,{useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = ({setInput, handleComms, input, setLight, setColor }) => {
const [content, setContent] = useState('');


const commands = [
    {
      command: 'remind me to *',
      callback: (thing) => {
        setContent(`I'm reminding you to ${thing}`)
        emailHandler()
      }
    },
    {
      command: 'i want to order * (please)',
      callback: (food) => {
        setContent(`I ordered ${food} just letting you know`)
        emailHandler()
      }
    },
      {
      command: 'turn on the light(s)',
      callback: () => {
        setLight(true)
      console.log("light on");

      }
    },
      {
      command: 'turn off the light(s)',
      callback: () => {
        setLight(false)
        console.log("light off");

      }
    },
      {
      command: 'make the color red',
      callback: () => {
        setColor('red')
        console.log("color changed");

      }
    },
      {
      command: 'make the color blue',
      callback: () => {
        setColor('blue')
        console.log("color changed");

      }
    },
      {
      command: 'make the color green',
      callback: () => {
        setColor('green')
        console.log("color changed");

      }
    },
  ]

    const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  setInput(transcript);

  const emailHandler = () => {
    const config = {
    SecureToken :'42e29cff-f95f-41ca-93e1-ad55788d9373',
    To : 'ai.assistant@yopmail.com',
    From : "robotking134@gmail.com",
    Subject : "Assistance",
    Body : `${content}`
  }
    window.Email.send(config)
  }

  const doVoice = () => {
  SpeechRecognition.stopListening()
    if (input){
      handleComms()
    }

  }


  return (
    <div >
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onKeyDown={SpeechRecognition.startListening} onKeyUp={doVoice}></button>
      {/* <button onClick={sendEmail}></button> */}

      {/* <button onClick={resetTranscript}>Reset</button> */}

    </div>
  );
};
export default Dictaphone;