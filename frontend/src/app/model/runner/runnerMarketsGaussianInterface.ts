import {
  std, variance
} from 'mathjs'
import {MarketSelectionInfo} from '../market/marketSelectionInfo';

export interface RunnerMarketsGaussianInterface{
  value:{
    marketName: string
    openDate: number
    value: number
    odds: number
  }[]
  mean: number
  stDev: number
  length: number
  variance: number
}

export class RunnerMarketsGaussian{

  public marketsGaussian: RunnerMarketsGaussianInterface = {
    value:[{
      marketName: '',
      openDate: 0,
      value: 0,
      odds: 0
    }],
    mean: 0,
    stDev: 0,
    length: 0,
    variance: 0
  }

  constructor(marketInfo: MarketSelectionInfo[]) {

    const _bsp = marketInfo.map(x =>x.selectionWin ? x.winner.bsp : x.loser.bsp)

    this.marketsGaussian.value.pop()
    this.marketsGaussian.length = marketInfo.length
    this.marketsGaussian.mean = marketInfo.reduce((a, b) => a + (b.selectionWin ? b.winner.bsp : b.loser.bsp), 0) / marketInfo.length
    this.marketsGaussian.stDev = std(_bsp)
    this.marketsGaussian.variance = variance(... _bsp)


    this.marketsGaussian.value = marketInfo.map( x=>{
      const bsp = x.selectionWin ? x.winner.bsp : x.loser.bsp
      return{
        marketName: x.name,
        openDate: new Date(x.openDate).getTime(),
        value: +this.pdf(bsp, this.marketsGaussian.stDev,this.marketsGaussian.mean,this.marketsGaussian.variance).toFixed(4),
        odds: bsp
      }
    })

    this.marketsGaussian.value.sort((a,b)=>{
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return a.odds - b.odds;
    });

  }


  // tslint:disable-next-line:no-shadowed-variable
  private pdf = (x,sd,mean,variance) =>{
    const HALF_TWO_PI_LOG = -0.91893853320467274180;
    return Math.exp(HALF_TWO_PI_LOG - Math.log(sd) - Math.pow(x - mean, 2) / (2 * variance));
  };


}





