/* eslint-disable react/prop-types */
import "animate.css";
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl animate__animated animate__fadeInDown font-semibold text-white lg:text-4xl mb-5">
            {text}
          </h1>
          <br />
          <Link
            to="/products"
            className="w-full  animate__animated animate__fadeInRight border border-white px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-xl shadow-xl lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
