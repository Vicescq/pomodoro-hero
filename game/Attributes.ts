export class Attributes{
    // basic 4
    private _health: number;
    public get health(): number {
        return this._health;
    }
    public set health(value: number) {
        this._health = value;
    }
    
    private _stamina: number;
    public get stamina(): number {
        return this._stamina;
    }
    public set stamina(value: number) {
        this._stamina = value;
    }
    
    private _mana: number;
    public get mana(): number {
        return this._mana;
    }
    public set mana(value: number) {
        this._mana = value;
    }
    
    private _speed: number;
    public get speed(): number {
        return this._speed;
    }
    public set speed(value: number) {
        this._speed = value;
    }

    // scaling 
    private _strength: number;
    public get strength(): number {
        return this._strength;
    }
    public set strength(value: number) {
        this._strength = value;
    }
    
    private _intelligence: number;
    public get intelligence(): number {
        return this._intelligence;
    }
    public set intelligence(value: number) {
        this._intelligence = value;
    }
    
    private _dexterity: number;
    public get dexterity(): number {
        return this._dexterity;
    }
    public set dexterity(value: number) {
        this._dexterity = value;
    }

    // attack and defend
    private _offense: Offense[];
    public get offense(): Offense[] {
        return this._offense;
    }
    public set offense(value: Offense[]) {
        this._offense = value;
    }

    private _defense: Defense[];
    public get defense(): Defense[] {
        return this._defense;
    }
    public set defense(value: Defense[]) {
        this._defense = value;
    }

    
}