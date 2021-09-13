import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { Button, Container } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useState } from "react";
import Image from 'next/image';
import undefinedProfilePic from '../../../public/undefinedProfilePic.jpg';
import loginImage1 from '../../../public/login-image1.png';
import Link from "next/link";


export const getServerSideProps = async (ctx) => {

    const cookies = parseCookies(ctx);
    const userName = cookies.cookieName;

    if(!userName){
        return{
            redirect: {
                destination:'/',
                permanent: false
            }
        }
    }

    const res = await fetch('http://www.colabeduc.org/public/');
    const resJson = await res.json();
    const load = resJson.find( tab => tab.username == `${userName}`);
    
    let profilePic;
    const userImageString = load.profileImageUrl;
    if(userImageString){
        profilePic=loginImage1;
    }else {profilePic = undefinedProfilePic;}

    const data = {
        name: load.username,
        email: load.email,
        password: load.password,
        image: profilePic
    }

    return {
        props: { userData: data}
    }
  }

export default function Perfil ({userData}) {
    const cookies = parseCookies();
    const router = useRouter();
    const [username, setUsername] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');



    //if(nameImage = "unnamed"){
    //const userProfileImage = "epa" }
    //else{
     //   const userProfileImage = userData.image
    //}
    console.log(userData.image)
    

    //if(!cookies.cookieName){
    //    router.push('/');
    //}
    return (
        <>
        <Container className="mt-3 cardPage " >
            <div className="headerPerfilPage">
                <h1 className="display-5 mb-3">Editar Perfil</h1>
                <Button color="primary" size="md" className="buttonBack"href="/nomeDoUsuario/perfil" >
                ← Voltar
                </Button>
            </div>
            <div className="perfilImage mb-2">
                    <Image src={userData.image} layout="intrinsic" alt="Profile Image" width="200" height="200" className="border-radius-image"/>
                <Link href="/" alt="Alterar foto de perfil">Trocar foto de perfil</Link>
           
            <AvForm className="mb-1 mt-4">
                        
                            <AvField className="mb-2 formSize" name="Username" placeholder="Username" type="text" value={username} onChange={(e)=> setPassword(e.target.value)} validate={{
                                required: {value: true, errorMessage: 'Insira um nome'},
                                pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'O nome não pode conter caracteres especiais'},
                                minLength: {value: 6, errorMessage: 'O nome deve conter de 6 à 16 caracteres'},
                                maxLength: {value: 16, errorMessage: 'O nome deve conter de 6 à 16 caracteres'}
                            }} />
                            <AvField className="mb-2 formSize" name="email" placeholder="Email" type="email" value={email} onChange={(e)=> setPassword(e.target.value)} validate={{
                                required: {email: true,errorMessage: 'Insira um email válido'},
                            }} />
                            <AvField className="mb-2 formSize" name="originalPassword" placeholder="Nova Senha" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} validate={{
                                required: {value: true, errorMessage: 'Insira uma senha'},
                                minLength: {value: 6, errorMessage: 'A senha deve conter de 6 à 16 caracteres'},
                                maxLength: {value: 16, errorMessage: 'A senha deve conter de 6 à 16 caracteres'}
                            }} />
                            <AvField className="mb-2 formSize" name="confirmPassword" placeholder="Confirme a senha" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} validate={{match:{value:'originalPassword', errorMessage: 'As senhas estão diferentes'}}} />
                            <Button className="buttonEditPerfil mt-2">Salvar Alterações</Button>
                        
                    </AvForm>
                    </div>
        </Container>
        </>
    )
}