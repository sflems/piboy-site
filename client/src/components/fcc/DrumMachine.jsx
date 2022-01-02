import React, { useEffect, useState } from "react";
import { variants } from "../../Constants";
import { motion } from "framer-motion";
import "./DrumMachine.css";

const mediaUrls = [
  [
    {
      name: "heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      name: "heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      name: "heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      name: "heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      name: "clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      name: "open-high-hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      name: "kick-n-hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      name: "kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      name: "closed-high-hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ],
  [
    {
      name: "chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      name: "chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      name: "chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      name: "zipp",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      name: "open-high-hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      name: "closed-high-hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      name: "punch-kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      name: "side-stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      name: "snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ],
];

const inputArray = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

export default function DrumMachine() {
  // FCC Test Suit CDN Script
  // useEffect(() => {
  //   const tests = document.createElement("script");
  //   tests.src =
  //     "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
  //   tests.async = true;
  //   tests.id = "test-suite";
  //   document.body.appendChild(tests);
  //   return () => {
  //     document.body.removeChild(tests);
  //   };
  // }, []);

  const [playing, setPlaying] = useState("");
  const [activeBank, setActiveBank] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", (event) =>
      handleKeyDown(event.key.toUpperCase())
    );
    return () => {
      document.removeEventListener(
        "keydown",
        console.log("Drumpad key events removed.")
      );
    };
  }, []);

  const handleKeyDown = (keyId) => {
    if (inputArray.indexOf(keyId) > -1) {
      document.getElementById(keyId).click();
    }
  };

  const handlePlay = (element) => {
    let audio = element.getElementsByTagName("audio")[0];
    audio.addEventListener("ended", () => setPlaying(""));
    setPlaying(element.dataset.name);
    audio.play();
  };

  return (
    <motion.div
      id="drum-machine"
      className="m-0 py-2"
      variants={variants.pages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="row m-0 mb-4" variants={variants.containers}>
        <div className="col-2 m-0"></div>
        <div className="col-8 m-0 p-1 display">{playing}</div>
        <div className="col-2 m-0"></div>
      </motion.div>
      <PadContainer activeBank={activeBank} handlePlay={handlePlay} />
      <motion.div className="row row-cols-3" variants={variants.containers}>
        <div className="my-2 col">
          <button className="drum-pad" onClick={() => setActiveBank(0)}>
            Bank 1
          </button>
        </div>
        <div className="my-2 col">
          <button className="drum-pad" onClick={() => setActiveBank(1)}>
            Bank 2
          </button>
        </div>
        <div className="m-auto col">
          <div className="col my-2 p-1 display text-center">
            Active Bank: {activeBank + 1}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const PadContainer = ({ activeBank, handlePlay }) => {
  const mediaStates = mediaUrls[activeBank].map((mp3, index) => {
    return {
      keyId: inputArray[index],
      name: mp3.name,
      url: mp3.url,
    };
  });

  return (
    <motion.div
      id="drumpad-container"
      className="row row-cols-3"
      variants={variants.containers}
    >
      {mediaStates.map((mp3) => {
        return (
          <div key={mp3.keyId} className="my-2 col">
            <button
              id={mp3.keyId}
              data-name={mp3.name}
              onClick={(event) => handlePlay(event.target)}
              className="drum-pad h5"
            >
              {mp3.keyId}
              <audio className="clip" id={mp3.keyId + "-audio"} src={mp3.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </button>
          </div>
        );
      })}
    </motion.div>
  );
};
