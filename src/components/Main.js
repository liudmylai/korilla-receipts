import Receipt from "./Receipt";

function Main(props) {
    const { receipts } = props;
    return (
        <div className="main">
            {/* Ternary Operator */}
            {/* {receipts.map((receipt, index) => (!receipt.paid)?<Receipt receipt={receipt} key={index} />:null)} */}
            {/* AND Operator */}
            {receipts.map((receipt, index) => !receipt.paid && <Receipt receipt={receipt} key={index} />)}

        </div>
    );
}

export default Main;
