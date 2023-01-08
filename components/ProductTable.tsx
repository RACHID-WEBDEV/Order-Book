import React from "react";
import { ButtonOutline } from "@/components/form/Button";

const ProductTable = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="flex flex-col lg:flex-row items-center gap-2 ">
        <div className="w-full lg:w-1/2 bg-white">
          <div className="scrollbar min-w-full overflow-auto">
            <table className="is-hoverable w-full text-left">
              <thead>
                <tr>
                  <th className=" bg-white px-4 py-3 font-semibold text-sm  lg:px-5">
                    Products
                  </th>
                  <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">
                    Quantity
                  </th>
                  <th className=" bg-white px-3 py-3 font-semibold text-sm text-black-700 lg:px-5">
                    Bid Price
                  </th>
                </tr>
              </thead>
              <tbody className="text-black-300">
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Soybeans (SSBS){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">2003</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-custom-green">
                    1736.92
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline>Buy </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Paddy Rice (SPRL){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">11293</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-custom-green">
                    3627.00{" "}
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline>Buy </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Maize (SMAZ){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">1832</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-custom-green">
                    8294.01
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline>Buy </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Sorghum (SSGM){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">29102</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-custom-green">
                    8192.00
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline>Buy </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Fair Trade ETC (FETC){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-custom-green">
                    1736.92{" "}
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline>Buy </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Fair Trade ETC (FETC){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-custom-green">
                    1736.92{" "}
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline>Buy </ButtonOutline>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white">
          <div className="scrollbar min-w-full overflow-auto">
            <table className="is-hoverable w-full text-left">
              <thead>
                <tr>
                  <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">
                    Products
                  </th>
                  <th className=" bg-white px-4 py-3 font-semibold text-sm text-black-700 lg:px-5">
                    Quantity
                  </th>
                  <th className=" bg-white px-3 py-3 font-semibold text-sm text-black-700 lg:px-5">
                    Offer Price
                  </th>
                </tr>
              </thead>
              <tbody className="text-black-300">
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Soybeans (SSBS){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">2003</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">
                    1736.92
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline color="secondary">Sell </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Paddy Rice (SPRL){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">11293</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">
                    3627.00{" "}
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline color="secondary">Sell </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Maize (SMAZ){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">1832</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">
                    8294.01
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline color="secondary">Sell </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Sorghum (SSGM){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">29102</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">
                    8192.00
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline color="secondary">Sell </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Fair Trade ETC (FETC){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">
                    1736.92{" "}
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline color="secondary">Sell </ButtonOutline>
                  </td>
                </tr>
                <tr className="border border-transparent border-b-slate-200">
                  <td className="px-4 font-semibold py-3 sm:px-5">
                    Fair Trade ETC (FETC){" "}
                  </td>
                  <td className="px-4 font-semibold py-3 sm:px-5">3212</td>
                  <td className="px-4 font-semibold py-3 sm:px-5 text-red-300">
                    1736.92{" "}
                  </td>
                  <td className="px-4 py-3 sm:px-5">
                    <ButtonOutline color="secondary">Sell </ButtonOutline>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
