package com.haitm.spring;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class LigneCMD {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLigneCMD;
    private int quantite;

    @ManyToOne
    private Commande commande;

    @ManyToOne
    private Produit produit;

    // Getters and Setters

    public Long getIdLigneCMD() {
        return idLigneCMD;
    }

    public void setIdLigneCMD(Long idLigneCMD) {
        this.idLigneCMD = idLigneCMD;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public Commande getCommande() {
        return commande;
    }

    public void setCommande(Commande commande) {
        this.commande = commande;
    }

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }
}