package com.haitm.spring.service;

import com.haitm.spring.LigneCMD;
import com.haitm.spring.repository.LigneCMDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LigneCMDService {

    @Autowired
    private LigneCMDRepository ligneCMDRepository;

    public List<LigneCMD> getAllLignesCMD() {
        return ligneCMDRepository.findAll();
    }

    public Optional<LigneCMD> getLigneCMDById(Long id) {
        return ligneCMDRepository.findById(id);
    }

    public LigneCMD saveLigneCMD(LigneCMD ligneCMD) {
        return ligneCMDRepository.save(ligneCMD);
    }

    public void deleteLigneCMD(Long id) {
        ligneCMDRepository.deleteById(id);
    }
}