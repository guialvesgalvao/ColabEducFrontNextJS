import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {Container, Button, Card,Toast, ToastBody, ToastHeader } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import loginImage from '../../public/login-image.png';


export default function RegisterPage () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');

    async function Register () {
        if(confirmpassword!=password){
            {/*insert "alert" from reactstrap*/ }
        }else{

        fetch('http://www.colabeduc.org/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,password,email})
          }).then(r => r.json())
            .then(json => {
              console.log(json);     
            })
            .catch(ex => console.error('Problemas ao registrar', ex));
        }
    }


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
                    <Button className="buttonGoogleRadiusLogin"><FontAwesomeIcon icon={faGoogle} />  Cadastre-se usando sua conta Google</Button>
                    
                    <div className="separator"> ou </div>
                    
                    <form>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Username" type="username" 
                       value={username} onChange={(e)=> setUsername(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <input className="form-control" placeholder="Email" type="email" 
                       value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input  className="form-control" placeholder="Senha" type="password" 
                             value={password} onChange={(e)=> setPassword(e.target.value)}
                              />
                        </div>
                        <div className="mb-3">
                        <input className="form-control" placeholder="Confirme sua senha" type="password" 
                       value={confirmpassword} onChange={(e)=> setconfirmPassword(e.target.value)}/>
                        </div>
                        </form>
                        
                     <Button className="buttonRadiusLogin" onClick={Register}>Cadastrar</Button>
                     <p className="askAuth">Já possui uma conta? <Link href="/auth">Login</Link></p>
                    </Card>
                </div>
            </Container>
        </div>
    );
}