import { React, useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './Kitchen.css';


function Kitchen() {

  const token = localStorage.getItem('token');
  const [prepareOrder, setPrepareOrder] = useState([]);
  const url = 'https://lab-api-bq.herokuapp.com/orders/';

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((orders) => {

        const pendingOrders = orders.filter((itens) =>
          itens.status.includes('pending')
        );
        setPrepareOrder(pendingOrders);
      });
  })

  const handleStatusOrder = (id, newStatus) => {
    const status = { status: newStatus };
    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    })
      .then((response) => {
        response.json().then(() => {
          const order = prepareOrder;
          return order;
        });
      });
  };

  return (
    <>
      <Header name="Cozinha" />

      <section className="orders-container">
        {prepareOrder.map((order) => {
          return (
            <section className="orders" key={order.id}>
              <div className="kitchenCard">
                <h1> {order.status.replace('pending', 'Pendente').replace('preparing', 'Em andamento')} </h1>
                <p className="details-client">ID: {order.id} </p>
                <p className="details-client">Cliente: {order.client_name} </p>
                <p className="details-client">Mesa: {order.table} </p>
                <time>
                  {`${new Date(order.createdAt).toLocaleDateString('pt-br')} - ${new Date(order.createdAt).toLocaleTimeString('pt-br', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}h`}
                </time>
                <hr />
                {order.Products.map((items, index) => (
                  <div key={index}>
                    <p> {items.qtd} {items.name}</p>
                    <p>{items.flavor}</p>
                    <p>{items.complement}</p>
                    <hr />
                  </div>
                ))}
                <Button text="to send" className='button-global' onClick={() => handleStatusOrder(order.id, 'ready')}>Pronto</Button>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}
export default Kitchen;