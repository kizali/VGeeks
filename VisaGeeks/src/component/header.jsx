import React from "react";
import visaImage from "../assets/visa.jpeg"; 
import Navbar from "./navbar";

const HeaderComponent = () => {
  return (
    <>
      <Navbar/>
      <main className=" pt-20 bg-white min-h-screen">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-12">
          <div className="flex flex-col justify-content-between items-start ">
            <h1 className="text-5xl font-extrabold mb-8 text-blue-900 leading-tight">
              Welcome to <span className="text-blue-600">VisaGeeks</span>
            </h1>
            <p className="mt-2 text-lg text-gray-700">
              VisaGeeks is your one-stop solution for all visa-related queries and services.
              Whether you're looking to apply for a visa, check your application status, or get expert advice, we've got you covered.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our platform is designed to simplify the visa application process and provide you with the information you need to make informed decisions.
            </p>
            <button className="mt-8 px-8 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition duration-300">
              Request Demande Visa
            </button>
          </div>
          <div className="w-[900px] justify-center">
            <div className="relative">
              <img
                src={visaImage}
                alt="VisaGeeks"
                className="h-80 w-120 object-cover rounded-3xl shadow-2xl border-4 border-blue-100"
                style={{
                  filter: "drop-shadow(0 8px 24px rgba(30,64,175,0.15))",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 500%)",
                  
                }}

              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg text-lg font-medium">
                Secure & Fast
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default HeaderComponent;
