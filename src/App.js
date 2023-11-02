import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./pages/SideBar";
import Last_Transaction from "./pages/Last_Transaction";
import Setting from "./pages/Setting";
import Tutorial from "./pages/Tutorial";
import Wallet_1 from "./pages/Wallet/Wallet_1";
import Wallet_2 from "./pages/Wallet/Wallet_2";
import Wallet_3 from "./pages/Wallet/Wallet_3";
import Receive from "./pages/Wallet/W1/Receive";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet-1" element={<Wallet_1 />} />
          <Route path="/wallet-2" element={<Wallet_2 />} />
          <Route path="/wallet-3" element={<Wallet_3 />} />
          <Route path="/last-transaction" element={<Last_Transaction />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/wallet-1/receive" element={<Receive />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
