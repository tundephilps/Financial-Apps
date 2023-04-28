import React from "react";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <section class="relative  bg-blueGray-50">
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://talerang.com/wp-content/uploads/2018/06/Ace-your-meetings.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">About Us.</h1>
                <p class="mt-4 text-lg text-white">
                  All Informations about our company products and FAQ....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-10 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Awarded Agency</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Free Revisions</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Verified Company</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  86K
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg
                    className="text-teal-900 w-7 h-7"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Downloads</p>
              <p className="text-gray-700">
                Three movie stars, Chloe, Lexa, and Jon, are filming a movie in
                the Amazon. They’re very famous and very high-maintenance
                effort.
              </p>
            </div>
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  1.3K
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg
                    className="text-teal-900 w-7 h-7"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Subscribers</p>
              <p className="text-gray-700">
                One day, after filming a scene deep in the rainforest, the three
                actors and their agents decide to head back to home base by
                foot.
              </p>
            </div>
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  52M
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg
                    className="text-teal-900 w-7 h-7"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Cookies</p>
              <p className="text-gray-700">
                Suddenly, they come to a large river. On the riverbank, they
                find a small rowboat, but it’s only big enough to hold two of
                them at one time.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  FAQ
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="70326c9b-4a0f-429b-9c76-792941e326d5"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Most</span>
                </span>{" "}
                of the Questions Our Customers ask that might solve your
                curiousity
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl sm:mx-auto">
            <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="hover:bg-gradient-to-r from-green-400 to-purple-500 rounded-md p-2">
                  <p className="mb-4 text-xl font-medium">
                    The quick, brown fox jumps over a lazy dog?
                  </p>
                  <p className="text-gray-700">
                    Space, the final frontier. These are the voyages of the
                    Starship Enterprise. Its five-year mission: to explore
                    strange new worlds.
                    <br />
                    <br />
                    Many say exploration is part of our destiny, but it’s
                    actually our duty to future generations.
                  </p>
                </div>
                <div className="hover:bg-gradient-to-r from-green-400 to-purple-500 rounded-md p-2">
                  <p className="mb-4 text-xl font-medium">
                    The first mate and his Skipper too will do?
                  </p>
                  <p className="text-gray-700">
                    Well, the way they make shows is, they make one show. That
                    show's called a pilot.
                    <br />
                    <br />
                    Then they show that show to the people who make shows, and
                    on the strength of that one show they decide if they're
                    going to make more shows. Some pilots get picked and become
                    television programs.Some don't, become nothing. She starred
                    in one of the ones that became nothing.
                  </p>
                </div>
                <div className="hover:bg-gradient-to-r from-green-400 to-purple-500 rounded-md p-2">
                  <p className="mb-4 text-xl font-medium">
                    Is the Space Pope reptilian!?
                  </p>
                  <p className="text-gray-700">
                    A flower in my garden, a mystery in my panties. Heart attack
                    never stopped old Big Bear. I didn't even know we were
                    calling him Big Bear.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="hover:bg-gradient-to-r from-green-400 to-purple-500 rounded-md p-2">
                  <p className="mb-4 text-xl font-medium">
                    How much money you got on you?
                  </p>
                  <p className="text-gray-700">
                    The first mate and his Skipper too will do their very best
                    to make the others comfortable in their tropic island nest.
                    <br />
                    <br />
                    Michael Knight a young loner on a crusade to champion the
                    cause of the innocent. The helpless. The powerless in a
                    world of criminals who operate above the law. Here he comes
                    Here comes Speed Racer. He's a demon on wheels.
                  </p>
                </div>
                <div className="hover:bg-gradient-to-r from-green-400 to-purple-500 rounded-md p-2">
                  <p className="mb-4 text-xl font-medium">
                    Galaxies Orion's sword globular star cluster?
                  </p>
                  <p className="text-gray-700">
                    A business big enough that it could be listed on the NASDAQ
                    goes belly up. Disappears!
                    <br />
                    <br />
                    It ceases to exist without me. No, you clearly don't know
                    who you're talking to, so let me clue you in.
                  </p>
                </div>
                <div className="hover:bg-gradient-to-r from-green-400 to-purple-500 rounded-md p-2">
                  <p className="mb-4 text-xl font-medium">
                    When has justice ever been as simple as a rule book?
                  </p>
                  <p className="text-gray-700">
                    This is not about revenge. This is about justice. A lot of
                    things can change in twelve years, Admiral. Well, that's
                    certainly good to know. About four years. I got tired of
                    hearing how young I looked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-3 bg-gradient-to-r from-green-400 to-purple-500 dark:text-gray-900">
          <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <h1 className="text-5xl font-bold leading-none">
                Stay in the loop
              </h1>
              <p className="text-lg">
                Doloribus consectetur quasi ipsa quo neque culpa blanditiis
                ducimus recusandae a veritatis optio cumque, in harum ad nam!
              </p>
            </div>
            <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                />
                <button
                  type="button"
                  className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default AboutUs;
