import ReactDOM from "react-dom";
import HeavyButton from "../Components/HeavyButton";
import LightButton from "../Components/LightButton";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import RawButton from "../Components/RawButton";

interface SelectModalProps {
  nbr: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function SelectModal({
  nbr,
  isOpen,
  onClose,
}: SelectModalProps) {
  const body = document.querySelector("body")!;

  return ReactDOM.createPortal(
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bottom-8 w-full flex justify-center fixed`}
    >
      <div className="w-[30rem] px-8 p-4 rounded-xl bg-slate-950 border-2 border-violet-600 shadow-2xl shadow-violet-600/50 z-50">
        <div className="flex gap-2 justify-between items-center">
          <p className="text-white font-['Inter'] text-sm">
            {nbr} éléments séléctionnés
          </p>
          <div className="flex gap-2">
            <RawButton icon={faRemove} onClick={onClose} />
            <RawButton icon={faTrashAlt} />
          </div>
        </div>
      </div>
    </div>,
    body
  );
}
