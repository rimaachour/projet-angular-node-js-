import { Component } from '@angular/core';
import { response } from 'express';
import { DownloadFileService } from './download-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  constructor(private downloadFileService : DownloadFileService){}
    public downloadFile():void {
    this.downloadFileService.downloadFile()
   .subscribe(response =>{
    let fileName = response.headers.get('content-disposition')
    ?.split(';')[1].split('=')[1];
    let blob:Blob=response.body as Blob;
    let a = document.createElement('a');
    a.download = fileName || 'default-filename';
    a.href = window.URL.createObjectURL(blob);
    a.click();
   })
  }
}
