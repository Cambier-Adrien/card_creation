import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "../Images/background.jpg";
import { faPlus, faRemove } from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card";

export default function Main() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <div className="flex flex-col items-center gap-4 p-8">
        <h1 className="text-center text-white font-['Inter'] text-4xl font-semibold">
          Créez et personnalisés
          <span className="text-indigo-600"> vos cartes</span>
        </h1>
        <div className="flex gap-4">
          <button className="bg-indigo-600 flex items-center text-sm text-white px-6 py-3 rounded-xl font-['Inter']">
            <FontAwesomeIcon icon={faPlus} className="mr-2 text-xl" />
            Une carte
          </button>
          <button className="border-2 border-violet-600 flex items-center text-sm text-white px-4 py-2 rounded-xl font-['Inter']">
            <FontAwesomeIcon icon={faRemove} className="mr-2 text-xl" />
            Une carte
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8 w-full max-w-[66rem]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
