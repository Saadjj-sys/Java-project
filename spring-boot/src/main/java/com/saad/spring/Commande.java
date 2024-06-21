package com.haitm.spring;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Entity
public class Commande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCMD;
    private Date dateCMD;

    @ManyToOne
    private Client client;

    @OneToMany(mappedBy = "commande")
    private List<LigneCMD> lignesCMD;

    // Getters and Setters

    public Long getIdCMD() {
        return idCMD;
    }

    public void setIdCMD(Long idCMD) {
        this.idCMD = idCMD;
    }

    public Date getDateCMD() {
        return dateCMD;
    }

    public void setDateCMD(Date dateCMD) {
        this.dateCMD = dateCMD;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    /*public List<LigneCMD> getLignesCMD() {
        return lignesCMD;
    }

    public void setLignesCMD(List<LigneCMD> lignesCMD) {
        this.lignesCMD = lignesCMD;
    }*/
}
