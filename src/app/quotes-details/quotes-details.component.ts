import { Component, OnInit } from '@angular/core';
import { quotes } from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  quotes=quotes;
  //new quote=new Quote()
  constructor() { }

  ngOnInit(): void {
  }

}
