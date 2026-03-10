## GitHub DevOps Foundation Lab

Production-Grade CI/CD with Versioned Docker Deployments


## Project Overview

This project demonstrates a production-style CI/CD pipeline built using:

- GitHub Actions

- Docker (Multi-Stage Build)

- GitHub Container Registry (GHCR)

- Version-based deployments

- Scheduled deployment verification

- Branch protection & Pull Request workflow enforcement

What began as a simple Node.js app evolved into a structured, production-thinking DevOps workflow.


## Workflow Architecture

```
Feature Branch
    ↓
Pull Request
    ↓
Branch Protection (PR required)
    ↓
Merge to Main
    ↓
CI Pipeline (build-test-scan-push)
    ↓
GHCR (latest + version tag)
    ↓
Scheduled Deployment Verification
    ↓
Container Health Check
```


## Branch Protection & PR Workflow

Main branch is protected with:

- ✅ Pull Request required before merge

- ✅ CI checks must pass before merge

- ❌ Direct pushes blocked


## Why This Matters

- Prevents broken code from reaching main

- Enforces team review discipline

- Aligns with real production Git workflows

This project simulates real-world DevOps collaboration standards.



## CI Pipeline

Triggered on:

- Push to main

- Version tags (v*)

Pipeline includes:

- Install dependencies

- Run tests

- Build Docker image

- Push to GHCR

- Tag images as:

    -  latest
 
    -  ${{ github.ref_name }} (e.g., v1.0.7)



## Version-Based Deployment Strategy

Instead of deploying latest, the verification workflow pulls explicit version tags:

```bash
ghcr.io/onyiglobal2025/github-devops-foundation-lab:v1.0.7
```


## Why Version Tags?

- Deterministic deployments

- Rollback capability

- Production traceability

- Prevents “latest drift” issues



## Scheduled Deployment Verification

A scheduled GitHub Actions workflow:

-   Pulls the tagged image

-   Runs the container

-   Executes health check (/healthz)

-   Validates deployment readiness

This simulates production deployment validation.


##  Project Evidence

### Branch Protection Enforced
![Branch Protection](docs/screenshots/branch-protection.png)

### CI Pipeline Passing
![CI Pipeline](docs/screenshots/ci-success.png)

### Versioned Images in GHCR
![GHCR Tags](docs/screenshots/ghcr-tags.png)

### Scheduled Deployment Verification Success
![Deployment Verification](docs/screenshots/deploy-success.png)


## Real Debugging Experience

During development, the following real-world issues were resolved:

-   Cannot find module './app' (multi-stage Docker copy issue)

-   Container exiting before health check

-   manifest unknown (tag mismatch)

-   CI/CD tag alignment issues

Each failure improved pipeline robustness and deployment reliability.



## What This Project Demonstrates

- Docker multi-stage production builds

- GitHub Actions CI/CD mastery

- GHCR image management

- Versioned artifact deployment

- Branch protection & PR discipline

- Production-grade debugging mindset



## Next Upgrade

- OIDC authentication

- Automated AWS deployment

- Environment promotion strategy

- Image signing
