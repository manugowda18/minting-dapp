import { useState } from 'react';
import './App.css';
import MainMint from "./MainMint";
import Navbar from "./Navbar";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="overlay">
      <div className="App">
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-bg">
        
      </div>
    </div>
  );
}

export default App;

//opm to ether scan : https://goerli.etherscan.io/address/0x7EA81F97F5C4D140E2822deA43527cb3FAa30471#code