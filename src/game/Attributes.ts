export class Attributes{
    health: number;
    stamina: number;
    mana: number;
    physical: Physical;
    ranged: Ranged;
    spell: Spell;
    armour: Armour;
    resistances: { [key: string]: Resistance };
    evasion: Evasion;
    recovery: Recovery;
    strength: number;
    intelligence: number;
    dexterity: number;
}



class Offense{
    dmg: number;
    critchance: number;
    accuracy: number;
}

class Physical extends Offense{
    strScale: number;
    stamCost: number;
    armourPen: number;
    
}

class Ranged extends Offense{
    dexScale: number;

}

class Spell extends Offense{

}





class Defense{
    rating: number;
}

class Armour extends Defense{
    block: number;
    spellBlock: number;
    energyShield: number;
}

class Resistance extends Defense{
    suppression: number;
}

class Evasion extends Defense{
    dodge: number;
    spellDodge: number;
}

class Recovery extends Defense{
    regen: number;
    leech: number;
}