package com.haitm.spring.controller;

import com.haitm.spring.Fournisseur;
import com.haitm.spring.service.FournisseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fournisseurs")
public class FournisseurController {

    @Autowired
    private FournisseurService fournisseurService;

    @GetMapping
    @CrossOrigin
    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurService.getAllFournisseurs();
    }

    @GetMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Fournisseur> getFournisseurById(@PathVariable Long id) {
        Optional<Fournisseur> fournisseur = fournisseurService.getFournisseurById(id);
        if (fournisseur.isPresent()) {
            return ResponseEntity.ok(fournisseur.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    @CrossOrigin
    public Fournisseur createFournisseur(@RequestBody Fournisseur fournisseur) {
        return fournisseurService.saveFournisseur(fournisseur);
    }

    @PutMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Fournisseur> updateFournisseur(@PathVariable Long id, @RequestBody Fournisseur fournisseurDetails) {
        Optional<Fournisseur> fournisseur = fournisseurService.getFournisseurById(id);
        if (fournisseur.isPresent()) {
            Fournisseur fournisseurToUpdate = fournisseur.get();
            fournisseurToUpdate.setNom(fournisseurDetails.getNom());
            return ResponseEntity.ok(fournisseurService.saveFournisseur(fournisseurToUpdate));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<Void> deleteFournisseur(@PathVariable Long id) {
        fournisseurService.deleteFournisseur(id);
        return ResponseEntity.noContent().build();
    }
}