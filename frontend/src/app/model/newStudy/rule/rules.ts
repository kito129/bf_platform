export interface Rules{
  _id?: string
  created: number,
  lastUpdate: number,
  rule: {
    name: string
    rules: Rule[]
  }
}

export interface RuleInterface{
  name: string
  selection: {
    options: 'fixed' | 'dynamic'
    fixed: {
      fixedOptions: 'selections #'| 'selections Id' | 'selection Type',
      selectionN: number
      selectionId: number
      selectionType: 'winner' | 'loser' | 'favourite selection' | 'underdog selection'
    }
    dynamic:{
      dynamicOptions: 'bsp' | 'bspWinner'| 'bspLoser'
      range: {
        min: number
        max: number
      }
    }
  }
  conditions: Conditions[]
  options: 'OPEN' | 'CLOSE' | 'DECREASE MARGIN' | 'INCREASE MARGIN'
  bet: {
    options: 'place lay' | 'place back' | 'cashOut'
    place: {
      type: 'fixed price' | 'best price'
      fixedPriceValue: number
    }
    stake: {
      type: 'net stake' | 'fixed',
      fixed: number
      liability: number
      toWin: number
    }
    offset: {
      type: 'off' | 'offset' | 'offset green' | 'offset and stop' | 'offset green and stop'
      options: 'tick' | '%' | 'rR'
      value: number
      optionsStop: 'tick' | '%' | 'rR'
      valueStop: number
    }
  }
}

export class Rule implements RuleInterface{
  name: string
  selection: {
    options: 'fixed' | 'dynamic'
    fixed: {
      fixedOptions: 'selections #'| 'selections Id' | 'selection Type',
      selectionN: number
      selectionId: number
      selectionType: 'winner' | 'loser' | 'favourite selection' | 'underdog selection'
    }
    dynamic:{
      dynamicOptions: 'bsp' | 'bspWinner'| 'bspLoser'
      range: {
        min: number
        max: number
      }
    }
  }
  conditions: Conditions[]
  options: 'OPEN' | 'CLOSE' | 'DECREASE MARGIN' | 'INCREASE MARGIN'
  bet: {
    options: 'place lay' | 'place back' | 'cashOut'
    place: {
      type: 'fixed price' | 'best price'
      fixedPriceValue: number
    }
    stake: {
      type: 'net stake' | 'fixed',
      fixed: number
      liability: number
      toWin: number
    }
    offset: {
      type: 'off' |'offset' | 'offset green' | 'offset and stop' | 'offset green and stop'
      options: 'tick' | '%' | 'rR'
      value: number
      optionsStop: 'tick' | '%' | 'rR'
      valueStop: number
    }
  }

  constructor(name: string) {
    this.name = name
    this.selection = {
      options: 'fixed',
      fixed: {
        fixedOptions: 'selection Type',
        selectionN: 0,
        selectionId: 0,
        selectionType: 'favourite selection',
      },
      dynamic:{
        dynamicOptions: 'bsp',
        range: {
          min: 1.01,
          max: 1000
        }
      }
    }
    this.conditions = []
    this.options = 'OPEN'
    this.bet = {
      options: 'place back',
      place: {
        type:'fixed price',
        fixedPriceValue: 0,
      },
      stake: {
        type: 'net stake',
        fixed: 100,
        liability: 100,
        toWin: 0
      },
      offset: {
        type: 'offset',
        options: 'tick',
        value: 10,
        optionsStop: 'tick',
        valueStop: 10
      }
    }
  }

  addCondition(){
    this.conditions.push(new Condition())
  }

  removeCondition(index: number){
    this.conditions.pop()
  }
}

export interface Conditions{

  inPlay:{
    active: boolean
  }
  name: string
  min: number
  max: number
}

export class Condition implements Conditions {

  inPlay:{
    active: boolean
  }
  name: string
  min: number
  max: number

  constructor() {
    this.name = ''
    this.min = 0
    this.max = 0
  }

  setValue(name: string, min: number, max: number) {
    this.name = name
    this.min = min
    this.max = max
  }
}
