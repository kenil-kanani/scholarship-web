import React from 'react';
import { useParams } from 'react-router-dom';
import cardArray from '../../data/data';

const CardDetails = () => {
    const { id } = useParams();
    const scholarship = cardArray.find((item) => id == item.id);

    return (
        <div className="flex flex-col justify-start items-start">
            <h1 className="text-3xl w-full mt-6 font-bold text-center text-blue-600">
                {scholarship.title}
            </h1>
            <div className="mt-4 flex flex-col justify-start items-start">
                <div className="flex flex-col justify-start items-start w-full bg-white rounded-lg shadow-lg p-4">
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-lg font-bold text-left bg-blue-100 w-full p-2 text-gray-700">
                            Full Description
                        </h3>
                        <p className="text-sm text-left text-gray-500 text-justify">
                            {scholarship.fullDescription}
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col w-full  justify-start items-start">
                        <h3 className="text-lg font-bold bg-blue-100 w-full p-2 text-left text-gray-700">
                            Eligibility
                        </h3>
                        <ul className="list-disc pl-4">
                            {scholarship.eligibility.map((criterion) => (
                                <li key={criterion} className="text-sm text-left text-gray-500">
                                    {criterion}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4 flex flex-col w-full justify-start items-start border-top border-gray-200">
                        <h3 className="text-lg font-bold bg-blue-100 w-full p-2 text-left text-gray-700">
                            Categories
                        </h3>
                        <ul className="list-disc pl-4">
                            {scholarship.categories.map((category) => (
                                <li key={category} className="text-sm text-left text-gray-500">
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4 flex flex-col w-full justify-start items-start border-top border-gray-200">
                        <h3 className="text-lg font-bold bg-blue-100 w-full p-2 text-left text-gray-700">
                            Application Deadline
                        </h3>
                        <p className="text-sm text-left text-gray-500">
                            {scholarship.applicationDeadline}
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col w-full justify-start items-start border-top border-gray-200">
                        <h3 className="text-lg font-bold bg-blue-100 w-full p-2 text-left text-gray-700">
                            Award Amount
                        </h3>
                        <p className="text-sm text-left text-gray-500">
                            {scholarship.awardAmount}
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col w-full justify-start items-start border-top border-gray-200">
                        <h3 className="text-lg font-bold bg-blue-100 w-full p-2 text-left text-gray-700">
                            Renewal Criteria
                        </h3>
                        <p className="text-sm text-left text-gray-500">
                            {scholarship.renewalCriteria}
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col w-full justify-start items-start border-top border-gray-200">
                        <h3 className="text-lg font-bold bg-blue-100 w-full p-2 text-left text-gray-700">
                            Contact Information
                        </h3>
                        <p className="text-sm text-left text-gray-500">
                            {scholarship.contactInformation.phone}
                        </p>
                        <p className="text-sm text-left text-gray-500">
                            {scholarship.contactInformation.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
