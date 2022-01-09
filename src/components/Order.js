function Order(props) {
    const { order } = props;
    return (
        <div className="order">
            <p>Main: <span>{order.main}</span></p>
            <p>Protein: <span>{order.protein}</span></p>
            <p>Rice: <span>{order.rice}</span></p>
            <p>Sauce: <span>{order.sauce}</span></p>
            <p>Drink: <span>{order.drink}</span></p>
            <p>Topping: <span>{order.toppings.join(', ')}</span></p>
            <hr/>
            <h3>Total: <span>${order.cost}</span></h3>
        </div>
    );
}
export default Order;