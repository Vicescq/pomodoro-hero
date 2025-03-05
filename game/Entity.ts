export class Entity{
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    private _level: number;
    public get level(): number {
        return this._level;
    }
    public set level(value: number) {
        this._level = value;
    }
    
    private _attributes: Attributes;
    public get attributes(): Attributes {
        return this._attributes;
    }
    public set attributes(value: Attributes) {
        this._attributes = value;
    }
    
    private _skills: Skill[];
    public get skills(): Skill[] {
        return this._skills;
    }
    public set skills(value: Skill[]) {
        this._skills = value;
    }
    
    private _equipment: Item[];
    public get equipment(): Item[] {
        return this._equipment;
    }
    public set equipment(value: Item[]) {
        this._equipment = value;
    }
    
    private _abilities: Ability[];
    public get abilities(): Ability[] {
        return this._abilities;
    }
    public set abilities(value: Ability[]) {
        this._abilities = value;
    }

    attack(entity: Entity){
        this.attributes.offense
        
        // Defense: 1st layer
        entity.attributes.evasion.rating 
        entity.attributes.evasion.rating 
    }
}