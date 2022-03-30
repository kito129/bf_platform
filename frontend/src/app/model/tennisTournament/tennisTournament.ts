export interface TennisTournament {
  _id?: string
  created?: number
  lastUpdate?: number
  tournament?: {
    detail?: {
      name?: string
      openDate?: number
      surface?: string
      type?: {
        federation?: string
        point?: number
        isSlam?: boolean
        isChallenger?: boolean
      }
      qualifying?: number
      draw?: number
    }
    stats?: {
      final?: {
        winner?: {
          name?: string
          id?: number
        },
        runnerUp?: {
          name?: string
          id?: number
        },
        semifinalist?: [{
          name?: string
          id?: number
        }]
        participants?: [{
          name?: string
          id?: number
        }]
      }
    }
  }
}
