import Image from "next/image";
import { BsLightningCharge } from "react-icons/bs";
import teslaOne from "../../../../../public/tesla-1.webp";

export default function Hero() {
  return (
    <div className="h-screen flex justify-evenly items-center">
      <div className="flex flex-col items-center justify-center">
        <span className="flex items-center">
          <BsLightningCharge size={80} />
          <h1 className="text-4xl font-bold">ElecHire</h1>
        </span>
        <h2 className="mt-2 font-medium bg-black text-white p-4 rounded">
          The Number 1 Place For Electric Car Hire
        </h2>
        <div className="bg-black p-4 rounded text-white mt-2 w-full flex flex-col justify-center items-center">
          <form>
            <div className="flex flex-col m-2">
              <label for="location">Location</label>
              <select id="location" className="rounded p-2 text-black">
                <option value="London">London</option>
                <option value="Leeds">Leeds</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Las Vegas">Las Vegas</option>
              </select>
            </div>
            <div className="flex flex-col m-2">
              <label for="make">Make</label>
              <select id="make" className="rounded p-2 text-black">
                <option value="Tesla">Tesla</option>
              </select>
            </div>
            <div className="flex flex-col m-2">
              <label for="model">Model</label>
              <select id="model" className="rounded p-2 text-black">
                <option value="modelX">Model X</option>
              </select>
            </div>
            <button className="bg-gray-700 rounded p-2 text-center m-2">
              Search
            </button>
          </form>
        </div>
      </div>
      <Image
        src={teslaOne}
        alt="A close up of a tesla"
        className="w-1/2 rounded-lg shadow-xl"
      />
    </div>
  );
}
