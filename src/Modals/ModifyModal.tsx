import ReactDOM from "react-dom";
import { RawButton } from "../Components/Buttons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

interface ModifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModifyModal({ isOpen, onClose }: ModifyModalProps) {
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
            Séléctionnez la carte{" "}
            <span className="text-indigo-600">à modifier</span>
          </p>
          <div className="flex gap-2">
            <RawButton icon={faRemove} onClick={onClose} />
          </div>
        </div>
      </div>
    </div>,
    body
  );
}
