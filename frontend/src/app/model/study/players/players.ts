export interface Players{
  _id?: string
  created: number,
  lastUpdate: number,
  players: {
    name: string
    description: string
    playersList: number[]
    valid:{
      from: number
      to: number
    }
  }
}

export interface PlayersForm{
  _id: string
  name: string
  description: string
  create: boolean
  playersList: number[]
  valid:{
    from: number
    to: number
  }
}
