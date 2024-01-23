import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <div className="text-lg mb-4">
          <p>
            Welcome to our platform dedicated to promoting various government schemes in Gujarat. Our mission is to provide information and awareness about initiatives that aim to uplift different sections of society.
          </p>
        </div>

        <div className="text-lg mb-4">
          <p>
            We strive to make it easier for individuals, especially farmers and those belonging to economically weaker sections, to access details about government programs. Our goal is to contribute to the development and well-being of the community by spreading knowledge about available opportunities.
          </p>
        </div>

        <div className="text-lg mb-4">
          <p>
            Whether you are a farmer seeking information about agricultural schemes or an individual looking for educational scholarships, we aim to be a valuable resource for you. Feel free to explore the various schemes and programs highlighted on our platform and take advantage of the opportunities provided by the government of Gujarat.
          </p>
        </div>

        <div className="text-lg">
          <p>
            Thank you for visiting us and being a part of our mission to empower individuals and communities through government initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
