import { Transaction } from "./Transaction"
import { Caisse } from "./Caisse"


const render = (Tr: Transaction, container: HTMLUListElement): void => {

    let li = document.createElement("li") 
    let h4 = document.createElement("h4") 
    let p = document.createElement("p") 
    h4.innerText = Tr.getType() === 'Debit' ? 'Debit' : 'Credit'
    h4.className = Tr.getType()
    li.className = Tr.getType()
    p.innerText = Tr.text()
    li.append(h4)
    li.append(p)
    container.append(li)
    let reset = 0;
    montant.valueAsNumber = reset;
    qui.value = "";
    raison.value = "";
}