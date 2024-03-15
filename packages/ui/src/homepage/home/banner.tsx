import Link from "next/link";

export function Banner() {
  return (
    <div>
      <div
        className="h-[29.5vh] md:h-[40vh] xl:h-[52vh] px-4 py-8 xl:p-14 xl:py-20"
        style={{
          background: "url('/home/banner.jpg') right -200px no-repeat #E4E4E4",
          backgroundSize: "800px",
        }}
      >
        <h1 className="w-[78%] text-[6vw] xl:text-[4.5vw]  leading-none text-gray-700 mb-4">
          Get the Latest Trends <br />
          and Best of Fashion!
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:mt-12 text-[4vw] sm:text-[1.5vw]">
          <Link
            className="flex gap-3 justify-start items-center bg-limeGreen text-white  p-4 rounded-full hover:text-limeGreen hover:bg-white transition-all duration-300"
            href="/homepage/fruit"
          >
            <img src="/home/cart.svg" />
            <h2>Explore Shop</h2>
          </Link>
          <h2 className="text-gray-700 font-semibold">25+ New Items</h2>
        </div>
      </div>
    </div>
  );
}
