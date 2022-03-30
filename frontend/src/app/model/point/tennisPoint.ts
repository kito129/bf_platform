export interface TennisPoint{
  set1: {
    runnerA: number
    runnerB: number
  }
  set2: {
    runnerA: number
    runnerB: number
  }
  set3: {
    runnerA: number
    runnerB: number
  }
  set4: {
    runnerA: number
    runnerB: number
  }
  set5: {
    runnerA: number
    runnerB: number
  },
  currentGame: {
    runnerA: string
    runnerB: string
    server: string
  }
}
