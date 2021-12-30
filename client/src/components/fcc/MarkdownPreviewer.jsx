import React, { useEffect, useState } from "react";
import { variants } from "../../Constants";
import { motion } from "framer-motion";
import "./MarkdownPreviewer.css";
import { parse } from "marked";
import sanitizeHtml from 'sanitize-html';

export default function MarkdownPreviewer() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    setOutputText(sanitizeHtml(parse(inputText)));
  }, [inputText]);
  
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
        Enter markdown text to be converted:<br/>
        <small>(Output can be seen below input box.)</small>
      </motion.p>
      <div
        className="input-group mb-4"
        type="textarea"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      >
        <textarea id="editor" className="form-control input" aria-label="Markdown text entry area"/>
      </div>
      <div
        id="preview"
        className="col p-3 my-auto text-left"
        variants={variants.containers}
        dangerouslySetInnerHTML={{__html:outputText}}
      >
      </div>
    </motion.div>
  );
}
