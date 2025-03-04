import { Ability } from "./Ability";
import { Attributes } from "./Attributes";

class Encounter{
    private _player: Player | null;
    public get player(): Player | null {
        return this._player;
    }
    public set player(value: Player | null) {
        this._player = value;
    }
    
    enemies: Enemy[];
    zone: Zone;
    winCond: string[];
    rewards: {
        attr: Attributes;
        abilities: Ability[] | null;
        items: Item[] | null;
    };
    environment: Ability[] | null;
    
    private _prev: Encounter[] | null;
    public get prev(): Encounter[] | null {
        return this._prev;
    }
    public set prev(value: Encounter[] | null) {
        this._prev = value;
    }
    
    private _next: Encounter[] | null;
    public get next(): Encounter[] | null {
        return this._next;
    }
    public set next(value: Encounter[] | null) {
        this._next = value;
    }
    
    private _terminal: boolean;
    public get terminal(): boolean {
        return this._terminal;
    }
    public set terminal(value: boolean) {
        this._terminal = value;
    }

    isBeginning(): boolean{
        return (this.prev == null)
    }

    isFinal(): boolean{
        return this.terminal;
    }
}

