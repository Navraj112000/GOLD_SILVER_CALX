import React, { useState } from "react";

const Gold = () => {
  let [density, setdensity] = useState(0);
  let [weighInAir, setweighInAir] = useState(0);
  let [weighInWater, setweighInWater] = useState(0);

  function GoldDensity() {
    console.log(weighInAir, weighInWater);
    setdensity = (5.17598 * weighInAir) / (weighInAir - weighInWater);
    console.log(setdensity);
    let output = document.getElementById("output");
    output.value = setdensity;
  }

  return (
    <>
      <h1>Gold Calx</h1>
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
        <button onClick={() => GoldDensity()}>calculate</button>
      </div>
      <input value={density} id="output" />
    </>
  );
};

export default Gold;
