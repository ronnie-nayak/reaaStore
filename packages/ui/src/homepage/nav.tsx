"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
  signOut,
} from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GiSlicedBread } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { LuCarrot, LuCherry, LuCupSoda } from "react-icons/lu";
import { PiFlowerDuotone } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { PopupSearch } from ".";

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

export function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="h-16 sm:h-24 relative">
      <div className="fixed top-0 left-0 w-screen h-16 z-10 bg-white flex justify-center items-center gap-6 sm:h-24">
        <Link className="sm:hidden" href="/homepage">
          <img className="h-12 " src="/nav/logo.png" />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <div className="h-[60px] flex items-center justify-center sm:hidden absolute left-4 ">
              <FontAwesomeIcon className="w-[30px] text-4xl" icon={faBars} />
            </div>
          </SheetTrigger>
          <SheetContent className="text-xl" side="left">
            <SheetHeader>
              <SheetTitle>Account</SheetTitle>
            </SheetHeader>
            {/* <SheetDescription> */}
            {/*   Make changes to your profile here. Click save when you're done. */}
            {/* </SheetDescription> */}
            <div className="flex flex-col items-start gap-4 mb-10 font-bold">
              <div className="flex gap-4">
                <SheetClose asChild>
                  <div
                    className="bg-black rounded-full flex gap-2 items-center p-4 font-bold my-5 cursor-pointer "
                    onClick={() => signOut()}
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={session?.user.image ?? ""}
                    />
                    <h2 className="text-white">Sign Out</h2>
                  </div>
                </SheetClose>

                <div className="flex gap-4 self-center p-4 border-2 border-black rounded-full">
                  <PopupSearch />
                </div>
              </div>

              <SheetClose asChild>
                <Link className="flex gap-4" href="/homepage/favourites">
                  <FaRegHeart size={22} />
                  <h2 className="text-[#243F2F] ">Favourites</h2>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link className="flex gap-4" href="/homepage/carts">
                  <IoCartOutline className="text-[#243F2F] " size={26} />
                  <h2 className="text-[#243F2F]">Cart</h2>
                </Link>
              </SheetClose>
            </div>

            <div className="flex flex-col items-start text-[#243F2F] sm:text-[1.5vw] gap-6 ">
              {/* <SheetClose asChild> */}
              {/*   <Link href="/homepage/vegetable"> */}
              {/*     <Option icon={<LuCarrot size={32} />} title="Vegetables" /> */}
              {/*   </Link> */}
              {/* </SheetClose> */}
              {/* <SheetClose asChild> */}
              {/*   <Link href="/homepage/fruit"> */}
              {/*     <Option icon={<LuCherry size={32} />} title="Fresh Fruit" /> */}
              {/*   </Link> */}
              {/* </SheetClose> */}

              <SheetClose asChild>
                <Link href="/homepage/western">
                  <Option icon={<FaRegStar size={42} />} title="Western" />
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/homepage/ethnic">
                  <Option icon={<PiFlowerDuotone size={42} />} title="Ethnic" />
                </Link>
              </SheetClose>

              {/* <SheetClose asChild> */}
              {/*   <Link href="/homepage/baking"> */}
              {/*     <Option icon={<GiSlicedBread size={32} />} title="Baking" /> */}
              {/*   </Link> */}
              {/* </SheetClose> */}
              {/**/}
              {/* <SheetClose asChild> */}
              {/*   <Link href="/homepage/drink"> */}
              {/*     <Option icon={<LuCupSoda size={32} />} title="Drinks" /> */}
              {/*   </Link> */}
              {/* </SheetClose> */}
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden sm:flex items-center text-[#243F2F] sm:text-[1.25vw] lg:gap-1 xl:gap-6 lg:mr-20">
          {/* <Link href="/homepage/vegetable"> */}
          {/*   <Option icon={<LuCarrot size={32} />} title="Vegetables" /> */}
          {/* </Link> */}
          {/* <Link href="/homepage/fruit"> */}
          {/*   <Option icon={<LuCherry size={32} />} title="Fresh Fruit" /> */}
          {/* </Link> */}

          <Link href="/homepage/western">
            <Option icon={<FaRegStar size={32} />} title="Western" />
          </Link>

          <Link href="/homepage">
            <img className="h-16 " src="/nav/logo.png" />
            {/* <img */}
            {/*   className="h-14 hidden sm:block lg:hidden px-4" */}
            {/*   src="/lghome/smicon.png" */}
            {/* /> */}
          </Link>

          <Link href="/homepage/ethnic">
            <Option icon={<PiFlowerDuotone size={32} />} title="Ethnic" />
          </Link>

          {/* <Link href="/homepage/baking"> */}
          {/*   <Option icon={<GiSlicedBread size={32} />} title="Baking" /> */}
          {/* </Link> */}
          {/**/}
          {/* <Link href="/homepage/drink"> */}
          {/*   <Option icon={<LuCupSoda size={32} />} title="Drinks" /> */}
          {/* </Link> */}
        </div>

        <div className="hidden sm:flex items-center gap-4 justify-self-end lg:absolute right-10">
          <PopupSearch />
          <Link href="/homepage/favourites">
            <FaRegHeart size={22} />
          </Link>
          <Link href="/homepage/carts">
            <IoCartOutline className="text-[#243F2F] " size={29} />
          </Link>
          <div
            className="bg-black rounded-3xl flex gap-2 items-center p-1 font-bold pr-2 cursor-pointer"
            onClick={() => signOut()}
          >
            <img
              className="w-10 h-10 rounded-full"
              src={session?.user.image ?? ""}
            />
            <h2 className="text-white">Sign Out</h2>
          </div>
        </div>
      </div>
    </nav>
  );
}
