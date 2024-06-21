import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest } from '@angular/common/http';
import { NgFor } from '@angular/common';

import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-fournisseur-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './fournisseur-list.component.html',
  styleUrl: './fournisseur-list.component.css'
})

export class FournisseurListComponent {

  fournisseurs!: Fournisseur[];

  constructor(private service: FournisseurService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.getFournisseurs();
  }

  private getFournisseurs(){
    this.service.getFournisseursList().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  deleteFournisseur(idFour: number){
    this.service.deleteFournisseur(idFour).subscribe( data => {
      console.log(data);
      this.getFournisseurs();
    })

  }

  fournisseurDetails(idFour: number){
    this.router.navigate(['fournisseur-details', idFour]);
  }

  updateFournisseur(idFour: number){
    this.router.navigate(['fournisseur-update', idFour])

  }

  goToAddFournisseur(){
    this.router.navigate(['/fournisseur-new']);
  }
    
}

