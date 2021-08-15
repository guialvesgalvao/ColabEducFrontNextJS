import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { Container } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useState } from "react";

export const getStaticProps = async () => {

    const cookies = parseCookies();
    const myName = cookies.cookieName;

    const res = await fetch('http://www.colabeduc.org/public/');
    const resJson = await res.json();
    const load = resJson.find( tab => tab.username == `aquiles`);

    const data = {
        name: load.username,
        email: load.email,
        password: load.password,
        image: load.profileImageUrl
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
    const [password, setPassword] = useState(userData.password);
    const [confirmpassword, setconfirmPassword] = useState(userData.password);

    //if(!cookies.cookieName){
    //    router.push('/');
    //}
    console.log(cookies.cookieName)

    return (
        <>
        <Container className="mt-4" >
            <h1 className="display-5">Meu Perfil</h1>
            <AvForm className="mb-1">
                        <AvField className="mb-2" name="Username" placeholder="Username" type="text" value={username} validate={{
                            required: {value: true, errorMessage: 'Insira um nome'},
                            pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'O nome não pode conter caracteres especiais'},
                            minLength: {value: 6, errorMessage: 'O nome deve conter de 6 à 16 caracteres'},
                            maxLength: {value: 16, errorMessage: 'O nome deve conter de 6 à 16 caracteres'}
                        }} />
                        <AvField className="mb-2" name="email" placeholder="Email" type="email" value={userData.email} validate={{
                            required: {email: true,errorMessage: 'Insira um email válido'},
                        }} />
                        <AvField className="mb-2" name="originalPassword" placeholder="Senha" type="password" value={userData.password} validate={{
                            required: {value: true, errorMessage: 'Insira uma senha'},
                            minLength: {value: 6, errorMessage: 'A senha deve conter de 6 à 16 caracteres'},
                            maxLength: {value: 16, errorMessage: 'A senha deve conter de 6 à 16 caracteres'}
                        }} />
                        <AvField className="mb-2" name="confirmPassword" placeholder="Confirme a senha" type="password" value={userData.password} validate={{match:{value:'originalPassword', errorMessage: 'As senhas estão diferentes'}}} />
                        
                    </AvForm>
        </Container>
        </>
    )
}