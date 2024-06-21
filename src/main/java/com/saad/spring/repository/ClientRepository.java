package com.haitm.spring.repository;

import com.haitm.spring.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
	
}


