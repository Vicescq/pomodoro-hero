class Defense{
    type: DefenseType;
    rating: number;
    avoidance: {[key in AvoidanceType]: number};
    mitigation: {[key in MitigationType]: number};
}
