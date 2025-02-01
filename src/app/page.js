import Image from "next/image";
import Level from "./levels/level";

export default function Home() {
  return (
    <div className="flex justify-center align-middle w-full h-full flex-col">
      <div className="flex flex-row w-full h-full ">
        <div className="w-full h-full">
          <button className="btn btn-primary"> </button>
        </div>
        <div className="w-full h-full">
          <button className="btn btn-primary"> </button>
        </div>
      </div>
      <div className="flex flex-row w-full h-full">
        <div className="w-full h-full">
          <button className="btn btn-primary"> </button>
        </div>
        <div className="w-full h-full">
          <button className="btn btn-primary"> </button>
        </div>
      </div>

    </div>
  );
}
