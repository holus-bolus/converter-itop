import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from '../../services/currency-exchange.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rates: any; // Add this line to declare the 'rates' property
  currencies: string[] = [];

  constructor(private exchangeService: CurrencyExchangeService) { }

  ngOnInit(): void {
    this.exchangeService.getRates().subscribe(data => {
      this.rates = data.rates;
      this.currencies = Object.keys(this.rates);
    });
  }
}
