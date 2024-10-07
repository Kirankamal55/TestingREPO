import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
   
  // save data to local storage

  setItem(key:string, value:any):void {
    localStorage.setItem(key,JSON.stringify(value));
  }

  // Retrieve data from the local storage

  getItem(key:string):any {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data):null;
    }
  }

  // remove item from local storage

  removeItem(key:string):void {
    localStorage.removeItem(key);
  }

  // clear all data from the storage

  clear() {
    localStorage.clear();
  }


}
