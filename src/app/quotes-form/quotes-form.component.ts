import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Quotes } from '../quote';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
newQuote= new Quotes(0,"","","",new Date());

 @Output() addQuote=new EventEmitter<Quotes>();
  quoteData!: NgForm;
 
 
 

 submitQuote(data: { author: string; quotedetails: string; submitby: string; addeddate: Date;quoteData:NgForm}){

this.newQuote.author=data.author;
this.newQuote.quotedetails=data.quotedetails;
this.newQuote.submitby=data.submitby;
this.newQuote.addeddate=data.addeddate;

this.addQuote.emit(this.newQuote);
   this.quoteData.value.formReset()
 
 }
  
resetForm:HTMLFormElement= <HTMLFormElement>document.getElementById('formid');
if(resetForm: any){
    resetForm.reset();}
//  clearform() {
//   this.quoteData.reset();
//   }
  constructor() { }

  ngOnInit(): void {
  }

}
  
  function quotesarr(quotesarr: any) {
    throw new Error('Function not implemented.');
  }
  

