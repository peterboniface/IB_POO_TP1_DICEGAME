import Joueur from "./Joueur";
import Gobelet from "./Gobelet";


export default class Partie implements Joueur, Gobelet {
    public _nombreDeParties: number;
    public _nombreDeJoueurs: number;
}