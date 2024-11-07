import { faPencil, faPlus, faRemove } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../Components/Cards";
import { HeavyButton, LightButton } from "../Components/Buttons";
import { useState, useEffect, useContext } from "react";
import CreateCardModal from "../Modals/CreateCardModal";
import SelectModal from "../Modals/SelectModal";
import ModifyModal from "../Modals/ModifyModal";
import ModifyCardModal from "../Modals/ModifyCardModal";
import { ReloadContext } from "../Contexts/ReloadContext";
import AlertModal from "../Modals/AlertModal";
import { AddCardContext } from "../Contexts/AddCardContext";
import { RemoveCardContext } from "../Contexts/RemoveCardContext";
import { ModifyCardContext } from "../Contexts/ModifyCardContext";

export default function Main() {
  const [cards, setCards] = useState([]);
  const { reload, setReload } = useContext(ReloadContext);
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [cardToModify, setCardToModify] = useState<any>();
  const { addCard, setAddCard } = useContext(AddCardContext);
  const { removeCard, setRemoveCard } = useContext(RemoveCardContext);
  const { modifyCard, setModifyCard } = useContext(ModifyCardContext);

  useEffect(() => {
    fetch("http://192.168.1.118:8080/cards", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data._embedded.cards);
        setCards(data._embedded.cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  const toggleCardSelection = (id: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDeleteCards = async () => {
    try {
      for (const cardId of selected) {
        const response = await fetch(
          `http://192.168.1.118:8080/cards/${cardId}`,
          {
            method: "DELETE",
          }
        );
      }

      setSelected([]);
      setReload(!reload);
      toggleIsOpen("remove");
      console.log("Cartes supprimées avec succès !");
      setRemoveCard(true);
      setTimeout(() => {
        setRemoveCard(false);
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de la suppression des cartes", error);
    }
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

  const handleModifyCard = (card: any) => {
    setCardToModify(card);
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
              value="une carte"
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
              value="une carte"
              onClick={() => handleCloseCardSelection()}
              disabled={isOpen["createCard"] || isOpen["modify"]!}
            />
          </div>

          <div className="mt-8 mb-32 flex flex-wrap justify-center gap-8 w-full max-w-[66rem]">
            {cards.map((card: any) => {
              const cardId = card._links.card.href.split("/").pop();

              return (
                <Card
                  key={cardId}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  atk={card.attack}
                  def={card.defense}
                  canSelect={isOpen["remove"]}
                  isSelected={selected.includes(cardId)}
                  onSelect={() => toggleCardSelection(cardId)}
                  canModify={isOpen["modify"]}
                  onModify={() => handleModifyCard(card)}
                />
              );
            })}
          </div>
        </div>
      </main>
      <CreateCardModal
        isOpen={isOpen["createCard"] || false}
        onClose={() => toggleIsOpen("createCard")}
      />
      <ModifyCardModal
        isOpen={isOpen["modifyCard"] || false}
        onClose={() => toggleIsOpen("modifyCard")}
        data={cardToModify}
      />
      <SelectModal
        isOpen={isOpen["remove"] || false}
        onClose={() => handleCloseCardSelection()}
        nbr={selected.length}
        onDelete={() => handleDeleteCards()}
      />
      <ModifyModal
        isOpen={isOpen["modify"] || false}
        onClose={() => toggleIsOpen("modify")}
      />
      <AlertModal
        value="Carte(s) supprimée(s) avec succès !"
        isActive={removeCard || false}
      />
      <AlertModal
        value="Carte ajoutée avec succès !"
        isActive={addCard || false}
      />
      <AlertModal
        value="Carte modifiée avec succès !"
        isActive={modifyCard || false}
      />
    </>
  );
}
