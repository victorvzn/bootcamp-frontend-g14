// import { IconSquareRoundedPlusFilled } from "./components/Icons"

import { TbSquareRoundedPlusFilled } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-[740px] m-auto bg-slate-900 my-20">
      <div className="text-white">
        <h1 className="text-4xl font-extrabold">Invoices</h1>
        <span>There are 7 total invoices</span>
      </div>

      <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text-white flex justify-between items-center gap-4">
        <TbSquareRoundedPlusFilled size="2rem" />
        New Invoice
      </button>
    </header>
  )
}

export default Header