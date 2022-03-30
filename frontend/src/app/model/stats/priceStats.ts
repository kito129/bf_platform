import * as ss from 'simple-statistics'

export class PriceStats {
  seriesLength?: number
  open?: number
  close?: number
  min?: number
  max?: number
  mean?: number
  mode?: number
  median?: number
  variance?: number
  sampleVariance?: number
  standardDeviation?: number
  quartile?: {
    q1?: number
    q2?: number
    q3?: number
  }

  constructor(odds: [any]) {

    let value= odds.map( prices =>
      prices.ltp
    )

    this.seriesLength = value.length
    this.open = value[0]
    this.close = value[this.seriesLength-1]
    this.min = ss.min(value)
    this.max = ss.max(value)
    this.mean = ss.mean(value)
    this.mode = ss.mode(value)
    this.median = ss.median(value)
    this.variance = ss.variance(value)
    this.sampleVariance = ss.sampleVariance(value)
    this.standardDeviation = ss.standardDeviation(value)
    this.quartile = {
      q1:ss.quantile(value,0.25),
      q2:ss.quantile(value,0.5),
      q3:ss.quantile(value,0.75),
    }
  }
}
