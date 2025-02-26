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
}



class Offense{
    dmg: number;
    critchance: number;
    accuracy: number;
}

class Physical extends Offense{

}

class Ranged extends Offense{

}

class Spell extends Offense{

}





class Defense{
    rawMitigation: number;
}

class Armour extends Defense{

}

class Resistance extends Defense{

}

class Evasion extends Defense{

}

class Recovery extends Defense{
    leech: number;
    regen: number;
}