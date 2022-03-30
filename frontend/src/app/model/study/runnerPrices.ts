export interface RunnerPrices{
  runnerId: number,
  prices: [
    {
      timestamp : number,
      ltp: number
    }
  ]
}
