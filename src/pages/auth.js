import { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Container, Button, Card, Alert} from 'reactstrap';
import { parseCookies, setCookie} from 'nookies';

import loginImage from '../../public/login-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../contexts/AuthContext';


export default function LoginPage () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {signIn,invalidAccount,user} = useContext(AuthContext);

    const cookies = parseCookies();
    const router = useRouter();    

    //if(user != null){
    //    router.push('/');
    //}

    async function Login() {
        await signIn({ username ,password });
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
                        <Alert color="danger" isOpen={invalidAccount}> Usuário ou senha inválido</Alert>
                        <Button className="buttonRadiusLogin" onClick={Login} >Entrar</Button>
                        </form>

                        
                     <p className="askAuth">caso ainda não tenha conta, <Link href="/register">Cadastre-se</Link></p>
                    </Card>
                </div>
            </Container>
        </div>
    );
}