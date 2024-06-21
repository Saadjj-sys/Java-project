import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-fournisseur-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fournisseur-details.component.html',
  styleUrl: './fournisseur-details.component.css'
})
export class FournisseurDetailsComponent {
  idFour!: number;
  fournisseur!: Fournisseur;

    constructor(private route: ActivatedRoute, private service: FournisseurService, private router: Router) { }
  
    ngOnInit(): void {
      this.idFour = this.route.snapshot.params['idFour'];
  
      this.fournisseur = new Fournisseur();
      this.service.getFournisseurById(this.idFour).subscribe( data => {
        this.fournisseur = data;
      });
    }
    goToFournisseurList(){
      this.router.navigate(['/fournisseur-list']);
    }
    goToFournisseurUpdate(idFour: number){
      this.router.navigate(['fournisseur-update', idFour])
    }
}
