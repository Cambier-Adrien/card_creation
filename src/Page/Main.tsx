import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRemove } from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card";
import HeavyButton from "../Components/HeavyButton";
import LightButton from "../Components/LightButton";
import { useState } from "react";
import CreateCardModal from "../Modals/CreateCardModal";
import SelectModal from "../Modals/SelectModal";

export default function Main() {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCardSelection = (id: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const toggleIsOpen = (id: string) => {
    setIsOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCloseCardSelection = () => {
    setSelected([]);
    toggleIsOpen("remove");
  };

  return (
    <>
      <main className="bg-slate-950 min-h-screen">
        <div className="flex flex-col items-center gap-4 p-8">
          <h1 className="text-center text-white font-['Inter'] text-4xl font-semibold">
            Créez et personnalisés
            <span className="text-indigo-600"> vos cartes</span>
          </h1>
          <div className="flex gap-4">
            <HeavyButton
              value="Une carte"
              icon={faPlus}
              onClick={() => toggleIsOpen("createCard")}
              disabled={isOpen["remove"]}
            />
            <LightButton
              icon={faRemove}
              value="Une carte"
              onClick={() => handleCloseCardSelection()}
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 w-full max-w-[66rem]">
            <Card
              image="https://wallpapercat.com/w/full/4/6/1/1165730-3840x2160-desktop-4k-landscape-background.jpg"
              title="test"
              description="lorem ipsum"
              atk={18}
              def={20}
              canSelect={isOpen["remove"]}
              isSelected={selected.includes("1")}
              onClick={() => toggleCardSelection("1")}
            />
            <Card
              image="https://wallpapercat.com/w/full/4/6/1/1165730-3840x2160-desktop-4k-landscape-background.jpg"
              title="test"
              description="lorem ipsum"
              atk={18}
              def={20}
              canSelect={isOpen["remove"]}
              isSelected={selected.includes("2")}
              onClick={() => toggleCardSelection("2")}
            />
            <Card
              image="https://wallpapercat.com/w/full/4/6/1/1165730-3840x2160-desktop-4k-landscape-background.jpg"
              title="test"
              description="lorem ipsum"
              atk={18}
              def={20}
              canSelect={isOpen["remove"]}
              isSelected={selected.includes("3")}
              onClick={() => toggleCardSelection("3")}
            />
            <Card
              image="https://wallpapercat.com/w/full/4/6/1/1165730-3840x2160-desktop-4k-landscape-background.jpg"
              title="test"
              description="lorem ipsum"
              atk={18}
              def={20}
              canSelect={isOpen["remove"]}
              isSelected={selected.includes("4")}
              onClick={() => toggleCardSelection("4")}
            />
          </div>
        </div>
      </main>
      <CreateCardModal
        isOpen={isOpen["createCard"] || false}
        onClose={() => toggleIsOpen("createCard")}
      />
      <SelectModal
        isOpen={isOpen["remove"] || false}
        onClose={() => handleCloseCardSelection()}
        nbr={selected.length}
      />
    </>
  );
}
