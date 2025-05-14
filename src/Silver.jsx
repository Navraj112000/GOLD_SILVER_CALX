import React from "react";
import { useState } from "react";

const Silver = () => {
  let [sdensity, setsdensity] = useState(0);
  let [weighInAir, setweighInAir] = useState(0);
  let [weighInWater, setweighInWater] = useState(0);

  function SilverDensity() {
    console.log(weighInAir, weighInWater);
    setsdensity = (9.53288 * weighInAir) / (weighInAir - weighInWater);
    console.log(setsdensity);
    let soutput = document.getElementById("soutput");
    soutput.value = setsdensity;
  }

  return (
    <>
      <h1>Silver Calx</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="Weight in Air"
          onChange={(e) => setweighInAir(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight in water"
          onChange={(e) => setweighInWater(e.target.value)}
        />
      </div>
      <div className="card">
        <button onClick={() => SilverDensity()}>calculate</button>
      </div>
      <input value={sdensity} id="soutput" />
    </>
  );
};

export default Silver;
