import Image from 'next/image';
import Link from 'next/link';

import loginImage from '../../public/login-image.png';
import colabBrand from '../../public/brandColab1.png';
import {Container, Button, Card, Input } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';




export const Login = (username,password) => {
    fetch('http://www.colabeduc.org/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(username,password)
      }).then(r => r.json())
        .then(json => {
          console.log(json);
          //Auth.logIn(json);
          //this.props.history.replace("/admin/index");
  
        })
        .catch(ex => console.error('Problemas ao logar', ex));
}

export default function Episode ({ dados }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    
    

    return (
        <div className=" bg-light">
            <Container fluid className="divider pt-4">
                
                <div className="firstContainer">
                <Image layout="intrinsic" src={loginImage} alt="Crianças Estudando" />
                    <h2 >A evolução dos métodos de aprendizagem é fundamental para a educação!</h2>
                    <p className="lead">Faça seu login e experimente agora nossos games educativos e conheça maneiras novas de ensinar e aprender.</p>
                </div>
                <div className="secondContainer mt-3">
                    <Card className="p-5 formRadiusLogin">
                    {/*<Image src={colabBrand} alt="ColabEduc" className="pb-4" layout="responsive" />*/}
                    <Button className="buttonGoogleRadiusLogin" ><FontAwesomeIcon icon={faGoogle} />  Entre usando sua conta Google</Button>
                    
                    <div className="separator"> ou </div>
                    
                    <form>
                        <div className="mb-3">
                        <input className="form-control" placeholder="Username" type="username" 
                       value={username} onChange={(e)=> setUsername(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input  className="form-control" placeholder="Senha" type="password" 
                       value={password} onChange={(e)=> setPassword(e.target.value)}
                              />
                        </div>
                        </form>
                        
                     
                     <Button className="buttonRadiusLogin" onClick={Login} >Entrar</Button>
                     <p className="askAuth">caso ainda não tenha conta, <Link href="/register">Cadastre-se</Link></p>
                    </Card>
                </div>
            </Container>
        </div>
    );
}