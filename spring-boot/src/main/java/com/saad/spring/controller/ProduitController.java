package com.haitm.spring.controller;

import com.haitm.spring.Produit;
import com.haitm.spring.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produits")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping
    @CrossOrigin
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Produit> getProduitById(@PathVariable Long id) {
        Optional<Produit> produit = produitService.getProduitById(id);
        if (produit.isPresent()) {
            return ResponseEntity.ok(produit.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    @CrossOrigin
    public Produit createProduit(@RequestBody Produit produit) {
        return produitService.saveProduit(produit);
    }

    @PutMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Produit> updateProduit(@PathVariable Long id, @RequestBody Produit produitDetails) {
        Optional<Produit> produit = produitService.getProduitById(id);
        if (produit.isPresent()) {
            Produit produitToUpdate = produit.get();
            produitToUpdate.setNomProd(produitDetails.getNomProd());
            produitToUpdate.setQuantiteStock(produitDetails.getQuantiteStock());
            produitToUpdate.setPrix(produitDetails.getPrix());
            produitToUpdate.setFournisseur(produitDetails.getFournisseur());
            return ResponseEntity.ok(produitService.saveProduit(produitToUpdate));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Void> deleteProduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
        return ResponseEntity.noContent().build();
    }
}
