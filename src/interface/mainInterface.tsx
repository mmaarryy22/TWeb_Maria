import RootStore from "../mst/stores/RootStore.store";
import { Instance } from "mobx-state-tree"
import {ContentModel} from '../mst/models/Content.model'

interface Masini {
    color:string
    model:string
    nrDoors:number
    country:string
    year:number
}
export default Masini;