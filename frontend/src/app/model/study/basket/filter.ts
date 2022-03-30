export interface Filter{
  id: number
  name: string
  props: any
}

export class SelectionBspFilter implements Filter{
  id: number
  name: string
  props: {
    odds: {
      min: number
      max: number
      isEquals: boolean
    }
    marketsNumber: number
  }

  constructor(min: number, max: number) {
    this.id = Date.now()
    this.name = 'SELECTION BSP'
    this.props = {
      odds: {
        min: min,
        max: max,
        isEquals: false
      },
      marketsNumber: 0
    }
    this.props.odds.isEquals = this.checkEquals()
  }

  checkEquals(){
   return this.props.odds.min === this.props.odds.max;
  }
}

export class SelectionName implements Filter{
  id: number
  name: string
  props: {
    odds: {
      min: number
      max: number
      isEquals: boolean
    }
    marketsNumber: number
  }

  constructor(min: number, max: number) {
    this.id = Date.now()
    this.name = 'SELECTION BSP'
    this.props = {
      odds: {
        min: min,
        max: max,
        isEquals: false
      },
      marketsNumber: 0
    }
    this.props.odds.isEquals = this.checkEquals()
  }

  checkEquals(){
    return this.props.odds.min === this.props.odds.max;
  }
}
