import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit: El componente Home ha sido inicializado');
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Invitado';
    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter: La vista Home está a punto de cargarse');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter: La vista Home ha sido cargada completamente');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave: El usuario está a punto de dejar la vista Home');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave: El usuario ha dejado la vista Home');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: El componente Home está siendo destruido');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  mostrarQR() {
    this.router.navigate(['/qr']);
  }
}
