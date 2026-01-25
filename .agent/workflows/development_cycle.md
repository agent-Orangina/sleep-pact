---
description: Standard 5-Step QA & Development Cycle
---

# Standard 5-Step QA & Development Cycle

This workflow enforces a high-quality development pipeline for the `sleep-pact` project. It ensures that no code is merged without passing linting, type-checking, and proper review.

## 1. Discovery & Context (Plan)
**Goal**: Understand the task and current state.
- [ ] **Check Issues**: Read `ISSUES.md` and check GitHub Issues.
- [ ] **Pull Latest**: `git pull origin main` to ensure you are up to date.
- [ ] **Create Plan**: Create or update `implementation_plan.md` for significant changes.
- [ ] **User Approval**: If the changes are complex, ask for user confirm on the plan.

## 2. Implementation (Code)
**Goal**: Write high-quality, typed code.
- [ ] **Branching**:
    ```powershell
    git checkout -b feature/your-feature-name
    ```
- [ ] **Coding Standards**:
    - Strict TypeScript (no `any`).
    - Functional Components with Hooks.
    - TailwindCSS for styling.
- [ ] **Incremental Saves**: Save often.

## 3. Verification (Quality Gates) - **CRITICAL**
**Goal**: Ensure the code works and breaks nothing.
- [ ] **Lint Check**:
    ```powershell
    npm run lint
    ```
    *Must pass with 0 errors.*
- [ ] **Type Check (Build)**:
    ```powershell
    npm run build
    ```
    *Must pass to ensure no TS errors.*
- [ ] **Manual Verify**:
    - Spin up dev server: `npm run dev`
    - Check the specific feature in the browser.

## 4. Review & Merge (PR)
**Goal**: Peer review and integration.
- [ ] **Commit**:
    ```powershell
    git add .
    git commit -m "feat: your concise message"
    ```
- [ ] **Push**:
    ```powershell
    git push -u origin feature/your-feature-name
    ```
- [ ] **Create PR**:
    - Use the **GitHub MCP** to create a PR.
    - Title: Descriptive.
    - Body: Link to the issue it resolves.

## 5. Deployment & Documentation (Release)
**Goal**: Ship it and document it.
- [ ] **Deploy**:
    ```powershell
    firebase deploy
    ```
- [ ] **Update Documentation**:
    - Mark items as `[RESOLVED]` in `ISSUES.md`.
    - Update `task.md`.
    - Update `walkthrough.md`.
