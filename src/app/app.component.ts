import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cardápio', url: '/cardapio', icon: 'fast-food-outline' },
    { title: 'Categorias', url: '/folder/Inbox', icon: 'list-circle-outline' },
    { title: 'Pedidos', url: '/folder/Outbox', icon: 'list-outline' },
    { title: 'Horário de funcionamento', url: '/business-hours', icon: 'information-cicle-outline' },
    { title: 'Restaurante', url: '/folder/Favorites', icon: 'information-circle-outline' },
    { title: 'Entrega', url: '/folder/Archived', icon: 'bicycle-outline' },

  ];
}
