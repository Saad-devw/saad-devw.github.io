import { Component, OnInit } from '@angular/core';
declare var require:any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(){
    const pdfUrl = './assets/cv/ESSADIKI-SAAD.pdf';
    const pdfName = 'ESSADIKI-SAAD-CV';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  viewPDF(){
    window.open('./assets/cv/ESSADIKI-SAAD.pdf');
  }

}
