import React, { useState } from "react";
import { QUOTES, variants } from "../../Constants";
import { motion } from "framer-motion";

export default function RandomQuote() {
  const randomIndex = () => Math.floor(Math.random() * QUOTES.length);
  const [qod, setQod] = useState(QUOTES[randomIndex()]);

  return (
    <>
      <motion.p
        className="col p-3 my-auto text-center lead"
        variants={variants.container}
      >
        "{qod.text}"<br />- {qod.author ? qod.author : "Unknown"}
      </motion.p>
      <div className="d-grid gap-2 d-md-flex pb-2 justify-content-center">
        <div>
          <motion.button
            variants={variants.buttons}
            initial="visible"
            animate="visible"
            whileHover="hoverTopButton"
            whileTap="tap"
            type="button"
            className="btn btn-info text-white btn-lg px-4 me-md-2 rounded-0 shadow"
            id="new-quote"
            onClick={() => setQod(QUOTES[randomIndex()])}
          >
            New Quote
          </motion.button>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <a
          id="tweet-quote"
          href={
            "https://twitter.com/intent/tweet?text=" +
            encodeURI('"' + qod.text + '"\n- ' + qod.author)
          }
          target="_blank"
          rel='noopener noreferrer'
        >
          <motion.button
            variants={variants.buttons}
            initial="visible"
            animate="visible"
            whileHover="hoverTopButton"
            whileTap="tap"
            type="button"
            className="btn btn-info text-white btn-lg px-4 me-md-2 rounded-0 shadow"
            id="tweet-quote"
            onClick={() => setQod(QUOTES[randomIndex()])}
          >
            Tweet
          </motion.button>
        </a>
      </div>
    </>
  );
}
