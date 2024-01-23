import React from 'react';

const SchemePage = ({ scheme }) => {
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
    } = scheme;

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-4">{name}</h1>
            <img className="w-full h-64 object-cover mb-6" src={image} alt={name} />

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p>{description}</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
                <ul>
                    {eligibility.map((criteria, index) => (
                        <li key={index}>{criteria}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <p>Phone: {contactInformation.phone}</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Website</h2>
                <a href={website} target="_blank" rel="noopener noreferrer">
                    {website}
                </a>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">FAQs</h2>
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <strong>{faq.question}</strong>: {faq.answer}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SchemePage;
