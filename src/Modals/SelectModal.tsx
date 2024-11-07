import ReactDOM from "react-dom";
import { RawButton } from "../Components/Buttons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

interface SelectModalProps {
  nbr: number;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function SelectModal({
  nbr,
  isOpen,
  onClose,
  onDelete,
}: SelectModalProps) {
  const body = document.querySelector("body")!;

  return ReactDOM.createPortal(
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bottom-8 w-full flex justify-center fixed z-50`}
    >
      <div className="w-[30rem] px-8 p-4 rounded-xl bg-slate-950 border-2 border-violet-600 shadow-2xl shadow-violet-600/50">
        <div className="flex gap-2 justify-between items-center">
          <p className="text-white font-['Inter'] text-sm">
            <span className="text-indigo-600">{nbr}</span> éléments séléctionnés
          </p>
          <div className="flex gap-2">
            <RawButton icon={faRemove} onClick={onClose} />
            <RawButton icon={faTrashAlt} onClick={onDelete} />
          </div>
        </div>
      </div>
    </div>,
    body
  );
}
