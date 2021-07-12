import Image from 'next/image';
import Link from 'next/link';

import loginImage from '../../public/login-image.png';
import colabBrand from '../../public/brandColab1.png';

import {Container, Button, Card } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';




export default function Episode () {
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
                    <Button className="buttonGoogleRadiusLogin"><FontAwesomeIcon icon={faGoogle} />  Entre usando sua conta Google</Button>
                    
                    <div className="separator"> ou </div>
                    
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Login" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control"
                            placeholder="Senha"  />
                        </div>
                        </form>
                        
                     <Button className="buttonRadiusLogin">Entrar</Button>
                     <p className="askAuth">caso ainda não tenha conta, <Link href="/register">Cadastre-se</Link></p>
                    </Card>
                </div>
            </Container>
        </div>
    );
}