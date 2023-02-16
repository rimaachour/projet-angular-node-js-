import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private httpClient:HttpClient) { }
  downloadFile(){
    return this.httpClient.get("https://localhost:44303/api/Employee/Export",{observe:'response',responseType:'blob'})
  }
}
