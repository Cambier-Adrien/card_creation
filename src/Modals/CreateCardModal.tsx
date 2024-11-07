import ReactDOM from "react-dom";
import { ModalBackground } from "../Components/Backgrounds";
import { HeavyButton, LightButton } from "../Components/Buttons";
import { SlateInput, SlateTextArea, Counter } from "../Components/Inputs";
import { useState, useContext } from "react";
import { ReloadContext } from "../Contexts/ReloadContext";
import { AddCardContext } from "../Contexts/AddCardContext";

interface CreateCardModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function CreateCardModal({
  onClose,
  isOpen,
}: CreateCardModalProps) {
  const { reload, setReload } = useContext(ReloadContext);
  const body = document.querySelector("body")!;
  const [atk, setAtk] = useState(10);
  const [def, setDef] = useState(15);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const isFormValid = title && imageUrl && description;
  const { addCard, setAddCard } = useContext(AddCardContext);

  const handleAtkAdd = () => {
    setAtk(atk < 99 ? atk + 1 : 99);
  };

  const handleDefAdd = () => {
    setDef(def < 99 ? def + 1 : 99);
  };

  const handleAtkRemove = () => {
    setAtk(atk > 0 ? atk - 1 : 0);
  };
  const handleDefRemove = () => {
    setDef(def > 0 ? def - 1 : 0);
  };

  const resetForm = () => {
    setAtk(10);
    setDef(15);
    setTitle("");
    setImageUrl("");
    setDescription("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    const cardData = {
      title,
      image: imageUrl,
      description,
      attack: atk,
      defense: def,
    };

    try {
      const response = await fetch("http://192.168.1.118:8080/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        resetForm();
        onClose();
        console.log("Carte créée avec succès !");
        setReload(!reload);
        setAddCard(true);
        setTimeout(() => {
          setAddCard(false);
        }, 5000);
      } else {
        console.error("Erreur lors de la création de la carte");
      }
    } catch (error) {
      console.error("Erreur réseau ou serveur", error);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed inset-0 items-center justify-center z-50`}
    >
      <ModalBackground isOpen={isOpen} onClick={handleClose} />
      <div className="w-[30rem] p-8 rounded-xl bg-slate-950 border-2 border-violet-600 shadow-2xl shadow-violet-600/50 z-50 flex flex-col gap-6 items-center max-h-full overflow-y-scroll">
        <h1 className="text-center text-white font-['Inter'] text-4xl font-semibold">
          Créez votre <span className="text-indigo-600"> carte</span>
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-white font-['Inter'] text-sm">
            Entrez le titre de la carte :
          </p>
          <SlateInput
            placeholder="Nom"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-white font-['Inter'] text-sm">
            Entrez l'url de l'image :
          </p>
          <SlateInput
            placeholder="Lien"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-white font-['Inter'] text-sm border-b border-slate-700 pb-1">
              Attaque <span className="text-indigo-600">(ATQ)</span>
            </p>
            <Counter
              count={atk}
              add={handleAtkAdd}
              remove={handleAtkRemove}
              setCount={setAtk}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="text-white font-['Inter'] text-sm border-b border-slate-700 pb-1">
              Défense <span className="text-indigo-600">(DEF)</span>
            </p>
            <Counter
              count={def}
              add={handleDefAdd}
              remove={handleDefRemove}
              setCount={setDef}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-white font-['Inter'] text-sm">
            Entrez la description de la carte :
          </p>
          <SlateTextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-4 w-full justify-center">
          <LightButton value="Annuler" onClick={handleClose} />
          <HeavyButton
            value="Créer"
            onClick={handleSubmit}
            disabled={!isFormValid}
          />
        </div>
      </div>
    </div>,

    body
  );
}