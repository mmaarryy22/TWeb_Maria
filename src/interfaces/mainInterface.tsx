
import RootStore from "../mst/stores/RootStore.store";
import { Instance } from "mobx-state-tree"
import {ContentModel} from '../mst/models/Content.model'

interface Laptopuri {
    producator_procesor:string
    model:string
    color:string
    memory:string
    // greutate:string
    garantie:string
}
export default Laptopuri;
