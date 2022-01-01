import React, { useState } from "react";
import { variants } from "../../Constants";
import { motion } from "framer-motion";

const mediaUrls = [
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        bank: 1,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        bank: 2,
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        bank: 2,
    },
]

const inputArray = [ "Q", "W", "E", "A", "S", "D", "Z", "X", "C" ]

export default function DrumMachine() {
    const [ bank, setBank ] = useState(1);
    const [ activeSource ] = useState(
        mediaUrls.filter(mp3 => {return bank === mp3.bank}).map((mp3, index) => {
            return {
                id: inputArray[index],
                audio: new Audio(mp3.url),
                playing: false
            }
        })
    );

    return (
        <motion.div 
            id="drum-machine"
            variants={variants.pages}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div 
                className="row row-cols-3"
                variants={variants.containers}
            >
                {activeSource.map(key => {
                    return <button key={key.id} className="btn drumpad my-1">{key.id}</button>
                })}
            </motion.div>  
        </motion.div>
    )
};