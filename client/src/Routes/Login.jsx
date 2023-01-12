import { Form, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login({setAi}){
    //States and Nav
    const navigate = useNavigate()
    const [name, setName] = useState([])
    const [password, setPassword] = useState([])
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password
            })
        }
        )
        .then( response => response.json() )
        .then( data => {
            if (data.id) {
                setAi(data)
               navigate('/main')
            } else if (data.errors) {
                setError(data.errors)
            }

        })
    }

    // navigation between login and Register
    const handleNav = (e) => {navigate('/create')}


    return(
        <>
         <div className="auth-form-container">
            <h2>Activation</h2>
            <Form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="ai">Ai</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="name" placeholder="Personality Name" id="name"  />
                <label htmlFor="password">Access Key</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password"  />
                {error}
                <button type="submit">Log In</button>
            </Form>

             <button className="link-btn" onClick={handleNav}>Create A.I</button>

        </div>
        </>

    )
}