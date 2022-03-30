
export interface BasketFilter{
  _id?: string
  name: string
  min: number
  max: number
  and: boolean
  or: boolean
  type: FilterType
  active: boolean
  listElement: number[]
}

export enum FilterType{
  lessThan,
  lessOrEquals,
  moreThan ,
  moreOrEquals,
  between,
  outside,
  equals,
  notEquals
}

export class Filter implements BasketFilter{
  _id?: string
  name: string
  min: number
  max: number
  and: boolean
  or: boolean
  type: FilterType
  active: boolean
  listElement: number[]

  constructor(name: string,
              min: number,
              max: number,
              and: boolean,
              or: boolean,
              type: FilterType) {
    this.name = name
    this.type = type
    this.min = min
    this.max = max
    this.and = and
    this.or = or
    this.active=false
    this.listElement = []

  }

}

export class BasketFilters{

  filters: Filter[] = []

  constructor() {

    this.filters.push( new Filter('date',1514761200000 , new Date().getTime(), true, false, FilterType.between ))

    this.filters.push( new Filter('bspWinner',
      1.01,1000, true, false,  FilterType.moreThan))

    this.filters.push( new Filter('maxWinner', 1.01,1000, true, false,  FilterType.moreThan))

    this.filters.push( new Filter('minWinner', 1.01,1000, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('bspLoser', 1.01,1000, true, false,  FilterType.moreThan))

    this.filters.push( new Filter('maxLoser',1.01,1000, true, false,  FilterType.moreThan))

    this.filters.push( new Filter('minLoser',1.01,1000, true, false,  FilterType.moreThan))

    this.filters.push(  new Filter('bsp',1.01,1000, true, false,  FilterType.moreThan))

    this.filters.push(  new Filter('duration',1,480, true, false,  FilterType.moreThan))

    this.filters.push(  new Filter('oddsPrematch', 0,10000, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('oddsInplay', 0,10000, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('inplayUpdates', 0,10000, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('haveAdditionalInfo', 0,0, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('matchOdds', 0,0,      true, false, FilterType.moreThan))

    this.filters.push(  new Filter('setWinner', 0,0, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('set1Winner', 0,0, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('set2Winner', 0,0, true, false, FilterType.moreThan))

    this.filters.push(  new Filter('runners', 0,0, true, false, FilterType.moreThan))

    /*

this.filters.push(  new Filter('volumePrematch', 'marketInfo.marketInfo.volume.prematch','',
  0,1000000000, true, false, 0, FilterType.moreThan))

this.filters.push(  new Filter('volumeInplay', 'marketInfo.marketInfo.volume.inplay','',
  0,1000000000, true, false, 0, FilterType.moreThan))

 */

  }

  setFormArray(filters: Filter[]){
    this.filters = filters
  }

  getvalues(){
    return this.filters
  }


  setActive(index: number){
    const temp = this.filters[index]
    temp.active = true
    this.filters[index] =  temp

  }


  getFilter(index: number) {
    return this.filters[index]
  }

  resetFilter(key: string) {
  }

  reset(){
  }
}
