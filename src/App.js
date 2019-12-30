import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../src/theme.css";

import Header from "./components/header/header";
import MainSection from "./components/MainSection";
import AsideMenu from "./components/aside/aside";
import Dashboard from "./components/dashboard/Dashboard";
import Resume from "./components/dashboard/resume/Resume";
import CashFlow from "./components/dashboard/cash-flow/CashFlow"
import Banner from './components/dashboard/banner/Banner'
import Transactions from './components/dashboard/transactions/Transactions'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainSection>
        <AsideMenu></AsideMenu>
        <Dashboard>
          <Resume></Resume>
          <CashFlow></CashFlow>
          <Banner></Banner>
          <Transactions></Transactions>

        </Dashboard>
      </MainSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
