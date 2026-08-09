# Lio Brand Architecture

## Decision

`ERPCloud` is the enterprise platform and services brand. `Lio` is the AI Agent ecosystem built by ERPCloud. `LioDev` is the developer-facing product within Lio.

```text
ERPCloud
├── ERPCloud Platform       ERP, deployment, runtime and services
├── ERPCloud Solutions      Vietnamese business solutions
└── Lio                     AI Agent ecosystem for digital operations
    ├── LioDev              Odoo/ERP coding agent and developer platform
    ├── Lio Assistant       Natural-language ERP operations assistant
    ├── Lio Skills          Versioned Odoo and business capabilities
    ├── Lio Runtime         Project-scoped runtime agent
    └── Lio Business        CEO and key-user workflows
```

## Domain strategy

| Domain | Role |
|---|---|
| `erpcloud.vn` | ERPCloud company, platform and implementation services |
| `erpcloud.asia` | Regional/international ERPCloud presence |
| `lio.vn` | Lio AI Agent ecosystem for Vietnam |
| `lio.asia` | Lio ecosystem for regional audiences |
| `liodev.dev` | Developer product site and technical documentation |

`LioDev` remains a product name and repository name; it is not the umbrella brand. Existing `liocode` is kept as a historical fork/reference while the new `lio` repository starts from the latest OpenCode upstream.

## Audience and message

- Business owner: “Lio giúp doanh nghiệp biến yêu cầu thành quy trình số có kiểm soát.”
- Key user: “Lio giải thích và cải tiến ERP bằng ngôn ngữ nghiệp vụ.”
- Developer: “LioDev xây Odoo nhanh hơn với context, skills và evidence.”
- ERPCloud buyer: “ERPCloud triển khai và chịu trách nhiệm đưa AI Agents vào vận hành an toàn.”

Primary line: **Lio hiểu doanh nghiệp. LioDev biến ý tưởng thành hệ thống.**

## Guardrails

- Lio must provide value independently; pages must not read as a disguised sales pitch.
- Production changes require scope, evidence and human approval.
- Model/provider names are implementation details, not the brand promise.
- Vietnamese is the primary language; technical detail uses progressive disclosure.
- Trademark clearance is required for `Lio`, `LioDev`, names and symbols before filing.

## Repository boundaries

- `packages/opencode`: upstream-compatible coding core.
- `packages/lio-agent`: ERP-aware Agent Core contracts.
- `packages/lio-skills`: versioned Odoo/business skills.
- `packages/lio-runtime`: typed capability boundary for sandbox/runtime integration.
- `apps/lio-website`: public Lio/LioDev website.
- `docs`: SRS, RBD, governance and community handbook.

The first migration slice only establishes identity, documentation and boundaries. It must not rewrite upstream runtime behavior or copy customer secrets.
