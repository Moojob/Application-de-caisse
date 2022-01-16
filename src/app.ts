//Interception du formulaire
const form = document.querySelector(".formulaire-de-transaction") as HTMLFormElement;

//Interception des Inputs du formulaire
const type = document.querySelector("#type") as HTMLInputElement;
const qui = document.querySelector('#qui') as HTMLInputElement;
const montant = document.querySelector("#montant") as HTMLInputElement;
const raison = document.querySelector("#raison") as HTMLInputElement;
//Interception du ul
const ul = document.querySelector("ul")!;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    //Création d'élèments li
    const li = document.createElement("li")
    //Attribution de la classe débit ou crédit au li
    li.className = type.value;
    //Création d'élèments h4
    const h4 = document.createElement('h4');
    //h4 va contenir soit débit soit crédit
    h4.innerText = type.value;
    //Attribution de la classe débit ou crédit à h4
    h4.className = type.value;
    //Ajouter h4 au li
    li.append(h4)
    //Création d'élèments p
    const p = document.createElement('p');
    //p va contenir le texte de la logique suivante
    p.innerText = `${type.value === 'Débit' ? 'Retrait' : 'Dépot'} de ${montant.value}F par ${qui.value} suite à ${raison.value}`;
    //Ajouter p au li
    li.append(p);

    //Ajouter li au ul
    ul.append(li);

});