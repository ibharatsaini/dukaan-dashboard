import React from "react";

interface orderDetails {
  orderId: string;
  date: string;
  orderAmount: string;
  tnxfees: string;
}

function Transactions() {
  return (
    <div className="w-full flex-col justify-start items-start gap-5 inline-flex mt-8  ">
      <h3 className="text-zinc-900 text-xl font-medium leading-7 ">
        Transactions | This Month
      </h3>
      <div className="w-full gap-3 px-3 pt-3 pb-6 bg-white rounded-lg shadow flex-col justify-start items-end inline-flex">
        <div className="w-full flex justify-between">
          <div className="w-[248px] h-10 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-white rounded border border-zinc-300 justify-start items-center gap-2 flex">
              <img src={"./images/icons/search.svg"} className="w-3.5 h-3.5" />
              <input
                placeholder="Search by order ID..."
                className="grow outline-0 shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-5"
              ></input>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[79px] cursor-pointer	 h-9 px-3 py-1.5 bg-white rounded border border-zinc-300 justify-start items-center gap-1.5 inline-flex">
              <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                Sort
              </div>
              <img src={`./images/icons/sort.svg`} className="w-4 h-4" />
            </div>
            <div className="w-9 h-9 rounded border border-zinc-300 flex justify-center items-center  cursor-pointer">
              <img src={"./images/icons/download.svg"} className="w-5 h-5" />
            </div>
          </div>
        </div>
        <TransactionsTable />
        <Pagination />
      </div>
    </div>
  );
}

const TransactionsTable = () => {
  return (
    <table className="w-full border-collapse text-black px-3 ">
      <thead className="min-w-full  ">
        <tr className="flex min-w-full gap-10 justify-between px-3  bg-[#F2F2F2] bg-opacity-95 py-3.5 rounded ">
          <th className="text-left w-full text-sm text-[#4d4d4d] font-medium">
            Order ID
          </th>
          <th className=" text-left w-full flex justify-start items-center gap-1 text-sm text-[#4d4d4d] font-medium">
            Order date
            <img src={"./images/icons/triangle-icon.svg"} className="w-2 h-2" />
          </th>
          <th className="text-right w-full text-sm text-[#4d4d4d] font-medium">
            Order amount
          </th>
          <th className=" text-right w-full flex justify-end items-center gap-1 text-sm text-[#4d4d4d] font-medium">
            Transaction fees
            <img src={"./images/icons/info.svg"} className="w-3.5 h-3.5" />
          </th>
        </tr>
      </thead>
      <tbody className="">
        {new Array(18)
          .fill({
            orderId: "#281209",
            date: "7 July, 2023",
            orderAmount: "₹1,278.23",
            tnxfees: "₹22",
          })
          .map(({ orderId, date, orderAmount, tnxfees }: orderDetails) => {
            return (
              <tr key={orderId} className="flex  gap-10 justify-between px-3 py-3.5  border-b-2 border-gray-100 border-content inline-block">
                <td className=" text-left w-full text-[#146EB4] text-sm font-medium leading-5 ">
                  {orderId}
                </td>
                <td className=" text-left w-full text-[#1A181E] text-sm font-normal leading-5 ">
                  {date}
                </td>
                <td className=" text-right w-full text-[#1A181E] text-sm font-normal leading-5 ">
                  {orderAmount}{" "}
                </td>
                <td className=" text-right w-full text-[#1A181E] text-sm font-normal leading-5">
                  {tnxfees}{" "}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

const Pagination = () => {
  return (
    <div className="w-[610px] h-8 justify-start items-center gap-6 inline-flex m-auto">
      <div className="pl-1.5 pr-3 w-[100px] py-1.5 bg-white rounded border border-zinc-300 justify-center text-sm leading-tight flex text-neutral-600 items-center gap-1.5 flex">
        <img src={"./images/icons/chevron-right.svg"} className=" h-[18px]" />
        Previous
      </div>
      <div className="justify-start items-start gap-2 flex">
        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
            1
          </div>
        </div>
        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
            ...
          </div>
        </div>
        <div className="w-7 h-7 px-2 py-1.5 bg-[#146EB4] rounded flex-col justify-center items-center gap-1.5 inline-flex">
          <div className="text-center text-white text-sm font-medium font-['Inter'] leading-tight">
            10
          </div>
        </div>

        {Array.from({ length: 8 }, (_, index) => index + 11).map((el) => {
          return (
            <div key={el} className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
              <div className="self-stretch text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {el}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pl-3 pr-1.5 py-1.5 bg-white rounded border border-zinc-300 justify-center items-center gap-1.5 flex text-sm leading-tight flex text-neutral-600 items-center gap-1.5 flex">
        Next
        <img
          src={"./images/icons/chevron-right.svg"}
          className=" h-[18px] rotate-180"
        />
      </div>
    </div>
  );
};

export default Transactions;
