export class Attributes{
    // basic trio
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

    // offense
    private _physical: Physical;
    public get physical(): Physical {
        return this._physical;
    }
    public set physical(value: Physical) {
        this._physical = value;
    }
    
    private _ranged: Ranged;
    public get ranged(): Ranged {
        return this._ranged;
    }
    public set ranged(value: Ranged) {
        this._ranged = value;
    }
    
    private _spell: Spell;
    public get spell(): Spell {
        return this._spell;
    }
    public set spell(value: Spell) {
        this._spell = value;
    }

    // defense
    private _armour: Armour;
    public get armour(): Armour {
        return this._armour;
    }
    public set armour(value: Armour) {
        this._armour = value;
    }
    
    private _resistances: { [key: string]: Resistance; };
    public get resistances(): { [key: string]: Resistance; } {
        return this._resistances;
    }
    public set resistances(value: { [key: string]: Resistance; }) {
        this._resistances = value;
    }
    
    private _evasion: Evasion;
    public get evasion(): Evasion {
        return this._evasion;
    }
    public set evasion(value: Evasion) {
        this._evasion = value;
    }
    
    private _recovery: Recovery;
    public get recovery(): Recovery {
        return this._recovery;
    }
    public set recovery(value: Recovery) {
        this._recovery = value;
    }
}