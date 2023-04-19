import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl">
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          All your{" "}
          <span class="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            Financial Apps
          </span>{" "}
          in one single place.
        </h1>
        <p class="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
          Hellonext is a feature voting software where you can allow your users
          to vote on features, publish roadmap, and complete your customer
          feedback loop.
        </p>
        <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <Link to="/Projects">
            {" "}
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 to-purple-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-blue-700"
            >
              Get Started
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
      </div>
      <div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div class="flex flex-col">
              <a href="#" class="mx-auto">
                <img
                  class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                />
              </a>

              <div class="text-center mt-6">
                <h1 class="text-gray-900 text-xl font-bold mb-1">
                  Tranter Jaskulski
                </h1>

                <div class="text-gray-700 font-light mb-2">
                  Founder & Specialist
                </div>

                <div
                  class="flex items-center justify-center opacity-50 hover:opacity-100
                            transition-opacity duration-300"
                >
                  <a
                    href="#"
                    class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                  >
                    <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                  >
                    <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                  >
                    <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div class="flex flex-col">
              <a href="#" class="mx-auto">
                <img
                  class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
                />
              </a>

              <div class="text-center mt-6">
                <h1 class="text-gray-900 text-xl font-bold mb-1">
                  Denice Jagna
                </h1>

                <div class="text-gray-700 font-light mb-2">
                  Tired & M. Specialist
                </div>

                <div
                  class="flex items-center justify-center opacity-50 hover:opacity-100
                            transition-opacity duration-300"
                >
                  <a
                    href="#"
                    class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                  >
                    <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                  >
                    <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                  >
                    <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div class="flex flex-col">
              <a href="#" class="mx-auto">
                <img
                  class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                />
              </a>

              <div class="text-center mt-6">
                <h1 class="text-gray-900 text-xl font-bold mb-1">
                  Kenji Milton
                </h1>

                <div class="text-gray-700 font-light mb-2">Team Memeber</div>

                <div
                  class="flex items-center justify-center opacity-50 hover:opacity-100
                            transition-opacity duration-300"
                >
                  <a
                    href="#"
                    class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                  >
                    <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                  >
                    <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                  >
                    <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div class="flex flex-col">
              <a href="#" class="mx-auto">
                <img
                  class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                />
              </a>

              <div class="text-center mt-6">
                <h1 class="text-gray-900 text-xl font-bold mb-1">
                  Doesn't matter
                </h1>

                <div class="text-gray-700 font-light mb-2">Will be fired</div>

                <div
                  class="flex items-center justify-center opacity-50 hover:opacity-100
                            transition-opacity duration-300"
                >
                  <a
                    href="#"
                    class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                  >
                    <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                  >
                    <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                  >
                    <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
