import React, { useState } from "react";
import { variants } from "../../Constants";
import { motion } from "framer-motion";
import "./MarkdownPreviewer.css";

export default function MarkdownPreviewer() {
  const [inputText, setInputText] = useState(null);
  const [ouput, setOutput] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputText);
    // Convert inputText to markdown here.

  };

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
        Enter markdown text to be converted:
      </motion.p>
      <div
        className="input-group mb-4"
        type="textarea"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      >
        <textarea id="editor" className="form-control input" aria-label="Markdown text entry area"/>
      </div>

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
            onClick={handleSubmit}
          >
            Preview
          </motion.button>
        </div>
      </div>
      <motion.pre
        id="preview"
        className="col p-3 my-auto text-left"
        variants={variants.container}
      >
        {inputText && inputText}
      </motion.pre>
    </motion.div>
  );
}
