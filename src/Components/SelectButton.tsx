import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SelectButtonProps {
  icon: any;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function SelectButton({
  icon,
  onClick,
  isSelected,
}: SelectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        isSelected ? "bg-indigo-600" : "bg-slate-900"
      } transition-all ease-in-out flex items-center justify-center text-white rounded-full`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${isSelected ? "opacity-100" : "opacity-0"} h-4 w-4 p-2.5`}
      />
    </button>
  );
}
