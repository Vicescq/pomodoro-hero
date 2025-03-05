type Type = "Armour" | "Resistance" | "Evasion";
type AvoidanceType = "Block" | "Dodge" | "SpellDodge";
type MitigationType = "Suppression" | "EnergyShield" | "Regen" | "Leech";

class Defense{
    type: Type;
    rating: number;
    avoidance: {[key in AvoidanceType]: number};
    mitigation: {[key in MitigationType]: number};
}
