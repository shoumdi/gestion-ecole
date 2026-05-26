package com.api.app.feature.featurex.infrastructure.persistence.repository;

import com.api.app.feature.featurex.domain.repository.RepositoryX;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class RepositoryXImp implements RepositoryX {
    private final JpaRepository jpaRepository;
}
