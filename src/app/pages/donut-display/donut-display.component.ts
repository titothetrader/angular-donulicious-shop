import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonutDetails } from 'src/app/interfaces/donut-details';
import { DonutAPIService } from 'src/app/services/donut-api.service';
import { ManageCartService } from 'src/app/services/manage-cart.service';

@Component({
  selector: 'donut-display',
  templateUrl: './donut-display.component.html',
  styleUrls: ['./donut-display.component.css'],
})
export class DonutDisplayComponent implements OnInit {
  donut: DonutDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private donutAPI: DonutAPIService,
    private manageCart: ManageCartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.donutAPI
        .getDonutDetails(Number(params.get('id')))
        .subscribe((data) => (this.donut = data));
    });
  }

  addToCart() {
    this.manageCart.addToCart(this.donut!);
    this.router.navigate(['cart']);
  }
}
