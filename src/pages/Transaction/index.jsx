import TransactionRow from "../../components/Utils/TransactionRow"
const transa = {
    date: '2023-11-14',
    description: 'Achat de café',
    amount: 2.50,
    balance: 100.00,
    };
function Transaction() {

    return (
        <table className="table">
          <thead>
            <tr>
               <th></th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            { <TransactionRow transaction={transa} isCollapsible={true} />}
            { <TransactionRow transaction={transa} isCollapsible={true} />}
          </tbody>
        </table>
      )
   
  
}

export default Transaction