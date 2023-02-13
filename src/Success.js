// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

function Success() {
  return (
    <>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen flex items-center justify-center"
      >
        <div className="bg-[#1E1E1E] rounded-lg md: text-center w-[446px] fixed top-[50] shadow-xl text-white">
          <h1 className="md:text-3xl pb-4 ">
            Congratulations
          </h1>
          <div className="flex flex-col items-center justify-center">
            <svg
              width="108"
              height="108"
              viewBox="0 0 108 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_1_129)">
                <circle cx="54" cy="54" r="44" fill="#20AC5B" />
              </g>
              <circle
                cx="54"
                cy="54"
                r="49"
                stroke="white"
                stroke-opacity="0.15"
                stroke-width="10"
              />
              <path
                d="M47.84 59.2803C48.1333 59.5736 46.08 58.4003 39.04 51.3603L37.28 49.6003L32 55.7603L33.76 57.5203L48.72 70.7203L76 42.5603L69.84 37.2803L47.84 59.2803Z"
                fill="#D9D9D9"
              />
              <defs>
                <filter
                  id="filter0_i_1_129"
                  x="0"
                  y="-5"
                  width="108"
                  height="113"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-5" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1_129"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <p className="italic max-w-xs m-auto">
            Great move! You're one step closer to getting your hands on the
            product. Please check your mail for more information.
          </p>
          <Link to="/">
            <button className="text-xl rounded-md border-gray-500 border px-4 py-2 shadow-lg hover:shadow-none bg-[#121B27] my-3">
              Done
            </button>
          </Link>
        </div>
      </m.main>
    </>
  );
}

export default Success;
