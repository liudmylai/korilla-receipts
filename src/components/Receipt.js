import Order from "./Order";

function Receipt(props) {
    const { receipt } = props;
    return (
        <div className="receipt">
            <h2>RECEIPT</h2>
            <hr/>
            <h3>Name: <span>{receipt.person}</span></h3>
            <Order order={receipt.order} />
        </div>
    );
}
export default Receipt;