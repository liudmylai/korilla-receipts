import Receipt from "./Receipt";

function Main(props) {
    const { receipts } = props;
    return (
        <div className="main">
            {receipts.map((receipt, index) => (!receipt.paid)?<Receipt receipt={receipt} key={index} />:null)}
        </div>
    );
}

export default Main;
