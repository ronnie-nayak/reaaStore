"use client";
import {
  Banner,
  Biker,
  Footer,
  Info,
  Item,
  Loading,
  NavUI,
  Order,
  Props,
  Sections,
  Sections2,
  Sections3,
  Slider,
} from "@repo/ui";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { dataInfo, datax, dataxVeggies } from "../lib/data";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.replace("/homepage");
  }

  if (status === "loading" || status === "authenticated")
    return (
      <div className="w-screen h-screen">
        <Loading />
      </div>
    );

  return (
    <div className="relative font-bold">
      <NavUI />
      <Banner />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:py-8 xl:px-16 m-2">
        <Sections
          image="/home/ethnic.jpg"
          path="/login"
          title={"Beautiful Ethnic\nWear!"}
        />
        <Sections
          image="/home/modern.jpg"
          path="/login"
          title={"Latest Modern\nStyles"}
        />
        <Sections
          image="/home/casual.jpg"
          path="/login"
          title={"Everyday Casual\nComfort"}
        />
      </div>
      <h2 className="sm:text-[1.5vw]  text-[#243F2F] text-center m-7 ">
        Bestsellers in September
      </h2>
      <div className="xl:hidden">
        <Slider arrayOfItems={datax} />
      </div>
      <div className="hidden xl:block m-10">
        <div
          className="bg-white"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
          }}
        >
          {datax
            .map((item, index) => <Item {...item} key={index} />)
            .splice(0, 10)}
        </div>
      </div>
      <Biker />

      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="xl:hidden w-full">
          <Slider arrayOfItems={dataxVeggies} />
        </div>
        <div className="hidden xl:block w-9/12 mx-auto">
          <Slider arrayOfItems={dataxVeggies} />
        </div>
        <Sections2
          image="/home/wedding.jpg"
          title="Dresses for your Big Day!"
        />
      </div>

      <div className="flex flex-col xl:flex-row xl:items-center justify-between">
        <Sections3 discount={33} image="/home/first.jpg" title="" />
        <Sections3 discount={25} image="/home/second.jpg" title="" />
        <Sections3 discount={33} image="/home/third.jpg" title="" />
        <Sections3 discount={50} image="/home/forth.jpg" title="" />
      </div>
      <Order />
      <div className="flex flex-row xl:justify-around gap-4 p-10">
        {dataInfo.map((item, i) => (
          <Info
            first={item.first}
            image={item.image}
            key={i}
            second={item.second}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
