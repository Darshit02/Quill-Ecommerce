import { Box, Clock, Star, Truck, Watch } from "lucide-react";
import React from "react";


const Service = () => {
  return (
    <section className="">
  <div className="max-w-screen-xl flex flex-col justify-center items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      <div className="flex items-start gap-4 border border-gray-200 px-5 py-4 rounded-md">
        <span className="shrink-0 rounded-lg bg-green-400 p-4">
          <Clock size={24} /> 
        </span>

        <div>
          <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 border border-gray-200 px-5 py-4 rounded-md">
        <span className="shrink-0 rounded-lg bg-red-400 p-4">
           <Truck size={24} />
        </span>

        <div>
          <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 border border-gray-200 px-5 py-4 rounded-md">
        <span className="shrink-0 rounded-lg bg-purple-400 p-4">
          <Star size={24}/>
        </span>

        <div>
          <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
          </p>
        </div>
      </div>


    </div>
  </div>
</section>
  );
};

export default Service;
