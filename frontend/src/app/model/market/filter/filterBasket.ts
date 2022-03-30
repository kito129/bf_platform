import {BasketFilter} from './basketFilter';

export interface FilterBasket{
  _id?: string
  created: number
  lastUpdate: number
  filterBasket: {
    name: string
    filter: BasketFilter[]
    market: string[]
    removed: string[]
    activeFilter: number
    marketSize: number
    removedSize: number
  }
}
