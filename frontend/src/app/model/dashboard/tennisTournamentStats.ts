export interface TennisTournamentStats{
  length: number,
  federationStats: {
    atp: number
    wta:number
    itf: number
  }
  type: {
    challenger: number
    slam: number
    250: number
    500: number
    1000: number
  }
}
