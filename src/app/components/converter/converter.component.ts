import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from '../../services/currency-exchange.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {
  fromValue: number = 1;
  toValue: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  rates: any;
  currencies: string[] = [];

  constructor(private exchangeService: CurrencyExchangeService) { }

  ngOnInit(): void {
    this.exchangeService.getRates().subscribe(data => {
      this.rates = data.rates;
      this.currencies = Object.keys(this.rates);
      this.convertFrom();
    });
  }

  handleFromCurrencyChange(event: any): void {
    this.fromCurrency = event.target.value;
    this.exchangeService.getRates().subscribe(data => {
      this.rates = data.rates;
      this.convertFrom();
    });
  }

  handleToCurrencyChange(event: any): void {
    this.toCurrency = event.target.value;
    this.exchangeService.getRates().subscribe(data => {
      this.rates = data.rates;
      this.convertFrom();
    });
  }


  handleFromValueChange(event: any): void {
    this.fromValue = Number(event.target.value);
    this.convertFrom();
  }

  handleToValueChange(event: any): void {
    this.toValue = Number(event.target.value);
    this.convertTo();
  }

  convertFrom(): void {
    if (!this.rates) {
      return;
    }

    const rate = this.rates[this.toCurrency] / this.rates[this.fromCurrency];
    this.toValue = parseFloat((this.fromValue * rate).toFixed(2));
  }

  convertTo(): void {
    if (!this.rates) {
      return;
    }

    const rate = this.rates[this.fromCurrency] / this.rates[this.toCurrency];
    this.fromValue = parseFloat((this.toValue * rate).toFixed(2));
  }
}
