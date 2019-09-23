import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote [] = [
   new Quote (1,'Where their is love their is peace','_posted by Dennis karobia'),
   new Quote  (2, 'Love For All, Hatred For None','_posted by Maina karobia'),
    
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
