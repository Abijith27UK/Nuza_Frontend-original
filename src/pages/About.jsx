import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io"; // Importing the down arrow icon
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowRightLong , FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";

const AboutUs = () => {
  const [email,setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const images_customer = [
    "/customers1.jpg",
    "/customers2.jpg",
    "/customers3.jpg",
    "/customers4.jpg",
    "/customers5.jpg",
    "/customers6.jpg",
    "/customers7.jpg",
  ];
  const images_business = [
    "/business1.jpg",
    "/business2.jpg",
    "/business3.jpg",
    "/business4.jpg",
    "/business5.jpg",
    // "/business6.jpg",
    // "/business7.jpg",
  ];

  const revolutionControls = useAnimation();
  const [revRef, revInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (revInView) {
      revolutionControls.start({ scale: 1, opacity: 1 });
    }
  }, [revInView, revolutionControls]);



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_as5x79j',
        'template_d2d0h3i',
        {
          to_email: "fiitjeeb02@gmail.com",
          message: email,
        },
        'THtOBH8U_wvAbSkHH'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setEmail("");
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInd, setCurrentInd] = useState(0);

  const taglines_customer = [
    "Discover top beauty services near you",
    "Glow with confidence, effortlessly",
    "Your wellness journey starts here",
    "Find trusted professionals at your fingertips",
    "Book your perfect self-care session",
    "Because you deserve the best",
    "Shine from the inside out"
  ];
  
  const taglines_business = [
    "Grow your brand with Nuza",
    "Be the destination everyone chooses",
    "Manage clients like a pro",
    "Stand out in local search",
    "Drive bookings, not stress"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images_customer.length);
    }, 3500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images_customer.length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInd((prevIndex) => (prevIndex + 1) % images_business.length);
    }, 3500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images_business.length]);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex flex-col md:flex-row justify-around items-center w-full ">
      {/* Mobile View - Animations */}
      <div className="flex flex-col w-full max-w-2xl mx-auto space-y-6 md:hidden mb-3">
        {/* First Sentence: Right to Left */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-purple-600 leading-snug text-left"
        >
          <p>Where</p>
          <p>Businesses Shine</p>
          <p>and</p>
          <p>Customers Glow</p>
        </motion.div>

        {/* Second Sentence: Left to Right */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl font-bold text-right text-gray-900"
        >
          <p>Welcome to the</p>
          <p>Future of Beauty &</p>
          <p>Wellness!</p>
        </motion.div>
      </div>

      {/* Desktop View - Horizontal Text Layout with Motion */}
      <div className="hidden lg:flex lg:flex-row mb-3">
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-purple-600 mb-6 md:mb-0 md:text-left mr-20"
          >
            <p>Where</p>
            <p>Businesses Shine</p>
            <p>and</p>
            <p>Customers Glow</p>
          </motion.div>

          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-bold mb-6 md:mb-0 md:text-right ml-20"
          >
            <p>Welcome to the</p>
            <p>Future of Beauty &</p>
            <p>Wellness!</p>
          </motion.div>
        </div>


    </div>
      <motion.img
        src="/about_img.jpg"
        alt="About Us"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl rounded-lg shadow-lg"
      />

      <p className="text-center text-xl max-w-3xl mb-6 mt-6 px-8 py-4 
             bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
             text-white rounded-lg shadow-lg h-[200px] w-full flex items-center justify-center">
  Connecting local businesses and professionals with their clients, making
  beauty & wellness experience effortless.
</p>




      
      {/* Section for Customers */}
      <h3 className="text-2xl font-semibold text-center mb-4">Glow Inside, Shine Outside</h3>
      <p className="text-center text-lg mb-4">Nuza for Customers</p>
      <FaArrowCircleDown className="text-purple-600 text-center  text-2xl animate-bounce mb-4" />

      {/* Image Carousel - Customers */}
      <div className="relative w-full max-w-md mx-auto mb-6">
      <div className="relative">
        <img
          src={images_customer[currentIndex]}
          alt={`Customer ${currentIndex + 1}`}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images_customer.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Tagline below the image */}
      <p className="text-center mt-4 text-base font-medium text-gray-800">
        {taglines_customer[currentIndex]}
      </p>
    </div>



      {/* Updated Professionals & Business Section */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
        className="w-full mt-10" // ⬅ Added top margin to create space after customer images
      >
        <h3 className="text-2xl font-semibold text-center mb-4">Become the Go-To Choice</h3>
        <p className="text-center text-lg mb-6 flex items-center justify-center"> 
          Nuza for Professionals <span className="mx-2 text-xl font-semibold">&</span> Business
          <IoIosArrowDown className="text-purple-600 text-2xl animate-bounce ml-2" />
        </p>
      </motion.div>

      
      

      {/* Image Carousel - Business */}
      <div className="relative w-full max-w-md mx-auto mb-6">
      <div className="relative">
        <img
          src={images_business[currentIndex]}
          alt={`Business ${currentIndex + 1}`}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images_business.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Tagline below the image */}
      <p className="text-center mt-4 text-base font-medium text-gray-800">
        {taglines_business[currentIndex]}
      </p>
    </div>


      
    {/*Revolutize section*/}
    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-6 px-4 rounded-lg shadow-lg w-full max-w-3xl mb-6">
    <h2 className="text-3xl font-bold">
      Join us, and let’s{" "}
      <motion.span
        ref={revRef}
        initial={{ scale: 1.8, opacity: 0 }}
        animate={revolutionControls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block font-extrabold text-white"
      >
        Revolutionize
      </motion.span>{" "}
      the Beauty & Wellness Industry
    </h2>
  </div>



      <h3 className="text-3xl font-bold mb-4">Be the first to experience Nuza</h3>
      <button
      className="flex items-center text-xl font-medium text-white bg-purple-600 mb-2 rounded p-2 pr-6 hover:bg-purple-700 transition-all"
      onClick={toggleBox}>
         Join the waitlist
          <FaArrowRightLong className="text-white text-2xl ml-2 animate-bounce-right" />
      </button>        
      {showBox && (
        <div className="bg-white text-purple-600 p-8 rounded-lg shadow-xl text-center w-full max-w-lg mx-auto border border-purple-300">
        
        <p className="text-lg mb-4">We’re almost there! Get notified when Nuza goes live.</p>
        <p className="text-lg mb-6">Share your email to stay updated.</p>
        <div className="flex flex-col sm:flex-row gap-4">
            <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-900 rounded-md border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition-all" onClick={handleSubmit}>
            Submit
            </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;