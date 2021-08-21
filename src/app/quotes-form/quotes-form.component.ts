import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Quotes } from '../quote';
import { Input } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
newQuote= new Quotes(0,"","","",new Date());
 quotesarr:Quotes[]=[{id:1,quotedetails:"ttttt",authour:"sssss",submitby:"yyyyy",addeddate: new Date(2020,12,12)}];

 @Output() addQuote=new EventEmitter<Quotes>();

 submitQuote(){
   this.addQuote.emit(this.newQuote);
 }

  constructor() { }

  ngOnInit(): void {
  }

}
