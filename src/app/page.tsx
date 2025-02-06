import Image from "next/image";
import Sidenav from "./components/sidenav";
import Main from "./components/main";
import Rain from "./components/main";
import CreditCard from "./components/cards";
import TransactionsTable from "./components/Table";
import CardDashboard from "./components/Cashdata";
import Mainbody from "./components/Mainbody";
import TransactionsHeader from "./components/main";

export default function Home() {
  return (
    <div className="flex ">
<div className="w-[20%]">
<Sidenav/>
</div>
<div className="w-[80%]">
  <TransactionsHeader/>
<Mainbody/>
<div/>
    </div>
    </div>

    
  );
}
