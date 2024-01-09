import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { FaChevronDown } from "react-icons/fa6";
import Transactions from "@/components/Transactions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex bg-gray-100 ${inter.className}`}>
      <Sidebar />
      <section className="overflow-auto grow shrink basis-0 left-56 ">
        <Header />
        <div className="px-8 py-8 w-full">
          <div className="text-zinc-900 text-xl font-medium leading-7 flex justify-between">
            <h3 className="">Overview</h3>
            <div className="w-[137px] h-9 bg-white rounded border border-zinc-300 flex items-center justify-center gap-[7px]  cursor-pointer">
              <p className="text-neutral-600 text-base font-normal leading-normal">
                Last Month
              </p>
              <FaChevronDown className="text-base" />
            </div>
          </div>
          <div className="flex gap-5 justify-between h-[118px] mt-6">
            <div className="w-full h-full p-5 bg-white flex gap-4 flex-col rounded-lg shadow">
              <h4 className="text-neutral-600 text-base font-normal leading-normal">
                Online orders
              </h4>
              <h2 className="text-zinc-900 text-[32px] font-medium leading-[38px]">
                231
              </h2>
            </div>
            <div className="w-full h-full p-5 bg-white flex gap-4 flex-col rounded-lg shadow">
              <h4 className="text-neutral-600 text-base font-normal leading-normal">
                Amount received
              </h4>
              <h2 className="text-zinc-900 text-[32px] font-medium leading-[38px]">
                ₹23,92,312.19
              </h2>
            </div>
          </div>
          <Transactions />
        </div>
      </section>
    </main>
  );
}
