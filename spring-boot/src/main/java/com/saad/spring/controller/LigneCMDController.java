package com.haitm.spring.controller;

import com.haitm.spring.LigneCMD;
import com.haitm.spring.service.LigneCMDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lignescmd")
public class LigneCMDController {

    @Autowired
    private LigneCMDService ligneCMDService;

    @GetMapping
    public List<LigneCMD> getAllLignesCMD() {
        return ligneCMDService.getAllLignesCMD();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LigneCMD> getLigneCMDById(@PathVariable Long id) {
        Optional<LigneCMD> ligneCMD = ligneCMDService.getLigneCMDById(id);
        if (ligneCMD.isPresent()) {
            return ResponseEntity.ok(ligneCMD.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public LigneCMD createLigneCMD(@RequestBody LigneCMD ligneCMD) {
        return ligneCMDService.saveLigneCMD(ligneCMD);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LigneCMD> updateLigneCMD(@PathVariable Long id, @RequestBody LigneCMD ligneCMDDetails) {
        Optional<LigneCMD> ligneCMD = ligneCMDService.getLigneCMDById(id);
        if (ligneCMD.isPresent()) {
            LigneCMD ligneCMDToUpdate = ligneCMD.get();
            ligneCMDToUpdate.setQuantite(ligneCMDDetails.getQuantite());
            ligneCMDToUpdate.setCommande(ligneCMDDetails.getCommande());
            ligneCMDToUpdate.setProduit(ligneCMDDetails.getProduit());
            return ResponseEntity.ok(ligneCMDService.saveLigneCMD(ligneCMDToUpdate));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLigneCMD(@PathVariable Long id) {
        ligneCMDService.deleteLigneCMD(id);
        return ResponseEntity.noContent().build();
    }
}