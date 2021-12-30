import React, { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import { motion } from "framer-motion";
import { markdown } from "./markdown_sample.js";
import { parse } from "marked";
import { variants } from "../../Constants";
import "./MarkdownPreviewer.css";

export default function MarkdownPreviewer() {
  const [inputText, setInputText] = useState(markdown.text);
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    setOutputText(DOMPurify.sanitize(parse(inputText)));
  }, [inputText]);

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

  return (
    <motion.div
      variants={variants.pages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.p
        className="col p-3 my-auto text-center lead"
        variants={variants.containers}
      >
        Enter markdown text to be converted:
        <br />
        <small>(Output can be seen below input box.)</small>
      </motion.p>
      <div className="input-group mb-4" type="textarea">
        <textarea
          className="form-control input"
          id="editor"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          aria-label="Markdown text entry area"
        />
      </div>
      <div
        id="preview"
        className="col p-3 my-auto text-start"
        variants={variants.containers}
        dangerouslySetInnerHTML={{ __html: outputText }}
      ></div>
    </motion.div>
  );
}
