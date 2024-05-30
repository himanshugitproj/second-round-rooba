import { useState } from "react";

import Page from "./Component/Page";
import Animation1 from "./Component/Animation1";

import Investment from "./Component/Investment";
import TextScroll from "./Component/TextScroll";
import Section3 from "./Component/Section3";
import Section5 from "./Component/Section5";
import InvestmentCards from "./Component/InvestmentCards";
import Header from "./Component/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Animation1></Animation1>
      <Investment></Investment>

      {/* <Page></Page> */}
        <TextScroll></TextScroll>
      <div className="flex justify-center items-center flex-col h-full">
        <div className="flex flex-col items-center mb-10">
          <p
            style={{
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "18px",
              color: "rgba(242, 242, 242, 0.75)",
            }}
            className="text-white text-center mb-5"
          >
            How would you want to start creating your financial instrument?
          </p>
          <div className="flex space-x-5">
            <button className=" px-8 py-3 text-lg font-medium text-white bg-blue-400 hover:bg-blue-800 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Talk to Us
            </button>
            <button
              style={{ border: "1px solid white" }}
              className="px-5 py-2.5 text-lg font-medium text-white bg-black text-center dark:text-white"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Section3></Section3>
        <InvestmentCards></InvestmentCards>
        <div className="mt-40 pt-40">
          <Section5></Section5>
        </div>
      </div>
    </>
  );
}

export default App;
