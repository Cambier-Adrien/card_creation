import ReactDOM from "react-dom";

interface AlertModalProps {
  value: string;
  isActive: boolean;
  isError?: boolean;
}

export default function AlertModal({
  value,
  isActive,
  isError,
}: AlertModalProps) {
  const body = document.querySelector("body")!;
  return ReactDOM.createPortal(
    <div
      className={`${
        isActive ? "flex" : "hidden"
      } bottom-8 w-full flex justify-center fixed z-40`}
    >
      <div
        className={`${
          isError
            ? "border-red-600 shadow-red-600/50"
            : "border-teal-600 shadow-teal-600/50"
        } shadow-2xl w-[30rem] px-8 p-4 rounded-xl bg-slate-950 border-2`}
      >
        <div className="flex gap-2 justify-center items-center">
          <p className="text-white font-['Inter'] text-sm">{value}</p>
        </div>
      </div>
    </div>,
    body
  );
}
