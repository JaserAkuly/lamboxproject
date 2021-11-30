import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, map } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.scss'],
})
export class WhenComponent implements OnInit {
  
  priceBtcUsd$: Observable<number>;
  priceEthUsd$: Observable<number>;
  lamboPrice = 100000;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const btcUsd$ = this.http.get('https://api.coinbase.com/v2/prices/BTC-USD/buy');
    this.priceBtcUsd$ = timer(0, 10000).pipe(
      concatMap(_ => btcUsd$),
      map((res: {data: {amount: number}}) => res.data.amount),
    );

    const ethUsd$ = this.http.get('https://api.coinbase.com/v2/prices/ETH-USD/buy');
    this.priceEthUsd$ = timer(0, 10000).pipe(
      concatMap(_ => ethUsd$),
      map((res: {data: {amount: number}}) => res.data.amount),
    );
  }

}