# lotp-today

Small LOTP shooting range for SmokedMeat's current direct capabilities.

This repo is intentionally narrower than `poutineville/gazillion-lotp`.
It only models the LOTP families SmokedMeat can plant directly today, using the exact root-level paths that the current LOTP deployer writes.

## Goals

- demonstrate today's real SmokedMeat LOTP coverage end to end
- keep one workflow per supported family
- use `pull_request_target` plus `paths:` so only the relevant workflow runs
- avoid subdirectory layouts that SmokedMeat cannot exploit yet

## Supported Families

- `bash` via `scripts/build.sh` and `scripts/verify.sh`
- `powershell` via `scripts/build.ps1`
- `python` via `scripts/build.py`
- `npm` via `package.json`
- `yarn` via `.yarnrc.yml` and `pwn.js`
- `pip` via `setup.py`
- `cargo` via `build.rs`
- `make` via `Makefile`

## Notes

Some workflows still depend on baseline files that SmokedMeat does not modify, such as `Cargo.toml` for Cargo. The path filters are tuned to the files SmokedMeat actually plants today, not the full public LOTP catalog.
