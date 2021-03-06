import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectConsultProduct(){
    //this.router.navigate(['/detail', {id:itemId}]);
    this.router.navigate(['/consultar-producto']);
  }

  redirectBajoSuminis(){
    this.router.navigate(['/reportar-bajos-suministros-productos']);
  }
}
