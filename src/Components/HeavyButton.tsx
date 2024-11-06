import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeavyButtonProps {
  value?: string | number;
  icon?: any;
  onClick?: () => void;
  disabled?: boolean;
}

export default function HeavyButton({
  value,
  icon,
  onClick,
  disabled,
}: HeavyButtonProps) {
  return (
    <button
      className={`px-4 py-2 transition-all ease-in-out border-2 border-indigo-600  bg-indigo-600 flex items-center text-sm text-white rounded-xl font-['Inter'] ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${value && "mr-2"} h-4 w-4 text-xl`}
      />
      {value}
    </button>
  );
}
