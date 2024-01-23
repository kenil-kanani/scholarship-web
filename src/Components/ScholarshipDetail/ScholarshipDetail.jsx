import React from 'react';
import { useParams } from 'react-router-dom';
import { scholarships } from '../../data/data2';


const ScholarshipDetails = () => {
    const { id } = useParams();
    const scholarship = scholarships.find(scholarship => scholarship.id === parseInt(id));

    if (!scholarship) {
        return <div>Scholarship not found</div>;
    }

    const {
        ministry_name,
        state,
        gender,
        age,
        caste,
        name,
        description,
        image,
        eligibility,
        contactInformation,
        website,
        faqs,
    } = scholarship;

    return (
        <div className="container mx-auto p-8">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
                <h1 className="text-4xl font-serif font-bold mb-6">{name}</h1>
                <img src={image} alt={name} className="mb-6 w-full rounded-md" />
                <p className="text-[20px] font-bold leading-6">
                    Ministry: {ministry_name}
                </p>
                <br />
                <p className="mb-6 text-lg leading-7">{description}</p>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria:</h2>
                    <ul className="list-disc pl-8">
                        {eligibility.map((criteria, index) => (
                            <li key={index} className="text-base leading-6">{criteria}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information:</h2>
                    <p className="text-base leading-6">Phone: {contactInformation.phone}</p>
                    <p className="text-base leading-6">Email: {contactInformation.email}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Website:</h2>
                    <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        {website}
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions:</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p className="text-base leading-6">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Additional Details:</h2>
                    <p className="text-base leading-6">
                        State: {state}
                    </p>
                    <p className="text-base leading-6">
                        Caste:{' '} {caste.join(', ')}
                    </p>
                </div>
            </div>

        </div>

    );
};

export default ScholarshipDetails;
