export interface LowLayReport{
  count: number
  avgTradesNumber: {
    total: number
    back: number
    lay: number
  }
  oneTen: {
    count: number
    countPercent: number
    rr:{
      o116:{
        count:number
        percent:number
      }
      o123:{
        count:number
        percent:number
      }
      o139:{
        count:number
        percent:number
      }
      o159:{
        count:number
        percent:number
      }
      o186:{
        count:number
        percent:number
      }
      o226:{
        count:number
        percent:number
      }
      o284:{
        count:number
        percent:number
      }
    }
  }
}
