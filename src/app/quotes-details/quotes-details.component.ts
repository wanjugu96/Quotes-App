import { Component, Input, OnInit } from '@angular/core';
import { Quotes, quotes } from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  constructor() { }

  quotez:Quotes[]=[{id:1,quotedetails:"ttttt",author:"sssss",submitby:"yyyyy",addeddate: new Date(2020,12,12)}];
  //quotes=quotes
  //quotes=quotes
  newQuote= new Quotes(0,"x","y","z",new Date());

  addnewQuote(quote:Quotes){
    let quoteLenghth=this.quotez.length;
    quote.id=quoteLenghth+1;
    quote.addeddate=new Date(quote.addeddate)
  this.quotez.push(quote)
  console.log(this.quotez)
  quote.author= quote.author
  quote.quotedetails= quote.quotedetails
  quote.submitby= quote.submitby
  }


  ngOnInit(): void {
  }

}
function quotesarr(quotesarr: any) {
  throw new Error('Function not implemented.');
}

