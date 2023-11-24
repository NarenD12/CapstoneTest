import { Routes,Route } from "react-router-dom";  
import Register from "./Components/Register";
import Home from "./Components/Home";
import Login from "./Components/Login";
import CardDetails from "./Components/CardDetails";
import About from "./Components/About";
import PastTransactions from "./Components/PastTransactions";
import MutualFunds from "./Components/MutualFunds";
import Stocks from "./Components/Stocks";
import Contact from "./Components/Contact";
import Navbar from "./Components/NavBar";
import BillPayments from "./Components/BillPayments";
import Transactions from "./Components/Transactions";
import DepositWithdraw from "./Components/DepositWithdraw";
import PersonalInfo from "./Components/PersonalInfo";
import Successful from "./Components/Successful";


function App() {
  return (
    <div>
        <Navbar/>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Register/>} />
              <Route path="/login" element= { <Login/>} />
              <Route path="/Card" element={<CardDetails/>}/>
              <Route path="/DepWithdraw" element={<DepositWithdraw/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/Team" element={<Stocks/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/Transactions" element={<PastTransactions/>}/>
              <Route path="/Mutual" element={<MutualFunds/>}/>
              <Route path="/Bill" element={<BillPayments/>}/>
              <Route path="/Stocks" element={<Stocks/>}/>
              <Route path="/CardPay" element={<CardDetails/>}/>
              <Route path="/PersonalInfo" element={<PersonalInfo/>}/>
              <Route path="/Success" element={<Successful/>}/>
            </Routes>
    </div>
  );
}
export default App;