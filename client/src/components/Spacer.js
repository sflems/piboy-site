import { useRef } from "react";

import "./Spacer.css";

const Spacer = (props) => {
  const waveRef0 = useRef(null);
  const waveRef1 = useRef(null);
  const waveRef2 = useRef(null);
  const waveRef3 = useRef(null);
  const waveRef4 = useRef(null);
  const waveRef5 = useRef(null);

  return (
    <div id={"spacer"+props.spacerId} className={"spacer row m-0 p-0 "+ (props.className ? props.className : "") + (props.flip ? " flip" : "")} >
      <svg
        className="waves m-0 p-0"
        viewBox="0 0 900 200"
        width="900px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
          <path ref={waveRef0}
            d="M0 66L25 66.2C50 66.3 100 66.7 150 64C200 61.3 250 55.7 300 58.7C350 61.7 400 73.3 450 75.3C500 77.3 550 69.7 600 69C650 68.3 700 74.7 750 76.8C800 79 850 77 875 76L900 75L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z"
            fill="#98cd67"
          />
          <path ref={waveRef2}
            d="M0 127L25 124C50 121 100 115 150 114.2C200 113.3 250 117.7 300 120.3C350 123 400 124 450 124.2C500 124.3 550 123.7 600 119.5C650 115.3 700 107.7 750 106.3C800 105 850 110 875 112.5L900 115L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z"
            fill="#00ac9f"
          />
          <path ref={waveRef4}
            d="M0 163L25 159.2C50 155.3 100 147.7 150 147C200 146.3 250 152.7 300 151.7C350 150.7 400 142.3 450 142.8C500 143.3 550 152.7 600 156.8C650 161 700 160 750 156.3C800 152.7 850 146.3 875 143.2L900 140L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z"
            fill="#277da1"
          />
          <path hidden ref={waveRef1}
            d="M0 57L25 59.5C50 62 100 67 150 72.3C200 77.7 250 83.3 300 88C350 92.7 400 96.3 450 97C500 97.7 550 95.3 600 92.3C650 89.3 700 85.7 750 83.2C800 80.7 850 79.3 875 78.7L900 78L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z"
            fill="#98cd67"
          />
          <path hidden ref={waveRef3}
            d="M0 98L25 97C50 96 100 94 150 92.7C200 91.3 250 90.7 300 95.7C350 100.7 400 111.3 450 113.8C500 116.3 550 110.7 600 111C650 111.3 700 117.7 750 123.2C800 128.7 850 133.3 875 135.7L900 138L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z"
            fill="#00ac9f"
          />
          <path hidden ref={waveRef5}
            d="M0 150L25 149.2C50 148.3 100 146.7 150 150.8C200 155 250 165 300 167.3C350 169.7 400 164.3 450 162.3C500 160.3 550 161.7 600 161.8C650 162 700 161 750 161.2C800 161.3 850 162.7 875 163.3L900 164L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z"
            fill="#277da1"
          />
      </svg>
    </div>
  );
};

export default Spacer;
