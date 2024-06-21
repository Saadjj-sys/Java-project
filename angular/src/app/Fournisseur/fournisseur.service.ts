import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fournisseur } from './fournisseur'; 

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private baseURL = "http://localhost:8080/fournisseurs";

  constructor(private httpClient: HttpClient) { }
  
  getFournisseursList(): Observable<Fournisseur[]>{
    return this.httpClient.get<Fournisseur[]>(`${this.baseURL}`);
  }
  createFournisseur(fournisseur: Fournisseur): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fournisseur);
  }

  getFournisseurById(idFour: number): Observable<Fournisseur>{
    return this.httpClient.get<Fournisseur>(`${this.baseURL}/${idFour}`);
  }

  updateFournisseur(idFour: number, fournisseur: Fournisseur): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idFour}`, fournisseur);
  }
  deleteFournisseur(idFour: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idFour}`);
  }
}