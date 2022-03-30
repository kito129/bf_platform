import { filterType } from './filterType';
import { sport } from '../../sport';
import {SelectionBspFilter} from "./filter";

export interface CreateBasketOption{
  createStudy: {
    filters: typeof filterType
    selectedFilter: number
    activeFilter: SelectionBspFilter[]
    sport: string[]
  }
}

export class CreateBasketOptionClass implements CreateBasketOption{
  createStudy: {
    filters: typeof filterType
    selectedFilter: number
    activeFilter: SelectionBspFilter[],
    sport: string[]
  };

  constructor() {
    this.createStudy = {
      filters: filterType,
      selectedFilter: null,
      activeFilter: [],
      sport: sport
    }
  }
}
