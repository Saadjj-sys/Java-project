import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {
  client: Client = new Client();
  constructor(private service: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  saveClient(){
    this.service.createClient(this.client).subscribe( data =>{
      console.log(data);
      this.goToClientList();
    },
    error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/client-list']);
  }
  
  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }
}