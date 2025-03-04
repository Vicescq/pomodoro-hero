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