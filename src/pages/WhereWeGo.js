import { Link } from "react-router-dom";

export default function WhereWeGo() {
  return (
    <div className="flex-none content-center text-center pt-[5rem]">
      <h1 className="text-8xl py-[5rem] font-bold italic text-slate-700">
        Looking for somewhere nice to go?
      </h1>
      <h1 className="text-4xl py-[3rem] font-semibold text-white">
        <Link
          to="/search-trips"
          className="mr-[7rem] hover:text-slate-500  active:text-slate-500"
        >
          <button className="bg-sky-500/75 p-[3rem] hover:bg-sky-300 rounded-xl">
            Let we help you choose your trip !
          </button>
        </Link>
      </h1>
      <div className="flex flex-row pt-[6rem] justify-between">
        <div className="object-cover overflow-hidden rounded-3xl w-[30rem]">
          <img
            src="https://img.wongnai.com/p/1600x0/2020/02/18/458b9a31b62b408d91137fbe152f7450.jpg"
            alt="somewhere nice"
          />
        </div>
        <div className="object-cover overflow-hidden rounded-3xl w-[30rem]">
          <img
            src="https://img.wongnai.com/p/1600x0/2020/02/18/08bca1c784db4d7f92e93656b5376681.jpg"
            alt="somewhere nice"
          />
        </div>
        <div className="object-cover overflow-hidden rounded-3xl w-[30rem]">
          <img
            src="https://img.wongnai.com/p/1600x0/2020/02/18/95bd2ca371e24436bcb24d432a86836c.jpg"
            alt="somewhere nice"
          />
        </div>
      </div>
    </div>
  );
}
