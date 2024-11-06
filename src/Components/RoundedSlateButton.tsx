import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RoundedSlateButtonProps {
  icon: any;
  value?: string;
  onClick?: () => void;
}

export default function RoundedSlateButton({
  icon,
  value,
  onClick,
}: RoundedSlateButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        value && "px-4"
      } text-white bg-slate-900 border border-slate-800 h-fit w-fit rounded-full flex items-center gap-2 justify-center`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${value ? "py-2.5" : "p-2.5"} h-2 w-2`}
      />
      {value && <p className="font-['Inter'] text-sm">{value}</p>}
    </button>
  );
}
