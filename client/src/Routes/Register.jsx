import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
    //State and Nav
    const navigate = useNavigate()
    const [prompt, setPrompt] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [personality, setPersonality] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
         fetch('/ais', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    prompt,
    password

  }),
})

    }
    const handleNav = (e) => {
        navigate('/')

    }

    return (
        <div className="auth-form-container">
            <h2>Create A.I. Personality</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name"> Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
            <label htmlFor="personality">Personality</label>
            <input value={personality} name="personality" onChange={(e) => setPersonality(e.target.value)} id="personality" placeholder="Description of personality" />
            {/* <label htmlFor="prompt">Prompt</label>
            <input value={prompt} onChange={(e) => setPrompt(e.target.value)}type="prompt" placeholder="Description of personality" id="prompt"  /> */}
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Deploy</button>
        </form>
        <button className="link-btn" onClick={handleNav}>Activate</button>
    </div>
    )
}
