import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section>
      <div class="w-full min-h-[100vh] flex items-center justify-center">
        <div class="w-full min-h-[100vh] flex items-center justify-center">
          <div class="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 min-h-[100vh] bg-white flex items-center justify-center ">
            <div class="w-full px-12 min-h-[100vh]  ">
              <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">
                Sign Up
              </h2>
              <p class="text-center text-sm text-gray-600 mt-1">
                Already have an account?{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-700 hover:underline"
                  title="Sign In"
                >
                  Sign in here
                </a>
              </p>

              <form class="my-4 text-sm">
                <div class="flex flex-col my-4">
                  <label for="name" class="text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Enter your name"
                  />
                </div>

                <div class="flex flex-col my-2">
                  <label for="email" class="text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Enter your email"
                  />
                </div>

                <div class="flex flex-col my-2">
                  <label for="password" class="text-gray-700">
                    Password
                  </label>
                  <div class="relative flex items-center mt-1">
                    <input
                      name="password"
                      id="password"
                      class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <button
                      type="button"
                      class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
                    >
                      <svg
                        x-show="!show"
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        ></path>
                      </svg>

                      <svg
                        x-show="show"
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "none" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex flex-col my-2">
                  <label for="password_confirmation" class="text-gray-700">
                    Password Confirmation
                  </label>
                  <div class="relative flex items-center mt-1">
                    <input
                      name="password_confirmation"
                      id="password_confirmation"
                      class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                      placeholder="Enter your password again"
                      type="password"
                    />
                    <button
                      type="button"
                      class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
                    >
                      <svg
                        x-show="!show"
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        ></path>
                      </svg>

                      <svg
                        x-show="show"
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "none" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="remember_me"
                    id="remember_me"
                    class="mr-2 focus:ring-0 rounded"
                  />
                  <label for="remember_me" class="text-gray-700">
                    I accept the{" "}
                    <a
                      href="#"
                      class="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      class="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      privacy policy
                    </a>
                  </label>
                </div>

                <div class="my-2 flex items-center justify-end space-x-4">
                  <Link to="/Homepage">
                    <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </form>

              <div class="flex items-center justify-between">
                <div class="w-full h-[1px] bg-gray-300"></div>
                <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
                <div class="w-full h-[1px] bg-gray-300"></div>
              </div>

              <div class="text-sm">
                <a
                  href="/Homepage"
                  class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Google-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          {" "}
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            {" "}
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>

                  <span>Sign up with Google</span>
                </a>
                <a
                  href="/Homepage"
                  class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="url(#paint0_linear_87_7208)"
                      />{" "}
                      <path
                        d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                        fill="white"
                      />{" "}
                      <defs>
                        {" "}
                        <linearGradient
                          id="paint0_linear_87_7208"
                          x1="16"
                          y1="2"
                          x2="16"
                          y2="29.917"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#18ACFE" />{" "}
                          <stop offset="1" stop-color="#0163E0" />{" "}
                        </linearGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                  <span>Sign up with Facebook</span>
                </a>
                <a
                  href="#"
                  class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  <svg
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 382 382"
                    xmlSpace="preserve"
                  >
                    <path
                      style={{ fill: "#0077B7" }}
                      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                    />
                  </svg>
                  <span>Sign up with LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="hidden lg:flex lg:w-1/2 xl:w-2/3 2xl:w-3/4 h-[100vh]"
            style={{
              backgroundImage: `url('https://www.oberlo.com/media/1605011572-image25.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div class="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30">
              <div class="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  ></path>
                </svg>
                <h1 class="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-100 tracking-wider">
                  Optimum FinTech
                </h1>
              </div>
              <p class="text-gray-300 mt-2 px-16 text-center">
                Financial Applications to make Business transactions, easier to
                control...
              </p>
              <a
                href="/Homepage"
                class="mt-3 bg-gray-100 hover:bg-gray-200 px-6 py-1 rounded text-sm uppercase text-gray-900 transition duration-150"
                title="Learn More"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
