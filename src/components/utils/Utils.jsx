import React from "react";
import "./utils.css";

const Utils = (props) => {
  //Sound on code
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();
  var dot = 1.2 / 15;
  var oscillator;

  const check = () => {
    var t = ctx.currentTime;
    oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 500;

    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);

    props.morseCode.split("").forEach((letter) => {
      switch (letter) {
        case ".":
          gainNode.gain.setValueAtTime(1, t);
          t += dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case "-":
          gainNode.gain.setValueAtTime(1, t);
          t += 3 * dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case " ":
          t += 7 * dot;
          break;
        default:
          t += 5 * dot;
      }
    });
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
  };
  const off = () => {
    oscillator.stop(); // Stop oscillator after 0 seconds
    oscillator.disconnect(); // Disconnect oscillator so it can be picked up by browser’s garbage collector
  };
  return (
    <div className="utils">
      {props.message && (
        <div className='btn'>
          <button id="sound"  onClick={check}>
            <i class="fas fa-play-circle"></i>
          </button>
          <button id="sound" onClick={off}>
            <i class="fas fa-pause-circle"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Utils;
