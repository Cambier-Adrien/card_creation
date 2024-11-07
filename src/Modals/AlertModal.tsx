import {
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

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
  const [show, setShow] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (isActive) {
    return ReactDOM.createPortal(
      <div
        className={`${
          show ? "opacity-100" : "opacity-0"
        } transition-all duration-500 flex bottom-8 pr-8 w-full justify-end fixed z-40`}
      >
        <div className="bg-slate-900 border-slate-800 border shadow-lg p-4 px-8 rounded-xl w-fit">
          <div className="flex gap-2 justify-center items-center">
            {isError ? (
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="h-4 w-4 text-red-500"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="h-4 w-4 text-green-500"
              />
            )}

            <p className="text-white font-['Inter'] text-sm">{value}</p>
          </div>
        </div>
      </div>,
      body
    );
  } else {
    return null;
  }
}
