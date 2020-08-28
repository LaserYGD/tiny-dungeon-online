import { Npcs } from '../../Enums.ts'
import NpcBase from './npcBase.ts'
import Coffee from '../items/coffee.ts'
import BronzeDagger from '../items/bronzeDagger.ts'
import Coins from '../items/coins.ts'

export default class Spider extends NpcBase {
    constructor() {
        super(Npcs.Spider, true, 0, 0, 0, 1, 10000, 0.25, 6, 36, [new BronzeDagger(0.2),new Coffee(0.4), new Coins(0.8,2)])
    }
}