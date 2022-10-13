export interface StrategyBetFiltersInterface{
  name: string
}

export class StrategyBetFilters implements StrategyBetFiltersInterface{
  name: string
  method: string // group, edit, delete

  constructor(name: string, min: number, max: number, bank: number, surface?: string, sex?: string) {
  }

  // di default
  // edit e delete fanno find uguale poi azione diversa, potrei fare un find che isola solo quelle trovate poi se vuoi fare edit o delete è opzionale
  find(){

  }

  // group non interessa niente fa come faccio su excel, raggruppa poi elimina tutti / options, selezione e back e per lay
  group(){

  }

  // edit cerca per options type side (se serve) point odds stake e liability (se lay), optionali e tutti in and, se presenti cerca altrimenti no
  // puoi solo editare stake type e options e side, odds e point sono fissi in questo caso
  edit(){

  }

  // edit cerca per options type side (se serve) point odds stake e liability (se lay), optionali e tutti in and, se presenti cerca altrimenti no
  // puoi solo editare stake type e options e side, odds e point sono fissi in questo caso
  add(){

  }

  // delete cerca per options type side point odds stake, optionali e tutti in and, se presenti cerca altrimenti no
  delete(){

  }
}
