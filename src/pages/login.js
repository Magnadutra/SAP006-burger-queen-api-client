import React from 'react';
import '../styles/login.css';
import logo from '../img/logo.png'
import { Link, useHistory } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import useForm from '../Hooks/useForm';

function Login() {
    const history = useHistory();

    const username = useForm();
    const password = useForm();


    // TODO gerenciar estados dos inputs 
        function handleSubmit(event){
            event.preventDefault();
            
            if(username.validate() && password.validate()){

            fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //tipo de conteúdo
            },
            body: JSON.stringify(),
            })

            // para pegar a resposta
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
            });
         }
        }

       const logar = (e) => {
           e.preventDefault()
           // TO DO login de usuário
           console.log('fazer requisição na API em /auth');

           // TO DO deu bom? navega para tela de menu
           history.push('/hall');
       }

    return (
        <section className="login-page" >
                <div className="elipse-background"> </div>
                <header className="header-login"> 
                     {<img src={logo} alt="Logo Burguer Queen" />}
                </header>
                <div className="main-login">
                    <div className="box-login" >
                        <form className="forms" action="" onSubmit={handleSubmit}>
                            <h1 className="title">Login</h1>
                            <Input 
                                label="Usuário" 
                                type="text" 
                                name="username" {...username}
                            />
                            <Input 
                                label="Senha" 
                                type="password" 
                                name="password" {...password} 
                            />
                            <Button 
                                type="submit"  
                                onClick={logar}> 
                                Entrar
                            </Button>

                            <Link 
                                className="link" to="/Register"> 
                                Cadastre-se 
                            </Link>
                        </form>
                    </div>
                </div>
        </section>
     );
}

export default Login;
