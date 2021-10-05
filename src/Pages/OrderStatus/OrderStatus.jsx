// import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOrders } from "../../services/data";
import { OrderCardBase } from "../../components/OrderCard/OrderCardBase";
import { OrderCardProducts } from "../../components/OrderCard/OrderCardProducts";
import { Header } from '../../components/Header/Header';
import GeneralButton from '../../components/Button/Button';


// import Button from '../../components/Button';

const OrderStatus = () => {
    const [orderList, setOrderList] = useState([]);
    const [statusOrder, setStatusOrder] = useState([]);

    useEffect(() => {
        getOrders()
          .then((response) => {
            const sortById = response.sort((itemA, itemB) => itemA.id - itemB.id);
            setOrderList(sortById);
            console.log(sortById);
            const pending = response.filter((order) => order.status === "pending");
            setStatusOrder(pending);
    
            const preparing = response.filter(
            (order) => order.status === "preparing"
            );
            setStatusOrder(preparing);
    
            const ready = response.filter((order) => order.status === "ready");
            setStatusOrder(ready);
    
            return response;
          })
          .catch((error) =>
            console.log(error, "Erro ao acessar a lista de pedidos")
          );
      }, []);

    const handleClickStatus = (selectStatusOrder) => {
        const selectedStatus = orderList.filter((order) =>
        order.status === selectStatusOrder);
        setStatusOrder(selectedStatus);
    };
    console.log(handleClickStatus);

    return (
        <>
            <Header />            
            <section>         
                <header className="select-menu-perMeal">
                    <GeneralButton variant="third" onClick={() => handleClickStatus('pending')}>Pendente</GeneralButton>
                    <GeneralButton variant="third" onClick={() => handleClickStatus('preparing')}>Preparando</GeneralButton>
                    <GeneralButton variant="third" onClick={() => handleClickStatus('ready')}>Pronto</GeneralButton>
                    <GeneralButton variant="third" onClick={() => handleClickStatus('side')}>Entregue</GeneralButton>
                </header>
            </section>
            <div>
                <section className="allOrders-container">
                    {orderList.map((order, index) => (
                        (order.status === 'pending' || order.status === 'processing')
                        && <OrderCardBase 
                        key={`order-${index}`}
                        orderId={order.id}
                        clientName={order.client_name}
                        tableNumber={order.table}
                        orderStatus={order.status}
                        orderProcessed={order.processedAt}
                        orderCreatedAt={order.createdAt} 
                        updatedAt={order.updatedAt}
                        orderProducts={order.products}                        
                        >

                        {order.Products.map((product, productIndex) => (
                            <OrderCardProducts
                            key={`${order.id}-item-${productIndex}`}
                            qtd={product.qtd}
                            name={product.name}
                            flavor={product.flavor}
                            complement={product.complement}
                            />
                        ))}
                        </OrderCardBase>
                    ))}
                </section>
            </div>
        </>
        
    )
}

export default OrderStatus;