import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RawButtonProps {
  icon: any;
  onClick?: () => void;
}

export default function RawButton({ icon, onClick }: RawButtonProps) {
  return (
    <button
      onClick={onClick}
      className="transition-all ease-in-out flex items-center justify-center text-white rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800"
    >
      <FontAwesomeIcon icon={icon} className="h-4 w-4 p-2.5" />
    </button>
  );
}
