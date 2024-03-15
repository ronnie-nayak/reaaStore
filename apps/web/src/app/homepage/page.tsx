"use client";
import type { Props } from "@repo/ui";
import {
  Banner,
  Biker,
  Footer,
  Grid,
  Info,
  Item,
  Loading,
  Order,
  Sections,
  Sections2,
  Sections3,
  Slider,
} from "@repo/ui";
import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { dataInfo, datax } from "../../lib/data";

export default function HomePage() {
  const [fruits, setFruits] = useState<Props[]>([]);
  const [veggies, setVeggies] = useState<Props[]>([]);
  const router = useRouter();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/getProducts?type=western", {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          setFruits(data);
        }
      } catch (error) {
        router.replace("/login");
      }
    };
    getProducts();

    const getProductsVeggies = async () => {
      try {
        const res = await fetch("/api/getProducts?type=ethnic", {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          setVeggies(data);
        }
      } catch (error) {
        router.replace("/login");
      }
    };
    getProductsVeggies();
  }, []);

  return (
    <div className="relative">
      <Banner />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:py-8 xl:px-16 m-2">
        <Sections
          image="/home/ethnic.jpg"
          path="/homepage/seafood"
          title={"Beautiful Ethnic\nWear!"}
        />
        <Sections
          image="/home/modern.jpg"
          path="/homepage/drink"
          title={"Latest Modern\nStyles"}
        />
        <Sections
          image="/home/casual.jpg"
          path="/homepage/meat"
          title={"Everyday Casual\nComfort"}
        />
      </div>
      <h2 className="sm:text-[1.5vw] text-[#243F2F] text-center m-7 ">
        Bestsellers in September
      </h2>
      <div className="xl:hidden">
        {fruits.length === 0 ? <Loading /> : <Slider arrayOfItems={fruits} />}
      </div>
      <div className="hidden xl:block m-10">
        <div
          className="bg-white"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
          }}
        >
          {fruits.length === 0 ? (
            <Loading />
          ) : (
            fruits
              .map((item, index) => <Item {...item} key={index} />)
              .splice(0, 10)
          )}
        </div>
      </div>
      <Biker />

      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="xl:hidden w-full">
          {veggies.length === 0 ? (
            <Loading />
          ) : (
            <Slider arrayOfItems={veggies} />
          )}
        </div>
        <div className="hidden xl:block w-9/12 mx-auto">
          {veggies.length === 0 ? (
            <Loading />
          ) : (
            <Slider arrayOfItems={veggies} />
          )}
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
    </div>
  );
}
