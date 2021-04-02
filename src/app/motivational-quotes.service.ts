import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// todo akicha: move to a specific class
// todo akicha: make a place for interfaces
const getRandomElement = (arr: unknown[]) => {
  if (!arr || !arr.length) {
    return null;
  }

  const randomIndex = Math.round(Math.random() * arr.length - 1);

  return arr[randomIndex];
};

@Injectable({
  providedIn: 'root'
})
export class MotivationalQuotesService {

  motivationalQuotes: { text: string, author: string }[] = [];

  constructor(private http: HttpClient) { }

  getRandomMotivationalQuote(): Observable<{ text: string, author: string }> {
    if (!this.motivationalQuotes.length) {
      return this.getMotivationalQuotes().pipe(map(res => getRandomElement(res) as {text: string, author: string}));
    }

    return of(getRandomElement(this.motivationalQuotes) as {text: string, author: string});
  }

  // todo akicha: save only the random quote, discard all others
  getMotivationalQuotes(): Observable<{ text: string, author: string }[]> {
    const quotesObservable$ = this.http.get<{ text: string, author: string }[]>('https://type.fit/api/quotes');

    quotesObservable$.subscribe(res => {
      this.motivationalQuotes = res;
    });

    return quotesObservable$;
  }
}
