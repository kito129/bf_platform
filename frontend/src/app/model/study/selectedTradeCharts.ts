export  interface SelectedTradeCharts{
  id: number
  odds: number
  stake: number
  liability: number
  time: number
  isBackTrade: boolean,
  note: string
  bsp?: number
  bspTime?: number
  sideA?: boolean
}
