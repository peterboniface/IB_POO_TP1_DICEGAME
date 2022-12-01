export default class De {
    protected _valeur: number 
        
    get valeur (): number {
        return this._valeur;
    }

    set valeur (nouvelleValeur: number) {
        this._valeur = nouvelleValeur;
    }
    lancer(): void {
        this._valeur = Math.floor(Math.random() * 5) + 1;
    } 
};
    
