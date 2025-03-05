class Offense{
    type: OffenseType;
    dmg: number;
    critchance: number;
    accuracy: number;
    cost: {[key in CostType]: number};
    scaling: {[key in ScalingType]: number};
    pen: {[key in PenType]: number};
    status: {[key in StatusType]: number};
}