import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 text-black flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className=" leading-relaxed text-white text-bold mb-14 text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          ipsam nulla quaerat eum. Ducimus, ad.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white rounded-full  items-center font-medium px-8 py-3 ">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white rounded-full  items-center font-medium px-4 py-3 ">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
