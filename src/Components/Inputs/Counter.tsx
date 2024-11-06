import { RoundedSlateButton } from "../Buttons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface CounterProps {
  count: number;
  add?: () => void;
  remove?: () => void;
  setCount: (value: number) => void;
}

export default function Counter({
  count,
  add,
  remove,
  setCount,
}: CounterProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue)) {
      const numericValue = Math.max(0, Math.min(99, Number(newValue)));
      setCount(numericValue);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <RoundedSlateButton icon={faMinus} onClick={remove} />
      <div>
        <input
          className="bg-inherit focus-within:outline-none text-white font-['Inter'] font-semibold text-xl w-8 text-center"
          value={count}
          onChange={handleInputChange}
        />
        <div className="border-b-4 border-indigo-600 rounded-full" />
      </div>
      <RoundedSlateButton icon={faPlus} onClick={add} />
    </div>
  );
}
