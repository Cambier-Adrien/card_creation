import { faCheck, faImage } from "@fortawesome/free-solid-svg-icons";
import { SelectButton, ModifyButton } from "../Buttons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  image: string;
  title: string;
  description: string;
  atk: number;
  def: number;
  isSelected?: boolean;
  canSelect?: boolean;
  canModify?: boolean;
  onSelect?: () => void;
  onModify?: () => void;
}

export default function Card({
  image,
  title,
  description,
  atk,
  def,
  isSelected,
  canSelect,
  canModify,
  onSelect,
  onModify,
}: CardProps) {
  const [isImageValid, setIsImageValid] = useState(false);

  useEffect(() => {
    if (!image) {
      setIsImageValid(false);
    } else {
      const img = new Image();
      img.src = image;
      img.onload = () => setIsImageValid(true);
      img.onerror = () => setIsImageValid(false);
    }
  }, [image]);

  return (
    <div
      className={`border-2 border-violet-600 shadow-2xl shadow-violet-600/50 overflow-hidden transition-all ease-in-out flex flex-col p-4 gap-2 min-h-80 w-56 rounded-2xl relative`}
    >
      {isImageValid ? (
        <img
          className="border border-transparent rounded-xl object-cover h-32"
          src={image}
        />
      ) : (
        <div className="border border-slate-800 rounded-xl object-cover h-32 relative bg-slate-900 flex items-center justify-center">
          <FontAwesomeIcon
            className="text-slate-600 h-12 w-12"
            icon={faImage}
          />
        </div>
      )}

      <h3 className="text-slate-100 font-['Inter'] text-xl font-semibold">
        {title}
      </h3>
      <div className="flex gap-2">
        <span className="text-xs font-medium font-['Inter'] bg-red-600 shadow-md shadow-red-600/50 text-white rounded-full px-4 py-1">
          ATQ : {atk}
        </span>
        <span className="text-xs font-medium font-['Inter'] bg-amber-600  shadow-md shadow-amber-600/50 text-white rounded-full px-4 py-1">
          DEF : {def}
        </span>
      </div>
      <p className="text-slate-100 font-['Inter'] text-sm">{description}</p>
      {canSelect && (
        <div className="top-0 left-0 absolute h-full w-full bg-black/50 backdrop-blur-[2px] flex items-end justify-center p-4">
          <SelectButton
            onClick={onSelect}
            icon={faCheck}
            isSelected={isSelected}
          />
        </div>
      )}
      {canModify && (
        <div className="top-0 left-0 absolute h-full w-full bg-black/50 backdrop-blur-[2px] flex items-end justify-center p-4">
          <ModifyButton onClick={onModify} />
        </div>
      )}
    </div>
  );
}
