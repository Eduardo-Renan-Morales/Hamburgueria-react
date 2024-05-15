import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import Hamburguer from "../../assets/hamburguer.png"


import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  
} from './styles'


function App() {

  const [orders, setUser] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate();

  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      clientName: inputName.current.value
    });

    setUser([...orders, newOrder]);

    navigate('/orders');
    
  }

  return (
    <Container>
      <Image alt="img-hambuguer" src={Hamburguer} />
      <ContainerItens>
        <H1> Fassa seu Pedido! </H1>

        <InputLabel> Pedido </InputLabel>
        <Input ref={inputOrder} placeholder="Digite o seu pedido" />

        <InputLabel> Nome do Cliente </InputLabel>
        <Input ref={inputName} placeholder="Digite seu Nome" />

        <Button onClick={addNewOrder}> Novo Pedido </Button>  

      </ContainerItens>
    </Container>
  )
}

export default App;
