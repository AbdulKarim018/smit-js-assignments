import { FaArrowRotateLeft } from "react-icons/fa6";
import Button from "./Button";

export default function CounterButtonTray({ count, setCount }) {
  return (
    <div className="flex gap-4">
      <Button text="-5" onClick={() => setCount(count - 5)} />
      <Button text="-1" onClick={() => setCount(count - 1)} />
      <Button text={<FaArrowRotateLeft />} onClick={() => setCount(0)} />
      <Button text="+1" onClick={() => setCount(count + 1)} />
      <Button text="+5" onClick={() => setCount(count + 5)} />
    </div>
  );
}
