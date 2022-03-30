export interface Exposition{
  selectionN: number
  trade:{
    back: {
      odds: number,
      stake: number,
      ifWin: number,
    }[],
    lay: {
      odds: number,
      bank: number,
      liability: number,
      ifWin: number,
    }[]
  }
  exposition: {
    back: number
    lay: number
  }
}
