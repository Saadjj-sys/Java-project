import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})

export class ClientDetailsComponent implements OnInit {
    idClient!: number
    client!: Client

    constructor(private route: ActivatedRoute, private service: ClientService, private router: Router) { }
  
    ngOnInit(): void {
      this.idClient = this.route.snapshot.params['idClient'];
  
      this.client = new Client();
      this.service.getClientById(this.idClient).subscribe( data => {
        this.client = data;
      });
    }
    goToClientList(){
      this.router.navigate(['/client-list']);
    }
  }