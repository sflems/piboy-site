import React, { useState } from "react";
import { variants } from "../../Constants";
import { motion } from "framer-motion";

export default function MarkdownPreviewer() {
  const [ inputText, setInputText ] = useState(null);

  return (
    <motion.div
      variants={variants.pages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.p
        className="col p-3 my-auto text-center lead"
        variants={variants.container}
      >
        Lead Text
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
            className="btn btn-info text-white btn-lg px-4 rounded-0 shadow"
            id="new-quote"
            onClick={() => null}
          >
            Preview
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
