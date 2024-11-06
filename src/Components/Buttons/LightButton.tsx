import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LightButtonProps {
  value?: string | number;
  icon?: any;
  onClick?: () => void;
}

export default function LightButton({
  value,
  icon,
  onClick,
}: LightButtonProps) {
  return (
    <button
      className={`px-4 py-2 hover:bg-violet-600 transition-all ease-in-out border-2 border-violet-600 flex items-center text-sm text-white rounded-xl font-['Inter']`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${value && "mr-2"} h-4 w-4 text-xl`}
      />
      {value}
    </button>
  );
}
