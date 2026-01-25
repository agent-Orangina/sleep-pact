---
description: Sleep Pact Continuous Improvement Workflow (Sprint Cycle) - Simplified for Quick Iterations
---

# Sleep Pact Continuous Improvement Workflow

This workflow guides the agent and user through a structured "Sprint" cycle to improve the Sleep Pact application.

> **Note**: For comprehensive improvements with full lifecycle coverage, see [`full_development_lifecycle.md`](./full_development_lifecycle.md). This workflow is optimized for quick iterations and small changes.

## 1. Sprint Planning (Start of Task)
- **Goal**: Select work and plan the "sprint".
- **Steps**:
    1.  Read `ISSUES.md` and check GitHub Issues (if available) for high-priority items.
    2.  Update `task.md` with the selected items for this session.
    3.  Create or update `implementation_plan.md` if the task involves significant code changes.
    4.  **User Action**: Review and approve the plan.

## 2. Implementation (The "Code" Phase)
- **Goal**: Write code to solve the selected issues.
- **Steps**:
    1.  **Create Branch**:
        ```bash
        git checkout -b feat/your-feature-name
        ```
    2.  **Code**: Implement the changes.
    3.  **Local Verify**:
        *   Run Lint: `npm run lint`
        *   Run Build: `npm run build`
        *   Fix any errors immediately.
    4.  **Commit**:
        ```bash
        git add .
        git commit -m "feat: description of changes"
        ```

## 3. Review & Merge (The "QA" Phase)
- **Goal**: Ensure code quality before merging.
- **Steps**:
    1.  **Self-Review**: The agent checks the code against `ISSUES.md` and best practices.
    2.  **Pull Request** (If GitHub Connected):
        *   Use MCP tool to create a PR.
        *   Request review.
    3.  **Manual Merge** (If GitHub Disconnected):
        *   Simulate PR review.
        *   Merge to `main` locally:
            ```bash
            git checkout main
            git merge feat/your-feature-name
            ```

## 4. Deployment (The "Release" Phase)
- **Goal**: Ship the changes.
- **Steps**:
    1.  **Deploy**:
        ```bash
        firebase deploy
        ```
    2.  **Verify**: Check the live URL (https://sleep-pact.web.app or similar) to ensure the changes are visible and working.

## 5. Retrospective (End of Task)
- **Goal**: Clean up and document.
- **Steps**:
    1.  Update `ISSUES.md` (mark fixed issues as resolved).
    2.  Update `walkthrough.md` with what was accomplished.
    3.  Clear the task buffer or ask for the next sprint.
