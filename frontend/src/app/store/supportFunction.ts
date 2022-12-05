/*
*   UTILS FUNCTION FOR CRUD OPERATION AND STATE UPDATE
 */

// -- CRUD function to modify state by server response --
import {BasketFilters, Filter} from '../model/market/filter/basketFilter';
import {BacktestInterface} from "../model/backtest/backtestInterface";
import {Trade} from "../model/report/trade/trade";

export function addElement(all: any[], newElement: any ) {
  const copy = all.map(element => ({...element}));
  copy.push(newElement)
  return copy
}

export function addElements(all: any[], newElement: any[] ) {
  let copy = all.map(element => ({...element}));
  copy = copy.concat(newElement)
  return copy
}

export function updateElement(all: any[], update: any ) {
  return all.map((element) =>{
    if(element._id === update._id){
      return update
    }
    return element
  })
}

export function deleteElement(all: any[], deletedElement: any ) {
  return all.filter((element) => element._id !== deletedElement._id  )
}

export function removeElement(all: any[], elementId: string ) {
  return all.filter((element) => element._id !== elementId)
}

export function deleteElements(all: any[], deletedElement: any[] ) {
  return all.filter((element) => !deletedElement.includes(element._id))
}

// --  function to update isLoading State --
export function setterLoading(){
  return {
    isLoading: true,
    isLoadingSuccess: false,
    isLoadingError: false,
  }
}

export function setterLoadingSuccess(){
  return {
    isLoading: false,
    isLoadingSuccess: true,
    isLoadingError: false,
  }
}

export function setterLoadingFailure(){
  return {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: true,
  }
}

export function setterAllFalseLoading(){
  return {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  }
}

export function newBasketFilters(filters : Filter[]): Filter[]{

  const temp =  new BasketFilters()
  temp.setFormArray(filters)
  return temp.filters
}

export function resetBasketFilters(): Filter[]{
  return new BasketFilters().filters
}

export function reset(){
  return {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  }
}

// --  function to update study compare --
export function addStudyCompare(all: string[], newElement: string, first: boolean ) {
  const copy = all.map(element => element);
  if(first){
    copy.unshift(newElement)
  } else {
    copy.push(newElement)
  }
  return copy
}

export function addMultipleStudyCompare(all: string[], newElements: string[], ) {
  const copy = all.map(element => element);
  return copy.concat(newElements)
}

export function removeStudyCompare(all: string[], toRemove: string) {
  return all.filter( x => x !== toRemove)
}

export function addMarketRemoved(all: string[], newElement: string ) {
  if (all.filter( x=> x ===newElement).length === 0 ){
    const copy = all.map(element => (element));
    copy.push(newElement)
    return copy
  } else {
     return all.filter( x=> x !==newElement)
  }
}
export function backtestChangeMode(currentState: boolean){
  return !currentState
}


// --  BACKTEST --
export function backtestRemoveTradeFromTradeIds(backtest: BacktestInterface, tradeToRemove: Trade): BacktestInterface{
  console.log(backtest.backtest.tradesIds)
  const copy:BacktestInterface = JSON.parse(JSON.stringify(backtest))
  console.log(tradeToRemove)
  copy.backtest.tradesIds = copy.backtest.tradesIds.filter( x => x !==tradeToRemove._id)
  console.log(copy.backtest.tradesIds)
  return copy
}

export function backtestReAddRemovedTradeFromTradeIds(backtest: BacktestInterface, tradeToAdd: Trade): BacktestInterface{
  const copy:BacktestInterface = JSON.parse(JSON.stringify(backtest))
  copy.backtest.tradesIds.push(tradeToAdd._id)
  return copy
}


