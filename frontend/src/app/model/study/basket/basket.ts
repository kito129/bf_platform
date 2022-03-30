import {SelectionBspFilter} from "./filter";

export interface Basket{
  _id?: string
  created: number,
  lastUpdate: number,
  basket: {
    name: string
    description: string
    sport: string
    activeFilter: SelectionBspFilter[] | any[]
    playersFilter: string[],
    size: number
    relativeMarkets: string
    options:{
      tennis:{
        notDoubles: boolean,
        delay3SecOnly: boolean
        oddsLimit: number
      }
    }

  }
}

export interface BasketForm{
  id: string,
  name: string,
  description:string,
  sport: string,
  create: boolean,
  options:{
    tennis:{
      notDoubles: boolean,
      delay3SecOnly: boolean
      oddsLimit: number
    }
  }
  playersFilter: string[],
  relativeBasketId: string
  size: number
}
