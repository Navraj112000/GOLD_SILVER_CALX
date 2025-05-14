import "./App.css";

import Tabs from "./Tabs";
import Gold from "./Gold";
import Silver from "./Silver";

const App = () => {
  const tabData = [
    { label: "Gold", content: <Gold /> },
    { label: "Silver", content: <Silver /> },
  ];

  return (
    <div className="max-w-md mx-auto mt-10">
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
