import  { useState } from "react";
import { Input } from "../atoms/Input";


const firstname ="Narson";
const lastname = "Yves"
export default function Welcome(/* { firstname, lastname } */) {
  // État pour suivre si le formulaire doit être affiché
  const [isEditing, setIsEditing] = useState(false);
  // États pour suivre les valeurs originales du nom
  const [originalFirstname, setOriginalFirstname] = useState(firstname);
  const [originalLastname, setOriginalLastname] = useState(lastname);

  const handleEditClick = () => {
    // Mettre à jour l'état pour afficher le formulaire
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    // Réinitialiser les valeurs du formulaire aux valeurs originales
    setOriginalFirstname(firstname);
    setOriginalLastname(lastname);
    // Mettre à jour l'état pour masquer le formulaire
    setIsEditing(false);
  };

  const handleSaveClick = (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut de soumission du formulaire

    // Implémentez la logique de sauvegarde ici, si nécessaire
    // Pour cet exemple, nous allons simplement masquer le formulaire
    setIsEditing(false);
  };

  return (
    <div className="header-edit">
      <h1>Welcome back</h1>
      <div className="editName">
        {/* Afficher le nom ou le formulaire en fonction de l'état */}
        {isEditing ? (
          <form onSubmit={handleSaveClick}>
            <div className="content-Input">
                  <Input   
              placeholder={originalFirstname}
              //value={originalFirstname}
              onChange={(value) => setOriginalFirstname(value)}
            />
            <Input
              placeholder={originalLastname}
              //value={originalLastname}
              onChange={(value) => setOriginalLastname(value)}
            />
            </div>
          
            <div>
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelClick}>
               Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="content-edit">
            <h1>
              {originalFirstname} {originalLastname} !
            </h1>
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
