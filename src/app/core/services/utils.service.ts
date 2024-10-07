import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpClient:HttpClient) { }
  
  /**
   * Get the data using posted endpoint
   */
  processGetRequest(apiEndPoint: any) {
    return this.httpClient.get(apiEndPoint);
  }
}
