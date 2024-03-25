import Welcome from "../../components/Utils/Welcome";
import CardAccount from "../../components/cards/CardAccount";

function Account() {
  return (
    <main className="main bg-dark"> 
    <Welcome/>
    <h2 className="sr-only">Accounts</h2>
<CardAccount/>
    </main>
   
  )
}

export default Account;