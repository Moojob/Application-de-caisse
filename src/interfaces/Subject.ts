import { IObserver } from "./Observer";


export interface ISubject {
 
    subscribe(obs: IObserver): void;
    unsubscribe(obs: IObserver): void;
    notifyObserver(): void;
}