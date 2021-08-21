import { Component, OnInit } from '@angular/core';
import { quotes, Quotes } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes=quotes
  ngOnInit(): void {
  }


}
