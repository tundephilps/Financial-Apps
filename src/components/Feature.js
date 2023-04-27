import React from "react";
import brain from "../images/brain.png";

import growth from "../images/growth.png";

import target from "../images/target.png";
import calender from "../images/calender.png";
import user from "../images/user.png";

const Feature = () => {
  return (
    <>
      <section className="m-4 md:m-8 text-gray-700">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Built to empower every team</h2>
          <p className="text-gray-900">Libero minima optio qui</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <img src={brain} className="h-8 w-8  text-violet-400 " />
            <h3 className="my-3 text-3xl font-semibold">Logic</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img src={user} className="h-8 w-8  text-violet-400 " />
            <h3 className="my-3 text-3xl font-semibold">Pocket Friendly</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img src={target} className="h-8 w-8  text-violet-400 " />
            <h3 className="my-3 text-3xl font-semibold">Target Reach</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img src={calender} className="h-8 w-8  text-violet-400 " />
            <h3 className="my-3 text-3xl font-semibold">Planning</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Power</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img src={growth} className="h-8 w-8  text-violet-400 " />
            <h3 className="my-3 text-3xl font-semibold">Growth</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
