"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { GiSlicedBread } from "react-icons/gi";
import { PiFlowerDuotone } from "react-icons/pi";
import { LuCarrot, LuCherry, LuCupSoda } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function Option({ title, icon }: { title: string; icon: React.JSX.Element }) {
  return (
    <div className="flex items-center gap-3 font-bold">
      <div className="text-[#00D783] sm:text-[1.5vw]">{icon}</div>
      <h3 className="hover:text-green-500 transition-all duration-300 sm:text-[2.5vw] font-medium">
        {title}
      </h3>
    </div>
  );
}

export function NavUI() {
  const router = useRouter();
  return (
    <nav className="h-16 sm:h-24 relative ">
      <div className="fixed top-0 left-0 w-screen h-16 z-10 bg-white flex justify-around items-center px-4 sm:h-24">
        <Link className="mx-auto sm:hidden" href="/login">
          <img className="h-12 " src="/nav/logo.png" />
        </Link>
        <Link
          className=" h-[60px] sm:hidden absolute left-4 flex items-center justify-center"
          href="/login"
        >
          <FontAwesomeIcon className="w-[30px] text-4xl" icon={faBars} />
        </Link>
        <div
          className="hidden sm:flex items-center text-[#243F2F] sm:text-[1.25vw] gap-6 cursor-pointer"
          onClick={() => {
            router.replace("/login");
          }}
        >
          {/* <Option title="Vegetables" icon={<LuCarrot size={32} />} /> */}
          {/* <Option title="Fresh Fruit" icon={<LuCherry size={32} />} /> */}
          <Option icon={<FaRegStar size={42} />} title="Western" />
          <img className="h-16 hidden sm:block mx-4" src="/nav/logo.png" />
          <Option icon={<PiFlowerDuotone size={42} />} title="Ethnic" />
          {/* <Option title="Baking" icon={<GiSlicedBread size={32} />} /> */}
          {/* <Option title="Drinks" icon={<LuCupSoda size={32} />} /> */}
        </div>

        <div className="hidden sm:flex items-center gap-4 absolute right-9">
          <Link className="p-4 rounded-3xl bg-black text-white" href="/login">
            SignIn
          </Link>
        </div>
      </div>
    </nav>
  );
}
