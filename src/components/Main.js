import Receipt from "./Receipt";

function Main(props) {
    const { receipts } = props;
    return (
        <div className="main">
            {receipts
                .filter((receipt) => !receipt.paid)
                .map((receipt, index) => <Receipt receipt={receipt} key={index} />)}
        </div>
    );
}

export default Main;
