export interface StrategyBetFiltersInterface{
  name: string
}

export class StrategyBetFilters implements StrategyBetFiltersInterface{
  name: string

  constructor(name: string, min: number, max: number, bank: number, surface?: string, sex?: string) {
  }
}
