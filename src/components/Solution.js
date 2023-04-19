import React from "react";
import profit from "../images/profit.png";
import invoicemaker from "../images/invoicemaker.png";
import { Link } from "react-router-dom";

const Solution = () => {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl">
      <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
            Clear overview for efficient tracking
          </h2>
          <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Handle your subscriptions and transactions efficiently with the
            clear overview in Dashboard. Features like the smart search option
            allow you to quickly find any data you’re looking for.
          </p>
          <Link to="/Projects">
            {" "}
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 to-purple-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-blue-700"
            >
              Learn More
              <svg
                aria-hidden="true"
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div class="w-full h-full bg-gray-200">
          <img src={profit} alt="" />
        </div>
      </div>
      <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div class="order-none md:order-2">
          <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
            Decide how you integrate Payments
          </h2>
          <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Love to code? Next to our ready-made and free plugins you can use
            our expansive yet simple API; decide how you integrate Payments and
            build advanced and reliable products yourself from scratch.
          </p>
          <Link to="/Projects">
            {" "}
            <button
              href="/Projects"
              type="button"
              class="text-white bg-gradient-to-r from-green-400 to-purple-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-blue-700"
            >
              Learn More
              <svg
                aria-hidden="true"
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div class="w-full h-full  bg-gray-200">
          <img src={invoicemaker} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
