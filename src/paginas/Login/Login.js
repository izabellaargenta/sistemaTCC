import React, { Component, useState} from 'react';
import './login.css';
import {useHistory} from 'react-router-dom';
//import firebase from '../../config/firebase'




function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const disabilitarLogin = email.length === 0 || senha.length === 0;
    const history = useHistory();

    function logar (){
        if(email === "izabella@gmail.com" && senha === "izabella123"){
            
            history.push("/home");
        }else {

            alert ('Email ou Senha incorretos'); 
        }

       
    }
    return(
        <div className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal text-white font-wight-bold">Login</h1>
                </div>

                
                <input onChange={(e) => setEmail (e.target.value) }  type="email" id="inputEmail" value={email} class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha (e.target.value) } type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />


                <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button" disabled={disabilitarLogin}>Logar</button>

                <div className="msg-login text-white text-center my-5">
                    <span>Você está conectado!</span>
                    <span>Verifique se a senha ou usuário estão corretos!</span>
                </div>

                <div className="opcoes-login mt-5">
                    <a href="#" className= "mx-2"> Recuperar Senha  </a>
                    <span className="text-white">&#9733;</span>
                    <a href="#" className= "mx-2"> Quero Cadastrar </a>
                </div>
       </form>
     </div>
    )
}
export default Login;