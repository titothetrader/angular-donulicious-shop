import { Component, OnInit } from '@angular/core';
import { DonutDetails } from 'src/app/interfaces/donut-details';
import { DonutAPIService } from 'src/app/services/donut-api.service';

@Component({
  selector: 'donut-menu',
  templateUrl: './donut-menu.component.html',
  styleUrls: ['./donut-menu.component.css'],
})
export class DonutMenuComponent implements OnInit {
  donutList: DonutDetails[] = [];

  constructor(private donutAPI: DonutAPIService) {}

  ngOnInit(): void {
    this.donutAPI.getAllDonuts().subscribe((response) => {
      this.donutList = response.results;
    });
  }
}
