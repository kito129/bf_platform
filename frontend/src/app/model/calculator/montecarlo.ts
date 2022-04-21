export interface TradePlSeries{
  name: string
  length: number
  series: {
    id: number
    pl: number
    risk: number
    stock: number
    dd: number
    ddPercent: number
  }[]
  result: {
    pl: number
    dd: {
      max: {
        dd: number
        percent: number
      },
      avg: {
        dd: number
        percent: number
      },
      stdv: {
        dd: number
        percent: number
      },
    },
    risk: {
      max: {
        dd: number
        percent: number
      },
      avg: {
        dd: number
        percent: number
      },
      stdv: {
        dd: number
        percent: number
      },
    }
  }
}

export interface MontecarloRecap{
  size: number
  cash: {
    max: number
    min: number
    stdv: number
    avg: number
  }
  percent: {
    max: number
    min: number
    stdv: number
    avg: number
  }
}
