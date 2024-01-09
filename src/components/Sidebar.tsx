import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="w-56 h-screen gap-6 sticky inset-0 flex flex-col items-center bg-[#1E2640] py-4 px-2.5">
      <AccountInfo />
      <div className="w-full gap-1 flex flex-col">
        <Tab link="./images/icons/home.svg" title="Home" />
        <Tab link="./images/icons/orders.svg" title="Orders" />
        <Tab link="./images/icons/products.svg" title="Products" />
        <Tab link="./images/icons/delivery.svg" title="Delivery" />
        <Tab link="./images/icons/marketing.svg" title="Marketing" />
        <Tab link="./images/icons/analytic.svg" title="Analytics" />
        <Tab link="./images/icons/payment.svg" title="Payments" active={true} />
        <Tab link="./images/icons/tool.svg" title="Tools" />
        <Tab link="./images/icons/discounts.svg" title="Discounts" />
        <Tab link="./images/icons/audience.svg" title="Audience" />
        <Tab link="./images/icons/appearance.svg" title="Appearance" />
        <Tab link="./images/icons/plugins.svg" title="Plugins" />
      </div>
      <div className="w-48 h-[54px] px-3 py-1.5 bg-slate-700 rounded flex gap-3 mt-auto items-center">
        <div className="w-9 h-9 bg-white p-1.5 rounded bg-opacity-10">
          <img src={"./images/icons/wallet.svg"} className="" />
        </div>
        <div className="flex gap-0.5 flex-col">
          <span className="text-sm font-normal leading-none text-white opacity-80">
            Available Credits
          </span>
          <h3 className="text-white text-base font-medium leading-normal">
            222.10
          </h3>
        </div>
      </div>
    </div>
  );
}

const AccountInfo = () => {
  return (
    <div className="w-48 h-[41px] flex gap-3 justify-between">
      <img src={"./nishyan-logo.png"} className="w-10 h-10 rounded" />
      <div className="w-full">
        <h3 className="text-base text-white leading-snug font-medium">
          Nishyan
        </h3>
        <Link
          href=""
          className="text-sm opacity-80 text-white text-sm font-normal underline leading-none"
        >
          Visit Store
        </Link>
      </div>
      <FaChevronDown className="text-3xl pt-2" />
    </div>
  );
};

const Tab = ({
  link,
  title,
  href,
  active,
}: {
  link: string;
  title: string;
  href?: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`w-full h-9 px-4 py-2 flex items-center gap-4 cursor-pointer ${
        active && "bg-[#353C53] rounded"
      }`}
    >
      <img src={link} className="h-5 w-5" />
      <Link
        href={href ?? ""}
        className="text-sm text-white font-medium leading-tight opacity-80"
      >
        {title}
      </Link>
    </div>
  );
};

export default Sidebar;
