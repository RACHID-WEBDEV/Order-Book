import React from "react";

const TradeLogTable = () => {
  return (
    <div className="w-full py-2 my-3 ">
      <div className="bg-white">
        <p className="uppercase font-medium text-xs text-black-700 m-1 pb-3 border-b-2 border-gray-100">
          Trade Log
        </p>

        <div className="scrollbar min-w-full overflow-auto">
          <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className=" bg-white px-4 py-3 font-semibold text-xs text-black-700 lg:px-5">
                  Security
                </th>
                <th className=" bg-white px-4 py-3 font-semibold text-xs text-black-700 lg:px-5">
                  Board
                </th>
                <th className=" bg-white px-3 py-3 font-semibold text-xs text-black-700 lg:px-5">
                  Order Type
                </th>
                <th className=" bg-white px-4 py-3 font-semibold text-xs text-black-700 lg:px-5">
                  Matched Price
                </th>
                <th className=" bg-white px-4 py-3 font-semibold text-xs text-black-700 lg:px-5">
                  Quantity
                </th>
                <th className=" bg-white px-4 py-3 font-semibold text-xs text-black-700 lg:px-5">
                  Date
                </th>
                <th className=" bg-white px-4 py-3 font-semibold text-xs text-black-700 lg:px-5">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="text-black-300">
              <tr className="border border-transparent bg-gray-100 border-b-slate-200 lg:ml-[-4px]">
                <td className="px-4 font-semibold py-5 sm:px-5">
                  Soybeans (SSBS){" "}
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">X-Traded</td>
                <td className="px-4 font-semibold py-5 sm:px-5">Buy</td>
                <td className="px-4 font-semibold py-5 sm:px-5">1792.65</td>
                <td className="px-4 font-semibold py-5 sm:px-5">9265</td>
                <td className="px-4 font-semibold py-5 sm:px-5">
                  17 Oct, 2020
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">07:38</td>
              </tr>
              <tr className="border border-transparent border-b-slate-200">
                <td className="px-4 font-semibold py-5 sm:px-5">
                  Paddy Rice (SPRL){" "}
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">X-Traded</td>
                <td className="px-4 font-semibold py-5 sm:px-5">Buy</td>
                <td className="px-4 font-semibold py-5 sm:px-5">1792.65</td>
                <td className="px-4 font-semibold py-5 sm:px-5">9265</td>
                <td className="px-4 font-semibold py-5 sm:px-5">8 Sep, 2020</td>
                <td className="px-4 font-semibold py-5 sm:px-5">02:02</td>
              </tr>
              <tr className="border border-transparent border-b-slate-200">
                <td className="px-4 font-semibold py-5 sm:px-5">
                  Maize (SMAZ){" "}
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">OTC</td>
                <td className="px-4 font-semibold py-5 sm:px-5">Buy</td>
                <td className="px-4 font-semibold py-5 sm:px-5">Sell</td>
                <td className="px-4 font-semibold py-5 sm:px-5">9265</td>
                <td className="px-4 font-semibold py-5 sm:px-5">
                  24 May, 2020
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">06:42</td>
              </tr>
              <tr className="border border-transparent border-b-slate-200">
                <td className="px-4 font-semibold py-5 sm:px-5">
                  Sorghum (SSGM){" "}
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">FI</td>
                <td className="px-4 font-semibold py-5 sm:px-5">Sell</td>
                <td className="px-4 font-semibold py-5 sm:px-5">1792.65</td>
                <td className="px-4 font-semibold py-5 sm:px-5">9265</td>
                <td className="px-4 font-semibold py-5 sm:px-5">1 Feb, 2020</td>
                <td className="px-4 font-semibold py-5 sm:px-5">01:09</td>
              </tr>
              <tr className="border border-transparent border-b-slate-200">
                <td className="px-4 font-semibold py-5 sm:px-5">
                  Soybeans (SSBS){" "}
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">X-Traded</td>
                <td className="px-4 font-semibold py-5 sm:px-5">Buy</td>
                <td className="px-4 font-semibold py-5 sm:px-5">1792.65</td>
                <td className="px-4 font-semibold py-5 sm:px-5">9265</td>
                <td className="px-4 font-semibold py-5 sm:px-5">
                  17 Oct, 2020
                </td>
                <td className="px-4 font-semibold py-5 sm:px-5">07:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradeLogTable;
