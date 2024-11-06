import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import RawButton from "./RawButton";
import SelectButton from "./SelectButton";

interface CardProps {
  image: string;
  title: string;
  description: string;
  atk: number;
  def: number;
  isSelected?: boolean;
  canSelect?: boolean;
  onClick?: () => void;
}

export default function Card({
  image,
  title,
  description,
  atk,
  def,
  isSelected,
  canSelect,
  onClick,
}: CardProps) {
  return (
    <div
      className={`shadow-2xl shadow-transparent transition-all ease-in-out flex flex-col gap-2 p-4 min-h-80 w-56 bg-gradient-to-bl from-violet-200 to-teal-200 rounded-2xl relative`}
    >
      {canSelect && (
        <div className="absolute bottom-4">
          <SelectButton
            onClick={onClick}
            icon={faCheck}
            isSelected={isSelected}
          />
        </div>
      )}
      <img className="rounded-xl object-cover h-30" src={image} />
      <h3 className="text-slate-900 font-['Inter'] text-xl font-semibold">
        {title}
      </h3>
      <div className="flex gap-2">
        <span className="text-xs  font-['Inter'] bg-slate-900 text-white rounded-full px-4 py-1">
          ATQ : {atk}
        </span>
        <span className="text-xs  font-['Inter'] bg-slate-900 text-white rounded-full px-4 py-1">
          DEF : {def}
        </span>
      </div>
      <p className="text-slate-900 font-['Inter'] text-sm">{description}</p>
    </div>
  );
}
