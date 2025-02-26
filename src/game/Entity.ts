class Entity{
    name: string;
    level: number;
    attributes: Attributes;
    skills: Skill[];
    equipment: Item[];
    abilities: Ability[];
}

export class Player extends Entity{
    ascension: number;
}

class Enemy extends Entity{

}

class RegularEnemy extends Enemy{

}

class MiniBoss extends Enemy{

}

class Boss extends Enemy{

}

class RaidBoss extends Boss{

}