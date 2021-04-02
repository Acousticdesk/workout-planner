import { Component, OnInit } from '@angular/core';
import { MotivationalQuotesService } from '../motivational-quotes.service';

@Component({
  selector: 'app-motivational-quotes',
  templateUrl: './motivational-quotes.component.html',
  styleUrls: ['./motivational-quotes.component.scss']
})
export class MotivationalQuotesComponent implements OnInit {

  motivationalQuote: {text: string, author: string} | null = null;

  constructor(private motivationalQuotesService: MotivationalQuotesService) { }

  ngOnInit(): void {
    this.motivationalQuotesService.getRandomMotivationalQuote().subscribe(quote => {
      this.motivationalQuote = quote;
    });
  }
}
