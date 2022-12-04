export interface BacktestInterface {
  _id?: string
  created: number
  updated: number
  backtest: {
    name: string
    comment: string
    type: string
    tradesIds: string[]
  }
}

export class Backtest implements BacktestInterface{
  _id: string
  created: number
  updated: number
  backtest: {
    name: string
    comment: string
    type: string
    tradesIds: string[]
  }

  constructor() {
    const time = new Date().getTime()
    this.created = time
    this.updated = time
    this.backtest = {
      name: '',
      comment: '',
      type: '',
      tradesIds: []
    }
  }
}
