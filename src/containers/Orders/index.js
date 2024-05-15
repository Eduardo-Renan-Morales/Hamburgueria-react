import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import Burguer from "../../assets/burger (1) 1.png"
import lixeira from "../../assets/lixeira.svg"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  Order,
  DivOrder
} from './styles'


function Orders() {
  const [orders, setUser] = useState([]);
  const navigate = useNavigate()
useEffect(() => {
    
  async function fetchOrders(){

    const {data: newOrders} = await axios.get("http://localhost:3001/orders")
    
    setUser(newOrders);
  }

  fetchOrders()

  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newuser = orders.filter(orders => orders.id !== orderId)

    setUser(newuser)

  }

  function goBackPage() {
    navigate('/')
  }



  return (
    <Container>
     
      <Image alt="img-hambuguer" src={Burguer} />
      <H1> Pedidos </H1>
      
      <ContainerItens>


        

        <ul>
          {orders.map(orders => (
            <Order key={orders.id}>

              <DivOrder>
                <p> {orders.order} </p>

                <p className="name"> {orders.clientName} </p>
              </DivOrder>

              <button onClick={() => deleteOrder(orders.id)}>
                <img alt="mg-lixaira" src={lixeira} />
              </button>

            </Order>

          ))}
        </ul>

          <Button isButton={true} onClick={goBackPage} > Voltar </Button>

      </ContainerItens>


    </Container>
  )
}

export default Orders;
