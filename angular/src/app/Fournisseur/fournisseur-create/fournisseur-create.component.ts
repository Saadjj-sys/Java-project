import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';


@Component({
  selector: 'app-fournisseur-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fournisseur-create.component.html',
  styleUrl: './fournisseur-create.component.css'
})

export class FournisseurCreateComponent {
  fournisseur: Fournisseur = new Fournisseur();
  constructor(private service: FournisseurService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  saveClient(){
    this.service.createFournisseur(this.fournisseur).subscribe( data =>{
      console.log(data);
      this.goToFournisseurList();
    },
    error => console.log(error));
  }

  goToFournisseurList(){
    this.router.navigate(['/fournisseur-list']);
  }
  
  onSubmit(){
    console.log(this.fournisseur);
    this.saveClient();
  }
}