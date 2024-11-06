import { faPencil, faPlus, faRemove } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../Components/Cards";
import { HeavyButton, LightButton } from "../Components/Buttons";
import { useState, useEffect } from "react";
import CustomizeCardModal from "../Modals/CustomizeCardModal";
import SelectModal from "../Modals/SelectModal";
import ModifyModal from "../Modals/ModifyModal";

export default function Main() {
  const [cards, setCards] = useState([]);

  fetch("http://192.168.1.118:8080/cards", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

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

  const handleModifyCard = () => {
    toggleIsOpen("modify");
    toggleIsOpen("modifyCard");
  };

  return (
    <>
      <main className="bg-slate-950 min-h-screen">
        <div className="flex flex-col items-center gap-4 p-8">
          <h1 className="text-center text-white font-['Inter'] text-4xl font-semibold">
            Créez et personnalisés
            <span className="text-indigo-600"> vos cartes</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <HeavyButton
              value="Une carte"
              icon={faPlus}
              onClick={() => toggleIsOpen("createCard")}
              disabled={isOpen["remove"] || isOpen["modify"]!}
            />
            <HeavyButton
              icon={faPencil}
              value="une carte"
              onClick={() => toggleIsOpen("modify")}
              disabled={isOpen["createCard"] || isOpen["remove"]!}
            />
            <LightButton
              icon={faRemove}
              value="Une carte"
              onClick={() => handleCloseCardSelection()}
              disabled={isOpen["createCard"] || isOpen["modify"]!}
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
              isSelected={selected.includes("2")}
              onSelect={() => toggleCardSelection("2")}
              canModify={isOpen["modify"]}
              onModify={() => handleModifyCard()}
            />
          </div>
        </div>
      </main>
      <CustomizeCardModal
        isOpen={isOpen["createCard"] || false}
        onClose={() => toggleIsOpen("createCard")}
        startTitle="Créez votre"
      />
      <CustomizeCardModal
        isOpen={isOpen["modifyCard"] || false}
        onClose={() => toggleIsOpen("modifyCard")}
        startTitle="Modifiez votre"
      />
      <SelectModal
        isOpen={isOpen["remove"] || false}
        onClose={() => handleCloseCardSelection()}
        nbr={selected.length}
      />
      <ModifyModal
        isOpen={isOpen["modify"] || false}
        onClose={() => toggleIsOpen("modify")}
      />
    </>
  );
}
