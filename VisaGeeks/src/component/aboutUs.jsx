import React from "react";
import travelvisa from "../assets/studentvisa.jpeg";
import studentvisa from "../assets/visatourist.jpeg";
import workvisa from "../assets/workvisa.jpeg";

const AboutUs = () => {
  const visaData = [
    {
      type: "Travel Visa",
      description:
        "Allows you to travel and explore a country for leisure or tourism purposes.",
      image: studentvisa,
    },
    {
      type: "Student Visa",
      description:
        "Grants permission to study at an educational institution in the destination country.",
      image: travelvisa,
    },
    {
      type: "Work Visa",
      description:
        "Allows you to work legally in the destination country for a specific employer or job.",
      image: workvisa,
    },
  ];

  return (
    <>
      <div className="bg-white ">
        <h1 className="text-4xl text-center font-bold  mb-4">About Us</h1>
        <div className="max-w-7xl  mx-auto px-4 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {visaData.map(({ type, description, image }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={type}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{type}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
