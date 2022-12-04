export interface BacktestInterface {
  _id?: string
  created: number
  updated: number
  backtest: {
    strategyId: string
    name: string
    comment: string
    type: string
    bank: number
    tradesIds: string[]
  }
}

export class Backtest implements BacktestInterface{
  _id: string
  created: number
  updated: number
  backtest: {
    strategyId: string
    name: string
    comment: string
    bank: number
    type: string
    tradesIds: string[]
  }

  constructor(object?: BacktestInterface) {
    if(object){
      const copy = JSON.parse(JSON.stringify(object))
      this._id = copy._id
      this.created = copy.created
      this.updated = copy.updated
      this.backtest = copy.backtest
    } else {
      const time = new Date().getTime()
      this.created = time
      this.updated = time
      this.backtest = {
        strategyId: Math.trunc(new Date().getTime() / 17).toString(),
        name: '',
        comment: '',
        bank: 1000,
        type: '',
        tradesIds: []
      }
    }
  }


}
