import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipCard from '../ScholarshipCard/ScholarshipCard';
import QNA from '../QNA/QNA';

const LandingPage = () => {
    return (
        <>
            <div className="bg-[#FFF2DB] p-8">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-bold text-[#BD1E59]">
                            <span className="text-[#6AA84F]">Govschmehub</span> wishes you
                        </h1>
                        <h2 className="text-6xl font-bold text-[#BD1E59] mt-4">Happy New Year</h2>
                        <span className="text-[#E69138] text-9xl font-bold mt-4">2024</span>
                    </div>
                    <div className="space-x-4">
                        {/* Add your SVG icons here */}
                    </div>
                </div>



                {/*//- Find schemes based on categories */}
                <div className="mt-8 flex justify-center">
                    <Link to={"/schemes"}><button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#6AA84F] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#57A64A]">
                        Find Schemes For You
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 ml-2"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                    </Link>
                </div>
                <div className="mt-4 flex justify-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        #GOVERNMENTSCHEMES
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-4">
                        #SCHEMESFORYOU
                    </div>
                </div>
            </div>

            {/* //- Find Scheme based on category */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                    Find schemes based on categories
                </h2>
                <div className="grid grid-cols-3 gap-8">
                    {/* Replace the data below with your actual data */}
                    <SchemeCategory color="text-green-500" count={193} category="Agriculture, Rural & Environment" />
                    <SchemeCategory color="text-yellow-500" count={109} category="Banking, Financial Services and Insurance" />
                    <SchemeCategory color="text-blue-500" count={172} category="Business & Entrepreneurship" />
                    {/* Add more SchemeCategory components for each category */}
                </div>
            </div>

            {/*//- ABout Us */}
            <div className="bg-white p-8">
                <div className="px-40">
                    <h2 className="text-4xl text-center font-bold mb-4">Govschmehub</h2>
                    <div>
                        <p className="mb-4">
                            Govschmehub is a dedicated platform that serves as a comprehensive repository for various scholarship programs offered by the government.
                        </p>
                        <p className="mb-4">
                            Leveraging cutting-edge technology, the platform simplifies the process of discovering scholarship opportunities based on individual eligibility criteria.
                        </p>
                        <p className="mb-4">
                            This hub assists students in identifying suitable scholarship programs and provides guidance on the application process, eliminating the need to navigate multiple sources.
                        </p>
                    </div>
                </div>
            </div>

            {/*//- QNA */}
            <QNA />
        </>
    );
};

const SchemeCategory = ({ color, count, category }) => (
    <div className="text-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-4"
        >
            {/* SVG Path for the icon */}
        </svg>
        <p className="text-lg font-semibold">{count} Schemes</p>
        <p className="text-sm text-gray-600">{category}</p>
    </div>
);

export default LandingPage;
