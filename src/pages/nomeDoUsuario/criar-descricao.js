import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Container,Alert,Jumbotron } from 'reactstrap';
import classnames from 'classnames';
import FormCreateDescricao from '../nomeDoUsuario/_form-descricao';

export default function CreateDescription (props) {
    const [epa,setEpa] = useState(1)
    const ta = () => setEpa(epa+1)
return(
  <div>
    <h1>Crie sua Descrição</h1>
    <FormCreateDescricao />

  </div>
)
}