export interface LiveRunner {
  notInDb: boolean
  runnerId: number
  name: string
  side: string
  note: string
  color: {
    shirt: string
    pants: string
    cap: string
    shoes: string
  }[]
}


export interface LiveRow{
  id?: string
  valid: boolean
  isDouble: boolean
  a: LiveRunner[]
  b: LiveRunner[]
}



