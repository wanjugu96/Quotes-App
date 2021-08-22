import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes} from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  disabled!:boolean
  constructor() { }

  @Input()
  quotess!: Quotes;
  //quotes=quotes
 @Output() isComplete=new EventEmitter<boolean>();
  
downvotes:number=0;
upvotes:number=0;

  upvote(){

this.upvotes=this.upvotes+1;
return this.upvotes;
  }

downvote(){
  this.downvotes=this.downvotes+1;
  return this.downvotes
}
downvotess:number=this.downvotes
deleteQuote(complete:boolean){
  this.isComplete.emit(complete);
}
  ngOnInit(): void {
  }

}
function quotesarr(quotesarr: any) {
  throw new Error('Function not implemented.');
}

