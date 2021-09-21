import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { Button, Container } from "reactstrap";
import { useContext, useState } from "react";
import Image from 'next/image';
import undefinedProfilePic from '../../../public/undefinedProfilePic.jpg';
import loginImage from '../../../public/login-image.png';
import Link from "next/link";
import { AuthContext } from "../../contexts/AuthContext";


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

    

    const data = {
        name: load.username,
        email: load.email,
        image: null,
        password: load.password,
        descricoes: load.descricoes,
        chegada: load.dateCreated
    }

    if(load.profileImageUrl===null){
        data.image=undefinedProfilePic
    }else{data.image=load.profileImageUrl}
    
    return {
        props: { userData: data}
    }
  }

export default function Perfil ({userData}) {
    const cookies = parseCookies();
    //console.log(userData.image)

    const dataCriacaoString = userData.chegada;
    const dataCriacaoArray = dataCriacaoString.split('');
    const dataCriacao = dataCriacaoArray[8]+dataCriacaoArray[9]+"/"+dataCriacaoArray[5]+dataCriacaoArray[6]+"/"+dataCriacaoArray[0]+dataCriacaoArray[1]+dataCriacaoArray[2]+dataCriacaoArray[3]

    return (
        <>
        <Container className="mt-3 cardPage " >
            <div className="headerPerfilPage">
                <h1 className="display-5 mb-3">Meu Perfil</h1>
                <Button color="primary" size="md" className="buttonBack"href="/nomeDoUsuario/editar-perfil" >
                    Editar
                </Button>
            </div>
            <div className="perfilImage mb-2">
                <Image src={userData.image} layout="intrinsic" alt="Profile Image" width="200" height="200" className="border-radius-image"/>

                <div className="row-data mt-3">
                    <h6> Nome: <span>{userData.name}</span></h6>
                   
                
                    <h6>Email: <span>{userData.email}</span> </h6>
                    <h6>Descrições: <span>{userData.descricoes.length}</span> </h6>
                    <h6>Colaborador desde: <span>{dataCriacao}</span> </h6>
                    
                </div>
           
            {/*<AvForm className="mb-1 mt-3">
                        
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
                        
                        </AvForm>*/}
                    </div>
        </Container>
        </>
    )
}