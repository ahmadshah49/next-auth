"use client";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard",
      icon: <LuLayoutDashboard size={25} />,
    },
    {
      id: "products",
      label: "Products",
      path: "/products",
      icon: <TbBrandProducthunt size={25} />,
    },
    {
      id: "visitors",
      label: "Visitors",
      path: "/visitors",
      icon: <PiUsersFourLight size={25} />,
    },
  ];
  const handleNavigate = (getMenuItem) => {
    router.push(getMenuItem.path);
  };
  return (
    <div className="bg-blue-950 w-72 h-screen flex flex-col left-0 ">
      <Link
        href={"/dashboard"}
        className="p-4 mt-8 text-white text-3xl font-extrabold"
      >
        Dashboard
      </Link>
      <div className="flex flex-col">
        <ul className="py-4 px-4">
          <li>
            <Link
              href={"/dashboard"}
              className="flex items-center gap-4 my-6 text-white cursor-pointer hover:text-black rounded-md py-2 px-4 hover:bg-slate-400 duration-300 ease-in-out "
            >
              <LuLayoutDashboard size={25} /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard/products"}
              className="flex items-center gap-4 my-6 text-white cursor-pointer hover:text-black rounded-md py-2 px-4 hover:bg-slate-400 duration-300 ease-in-out "
            >
              <TbBrandProducthunt size={25} /> Products
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard/visitors"}
              className="flex items-center gap-4 my-6 text-white cursor-pointer hover:text-black rounded-md py-2 px-4 hover:bg-slate-400 duration-300 ease-in-out "
            >
              <PiUsersFourLight size={25} /> Visitors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
