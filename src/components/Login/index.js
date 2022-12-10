import {useState} from 'react'
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';
import './index.css'

const Login = (props) =>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [loginError,setLoginError] = useState({showLoginError:false,loginErrorMsg:""});


    const onLoginSuccess = (jwtToken) =>{
        const {history} = props
        Cookies.set('social-media-app-token',jwtToken,{expires:2, path: "/",});
        history.replace("/");
    }

    const onLoginFailure = (errorMsg) =>{

        setLoginError({showLoginError:true,loginErrorMsg:errorMsg})
    }

    const onFormSubmit = async event => {
        event.preventDefault();
        // const url = "https://social-media-app.up.railway.app/user/login/"
        
        const url = 'http://127.0.0.1:8000/user/login/'
        const options= {
            method: 'POST',
            body: JSON.stringify({ username:username,password:password}),
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'
                   
            },
        };

        const response = await fetch(url,options);
        const data = await response.json();

        if(response.ok === true){
            onLoginSuccess(data.access)
        }
        else{
            onLoginFailure(data.error_msg)
        }
    }

    const onChangeOfUsername = event => {
        setUsername(event.target.value)
    }

    const onChangeOfPassword = event =>{
        setPassword(event.target.value)
    }

    const renderUsernameField = () =>{
        
        return(
            <div className='input-container'>
            <label htmlFor="username" className="input-label">USERNAME</label>
            <input type="text" id="username" className='input-el' onChange={onChangeOfUsername} value={username} placeholder="Username"/>
            </div>
        )
       
    }

    const renderPasswordField = () =>{
        return(
            <div className='input-container'>
            <label htmlFor="password" className="input-label">PASSWORD</label>
            <input type="password" id="passwprd" className='input-el' onChange={onChangeOfPassword} value={password} placeholder="Password"/>
            </div>
        )
    }

    const isLoggedIn =  Cookies.get("social-media-app-token");

    if(isLoggedIn !== undefined){
        return <Redirect to="/" />;
    }
    return(
        <div className="app-container">
            <form className="form-container" onSubmit={onFormSubmit}>
                <div className='username-password-container'>
                    {renderUsernameField()}
                    {renderPasswordField()}
                </div>
                <button type="submit" className='login-btn'>Login</button>  
                {loginError.showLoginError && <p className='login-error-msg'>*{loginError.loginErrorMsg}</p>}     
            </form>
        </div>
       
    )
}

export default Login