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