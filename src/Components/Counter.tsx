import RoundedSlateButton from "./RoundedSlateButton";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface CounterProps {
  count: number;
  add?: () => void;
  remove?: () => void;
}

export default function Counter({ count, add, remove }: CounterProps) {
  return (
    <div className="flex gap-2 items-center">
      <RoundedSlateButton icon={faMinus} onClick={remove} />
      <div>
        <input
          className="bg-inherit focus-within:outline-none text-white font-['Inter'] font-semibold text-xl w-8 text-center"
          value={count}
        />
        <div className="border-b-4 border-indigo-600 rounded-full" />
      </div>
      <RoundedSlateButton icon={faPlus} onClick={add} />
    </div>
  );
}
