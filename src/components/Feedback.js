import react, { useState } from "react";

import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Feedback = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 ">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
          <div className="flex space-x-3">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={27}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows="3"
            placeholder="Message..."
            className="p-4 rounded-md resize-none text-gray-400 dark:bg-gray-100"
          ></textarea>
          <button
            type="button"
            className="py-4 my-8 font-semibold rounded-md bg-gradient-to-r from-green-400 to-purple-500"
          >
            Leave feedback
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-sm dark:text-gray-400"
        >
          Maybe later
        </a>
      </div>
    </div>
  );
};

export default Feedback;
