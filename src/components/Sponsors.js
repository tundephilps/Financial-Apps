import React from "react";
import slack from "../images/slack.png";
import express from "../images/express.png";
import discord from "../images/discord.png";

import yahoo from "../images/yahoo.png";
import apple from "../images/apple.png";
import bitcoin from "../images/bitcoin.png";

import gpay from "../images/gpay.png";
import vimeo from "../images/vimeo.png";

const Sponsors = () => {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl">
      <div class="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
        <div class="flex items-center justify-center">
          <img
            src={apple}
            alt="Todoist Logo"
            class="block object-contain h-15"
          />
        </div>
        <div class="flex items-center justify-center">
          <img src={slack} alt="Slack Logo" class="block object-contain h-15" />
        </div>
        <div class="flex items-center justify-center">
          <img
            src={yahoo}
            alt="Typeform Logo"
            class="block object-contain h-15"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src={discord}
            alt="Algolia Logo"
            class="block object-contain h-15"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src={express}
            alt="Postcss Logo"
            class="block object-contain h-15"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src={bitcoin}
            alt="TailwindCSS Logo"
            class="block object-contain h-15"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src={gpay}
            alt="Discord Logo"
            class="block object-contain h-15"
          />
        </div>
        <div class="flex items-center justify-center">
          <img src={vimeo} alt="Vimeo Logo" class="block object-contain h-15" />
        </div>
      </div>
      <p class="mt-16 text-base font-medium text-center text-gray-500">
        From startups to Fortune 500s, the world's best teams use our tool to
        power their internal apps.
        <a
          href="#"
          class="inline-flex items-center justify-center text-primary hover:text-primary-dark"
        >
          Our customers
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="inline w-3 h-3 ml-1"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </p>
    </section>
  );
};

export default Sponsors;
