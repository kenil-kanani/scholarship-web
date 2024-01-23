import React from "react";
import ScholarshipCard from '../ScholarshipCard/ScholarshipCard.jsx';
import { FiSearch } from "react-icons/fi";
import cardArray from '../../data/data.js'

function Scholarship() {

  return (
    <>
      <div className="w-full flex flex-row justify-center mb-10 mt-10">
        <div className="bg-white rounded-full flex items-center w-1/3 pl-2 pr-4 py-2  shadow-lg ">
          <input
            type="text"
            placeholder="Scholarships.."
            className="w-full p-2 outline-none bg-transparent text-slate-900"
          />
          <button className="text-blue-500 hover:underline focus:outline-none">
            {<FiSearch className="text-2xl" />}
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {cardArray.map((item) => (
          <ScholarshipCard
            title={item.title}
            key={item.id}
            description={item.shortDescription}
            img={item.image}
            slug={item.slug}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default Scholarship;
