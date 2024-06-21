import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Client } from '../client';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-client-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-update.component.html',
  styleUrl: './client-update.component.css'
})

export class ClientUpdateComponent implements OnInit {
  
  idClient!: number;
  client: Client = new Client();

  constructor(private service: ClientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idClient = this.route.snapshot.params['idClient'];

    this.service.getClientById(this.idClient).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.service.updateClient(this.idClient, this.client).subscribe( data =>{
      this.goToClientList();
    }
    , error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/client-list']);
  }
}

