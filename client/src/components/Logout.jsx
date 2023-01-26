import { Navigate, useNavigate } from "react-router-dom";

export default function Logout(){
    const navigate = useNavigate()
    function Logout(){
        fetch('/logout', {
      method: 'DELETE'
    })
    navigate('/')

    }
    return (
        // <>
        // <button onClick={Logout}>Logout</button>
        // </>

<div  onClick={Logout} className="navigation">

	<a className="button" href="">
  	<img src="https://i.redd.it/so-placeholder-chan-is-becoming-ako-ai-what-do-you-think-i-v0-b325vldziim81.png?width=2048&format=png&auto=webp&s=3d8be0c291bf1895b799faf485f68a8e322de19d"/>

  <div className="logout">LOGOUT</div>

	</a>

</div>


    )
}