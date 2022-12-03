import {TennisPoint} from '../point/tennisPoint';

export interface Note {
  _id?: string
  created: number
  lastUpdate: number
  note: {
    description: string
    type: string
    tournament: string
    tournamentId: string
    phase: string
    selection: {
      runnerA: {
        name: string
        id: number
        bsp: number
        odds: number
      }
      runnerB: {
        name: string
        id: number
        bsp: number
        odds: number
      }
      injuredId: number
    }
    tennisPoints: TennisPoint,
    detailType:{
      recall: boolean
      isInPlay: boolean
      isNotInPause: boolean
    },
    validation: {
      validationNote: string
      isValidated: boolean
      tennisPoints: TennisPoint
      detailValidation: {
        win: boolean
        lose: boolean
        retired: boolean
      }
    }
  }
}

