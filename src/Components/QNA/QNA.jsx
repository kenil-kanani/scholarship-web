import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const QNAData = [
    {
        id: 1,
        question: "What is Govschmehub?",
        answer: "Govschmehub is an e-Marketplace for Govt. schemes and services. Using Govschmehub you can find various government schemes, check your eligibility, and apply for the schemes."
    },
    {
        id: 2,
        question: "How Govschmehub will help common citizens?",
        answer: "Govschmehub will help you to find the right scheme for you. You can check your eligibility and apply for the scheme."
    },
    {
        id: 3,
        question: "Can I apply for the schemes through Govschmehub?",
        answer: "Yes, you can apply for the schemes through Govschmehub. We are working on this feature and will be available soon."
    },
    {
        id: 4,
        question: "How does Govschmehub work? How do I check for my eligibility through Govschmehub ?",
        answer: "Govschmehub offers a convenient three - step process for the citizens to discover the government schemes for which they are eligible: Step 1 - The user enters his / her attributes such as demographic, income, social details, etc.Step 2 - The Govschmehub findsthe relevant schemes from hundreds of schemes for the user.Step 3 - The user can select from the list of eligible schemes and get more information from the dedicated scheme page with detailed knowledge, FAQs, and application process and traverse to the application URL to apply."
    },
    {
        id: 5,
        question: "What all information about a particular scheme can I find on Govschmehub ?",
        answer: "Govschmehub provides details on the eligibility criteria, application process, and benefits being offered under that scheme. Govschmehub also answers the Frequently Asked Questions(FAQs) about the scheme."
    }
]

const QNA = () => {
    return (
        <div className='px-[160px] flex pt-20 mt-10 bg-[#F0FDF4] gap-[50px]'>
            <img src={"https://cdn.myscheme.in/images/questions.svg"} className='w-[480px] h-[480px] m-auto' alt="" srcset="" />
            <div className='w-[100%] flex flex-col items-center'>
                <h4 className='text-[#ACAAB5] text-[20px]'>Frequently Asked Questions</h4>
                <h1 className='font-extrabold text-[36px] leading-10'>Checkout our knowledge base for some of your answers!</h1>
                <div className='flex flex-col justify-evenly h-full gap-[20px] mt-[10px]'>
                    {QNAData.map((item) => (
                        <QNACard key={item.id} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}


function QNACard({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div className='w-full'>
            <div onClick={() => setShowAnswer(!showAnswer)} className='flex justify-between items-center cursor-pointer'>
                <h1 className=' text-[16px] font-bold'>{question}</h1>
                <div className='flex items-center'>
                    <button className=''>
                        {showAnswer ? <FaAngleUp className='text-[#ACAAB5] text-[20px]' /> : <FaAngleDown className='text-[#ACAAB5] text-[20px]' />}
                    </button>
                </div>
            </div>
            {showAnswer && <p className='text-[#ACAAB5] text-[16px] my-[20px]'>{answer}</p>}
        </div>
    )
}

export default QNA


