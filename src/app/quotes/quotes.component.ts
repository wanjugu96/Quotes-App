import { Component, Input, OnInit } from '@angular/core';
import {  Quotes } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes (1,'Charles','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12)),
    new Quotes (2,'Wendy','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2019,7,14))
    // new Quotes (3,'Mikey','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3))
    // new Quotes (4,'Beatrice','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2019,7,7)),
    // new Quotes (5,'Charles','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2019,7,17)),
    // new Quotes (6,'Alfred','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,7,15))
  ]
  ngOnInit(): void {
  }
  //quotez:Quotes[]=[{id:1,quotedetails:"ttttt",author:"sssss",submitby:"yyyyy",addeddate: new Date(2020,12,12)}];
  //quotes=quotes
  newQuote= new Quotes(0,"x","y","z",new Date());

  addnewQuote(quote:Quotes){
    let quoteLenghth=this.quotes.length;
    quote.id=quoteLenghth+1;
    quote.addeddate=new Date(quote.addeddate)
  this.quotes.push(quote)
  console.log(this.quotes)
  quote.author= quote.author
  quote.quotedetails= quote.quotedetails
  quote.submitby= quote.submitby
  }
index!:number
  quoteDelete(isComplete:boolean,index: number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
if(toDelete){
      this.quotes.splice(index,1)
}
    }
  }

}
