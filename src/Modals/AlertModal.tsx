import ReactDOM from "react-dom";

interface AlertModalProps {
  value: string;
  isActive: boolean;
}

export default function AlertModal({ value, isActive }: AlertModalProps) {
  const body = document.querySelector("body")!;
  return ReactDOM.createPortal(
    <div
      className={`${
        isActive ? "flex" : "hidden"
      } bottom-8 w-full flex justify-center fixed`}
    >
      <div className="w-[30rem] px-8 p-4 rounded-xl bg-slate-950 border-2 border-teal-600 shadow-2xl shadow-teal-600/50 z-50">
        <div className="flex gap-2 justify-center items-center">
          <p className="text-white font-['Inter'] text-sm">{value}</p>
        </div>
      </div>
    </div>,
    body
  );
}
