import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LightButtonProps {
  value?: string | number;
  icon?: any;
  onClick?: () => void;
  disabled?: boolean;
}

export default function LightButton({
  value,
  icon,
  onClick,
  disabled,
}: LightButtonProps) {
  return (
    <button
      className={`${
        value ? "px-4 py-2" : "p-2"
      } transition-all ease-in-out border-2 border-violet-600 flex items-center text-sm text-white rounded-xl font-['Inter'] ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-600"
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
