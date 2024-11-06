import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModifyButtonProps {
  onClick?: () => void;
}
export default function ModifyButton({ onClick }: ModifyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-900 transition-all ease-in-out flex items-center justify-center text-white rounded-full"
    >
      <FontAwesomeIcon icon={faPencil} className="h-4 w-4 p-2.5" />
    </button>
  );
}
