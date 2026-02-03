import { Bookmark } from "lucide-react";
function Card(props) {
  return (
    <div className="card m-5 w-75 h-90 bg-white shadow-[0_0_25px_rgba(0,0,0,0.2)] rounded-3xl p-5">
      <div className="card-top flex items-center justify-between">
        <div className="icon-wrpr w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center">
          <img src={props.logo} alt="" className="w-10 h-10" />
        </div>
        <button className="flex items-center text-gray-400 text-[12px] font-semibold py-1 px-2 border-2 border-gray-300 rounded-lg">
          Save
          <Bookmark className="text-gray-400 ml-1 size-4" />
        </button>
      </div>
      <div className="card-mid mt-8 mb-20">
        <h3 className="text-lg font-bold ">
          {props.company}
          <span className="text-[10px] text-gray-400 font-medium ml-1">
            {props.postdate}
          </span>
        </h3>
        <h2 className="text-xl font-bold mt-1">{props.jobrole}</h2>
        <div className="mt-3 [&_span]:text-[12px] [&_span]:font-semibold [&_span]:py-1 [&_span]:px-2 [&_span]:bg-gray-200 [&_span]:rounded-md">
          <span className="mr-1">{props.time}</span>
          <span>{props.level}</span>
        </div>
      </div>
      <div className="card-btm pt-5 border-t border-gray-200 flex items-center justify-between">
        <div className="">
          <h3 className="text-lg font-bold">{props.salery}</h3>
          <p className="text-[10px] text-gray-400 font-medium ">{props.city}</p>
        </div>
        <button className="bg-black text-white py-1.5 px-3 rounded-md text-sm">
          Apply now
        </button>
      </div>
    </div>
  );
}

export default Card;
