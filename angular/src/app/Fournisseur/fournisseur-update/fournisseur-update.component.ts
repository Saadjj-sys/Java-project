import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-fournisseur-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fournisseur-update.component.html',
  styleUrl: './fournisseur-update.component.css'
})


export class FournisseurUpdateComponent implements OnInit {
  
  idFour!: number;
  fournisseur: Fournisseur = new Fournisseur();

  constructor(private service: FournisseurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idFour = this.route.snapshot.params['idFour'];

    this.service.getFournisseurById(this.idFour).subscribe(data => {
      this.fournisseur = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.service.updateFournisseur(this.idFour, this.fournisseur).subscribe( data =>{
      this.goToFournisseurList();
    }
    , error => console.log(error));
  }

  goToFournisseurList(){
    this.router.navigate(['/fournisseur-list']);
  }
}

