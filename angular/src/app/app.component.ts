import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { ClientListComponent } from './Client/client-list/client-list.component';
import { CreateClientComponent } from './Client/create-client/create-client.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientListComponent, CreateClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontsales';
}
