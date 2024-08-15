import { useState } from "react";
import CounterButtonTray from "./components/CounterButtonTray";
import ColorPicker from "./components/ColorPicker";

export default function App() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#ffffff");

  return (
    <>
      <div
        className="w-full h-screen"
        style={{ backgroundColor, color: textColor }}
      >
        <main className="grid place-items-center h-full">
          <div className="text-center flex flex-col gap-4">
            <h3 className="text-2xl font-bold">You have clicked</h3>
            <h2 className="text-3xl font-bold font-mono">{count}</h2>
            <h3 className="text-2xl font-bold">times</h3>
            <CounterButtonTray count={count} setCount={setCount} />
            <ColorPicker
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              textColor={textColor}
              setTextColor={setTextColor}
            />
          </div>
        </main>
      </div>
    </>
  );
}
