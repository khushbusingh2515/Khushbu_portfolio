import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Data Analyst",
            "Full Stack Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
