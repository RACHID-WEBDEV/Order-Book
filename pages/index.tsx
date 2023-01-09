import type { NextPage } from "next";
import Head from "next/head";
import { ButtonGroup, ButtonOutline } from "@/components/form/Button";

import NavBar from "@/components/NavBar";
import Menu from "@/components/Menu";
import SubMenu from "@/components/SubMenu";
import ProductTable from "@/components/ProductTable";
import TradeLogTable from "@/components/TradeLogTable";
import LiveMarketFooter from "@/components/LiveMarketFooter";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> AFEX | Front-End-Task-(Order-Book) </title>
        <meta
          property="og:title"
          name="description"
          content="AFEX | Front-End-Task-(Order-Book)"
          key="title"
        />
      </Head>

      <NavBar />

      <div className="flex pt-[65px] flex-no-wrap">
        <Menu />
        <SubMenu />
        <div className="container  scrollbar rounded bg-gray-100 md:ml-[90px] lg:ml-[296px] mb-16 py-2 h-full md:w-full w-full px-2">
          <div className="bg-white ">
            <div className="w-full h-full rounded border-gray-300 overflow-auto">
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <p className="text-sm pb-1 font-bold text-black-300">Board</p>
                  <ButtonGroup color="secondary"> X-Traded</ButtonGroup>
                  <ButtonGroup> OTC</ButtonGroup>
                  <ButtonGroup> FI</ButtonGroup>
                  <ButtonGroup> Derivatives</ButtonGroup>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-sm pb-1 font-bold text-black-300">
                    Product
                  </p>
                  <ButtonGroup color="secondary"> All</ButtonGroup>
                  <ButtonGroup> SMAZ</ButtonGroup>
                  <ButtonGroup> SBBS</ButtonGroup>
                  <ButtonGroup> SPRL</ButtonGroup>
                  <ButtonGroup> SGNG</ButtonGroup>
                  <ButtonGroup> SSGM</ButtonGroup>
                  <ButtonGroup> FETC</ButtonGroup>
                  <ButtonGroup> SCOC</ButtonGroup>
                </div>
              </div>
            </div>
            <ProductTable />
            <TradeLogTable />
          </div>
        </div>
      </div>
      <LiveMarketFooter />
    </>
  );
};

export default Home;
