import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

import {Container, Button, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import loginImage from '../../public/login-image.png';


export default function RegisterPage () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');

    const cookies = parseCookies();
    const router = useRouter();

    if(cookies.cookieName){
        router.push('/');
    }

    async function Register () {
        fetch('http://colabeduc.org/cadastro/usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,password,email})
          }).then(r => r.json())
            .then(json => {
              console.log(json);     
            })
            .catch(ex => console.error('Problemas ao registrar', ex));        
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
                    <Button className="buttonGoogleRadiusLogin"><FontAwesomeIcon icon={faGoogle} />  Cadastre-se usando sua conta Google</Button>
                    
                    <div className="separator"> ou </div>
                    
                    <AvForm className="mb-1">
                        <AvField className="mb-2" name="Username" placeholder="Username" type="text" value={username} validate={{
                            required: {value: true, errorMessage: 'Insira um nome'},
                            pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'O nome não pode conter caracteres especiais'},
                            minLength: {value: 6, errorMessage: 'O nome deve conter de 6 à 16 caracteres'},
                            maxLength: {value: 16, errorMessage: 'O nome deve conter de 6 à 16 caracteres'}
                        }} />
                        <AvField className="mb-2" name="email" placeholder="Email" type="email" value={email} validate={{
                            required: {email: true,errorMessage: 'Insira um email válido'},
                        }} />
                        <AvField className="mb-2" name="originalPassword" placeholder="Senha" type="password" value={password} validate={{
                            required: {value: true, errorMessage: 'Insira uma senha'},
                            minLength: {value: 6, errorMessage: 'A senha deve conter de 6 à 16 caracteres'},
                            maxLength: {value: 16, errorMessage: 'A senha deve conter de 6 à 16 caracteres'}
                        }} />
                        <AvField className="mb-2" name="confirmPassword" placeholder="Confirme a senha" type="password" value={confirmpassword} validate={{match:{value:'originalPassword', errorMessage: 'As senhas estão diferentes'}}} />
                        
                    </AvForm>
                    <Button className="buttonRadiusLogin" onClick={Register}>Cadastrar</Button>
                    {/*If a problem appear, insert the button in the AvFormTAG*/}
                     <p className="askAuth">Já possui uma conta? <Link href="/auth">Login</Link></p>
                    </Card>
                </div>
            </Container>
        </div>
    );
}