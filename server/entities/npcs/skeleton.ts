import { Npcs } from '../../Enums.ts'
import NpcBase from './npcBase.ts'
import Coffee from '../items/coffee.ts'
import BronzeDagger from '../items/bronzeDagger.ts'
import BronzeSword from '../items/bronzeDagger.ts'
import IronHelm from '../items/ironHelm.ts'
import BronzeArmour from "../items/bronzeArmour.ts"

export default class Skeleton extends NpcBase {
    constructor() {
        super(Npcs.Skeleton, true, 'skeleton', 0, 0, 0, 20, 10000, 0.35, 6, 36, null, [new IronHelm(0.1),new BronzeDagger(0.6),new BronzeSword(0.6),new BronzeArmour(0.6),new Coffee(0.4)], null)
    }
}