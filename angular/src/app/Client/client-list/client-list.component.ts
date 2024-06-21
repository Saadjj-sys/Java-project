import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { HttpRequest } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { ClientDetailsComponent } from '../client-details/client-details.component';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [NgFor, ClientDetailsComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {

  clients!: Client[];

  constructor(private service: ClientService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.service.getClientsList().subscribe(data => {
      this.clients = data;
    });
  }

  deleteClient(idClient: number){
    this.service.deleteClient(idClient).subscribe( data => {
      console.log(data);
      this.getClients();
    })

  }

  clientDetails(idClient: number){
    this.router.navigate(['client-details', idClient]);
  }

  updateClient(idClient: number){
    this.router.navigate(['client-update', idClient])

  }

  goToAddClient(){
    this.router.navigate(['/client-new']);
  }
}
