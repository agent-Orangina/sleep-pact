# Agent Rules & Guidelines

This file defines the technical stack, coding standards, and behavioral rules for this workspace. All agents MUST read and follow these rules to ensure consistent, high-quality outcomes.

## 1. Tech Stack
- **Frontend**: React 19, TypeScript, Vite.
- **Styling**: TailwindCSS (use `clsx` + `tailwind-merge` for conditional classes).
- **Backend/Services**: Firebase (Authentication, Firestore), Google Apps Script (in `google_apps_script/` folder).
- **Package Manager**: npm.

## 2. Behavioral Rules (Crucial for "Best Outcome")
- **No Laziness**: Never use `// ... rest of code` or placeholders in code blocks. Always write full, working code.
- **Sequential Thinking**: For complex logic, multi-file changes, or debugging, YOU MUST use the `sequentialthinking` tool to plan before taking action.
- **Task Tracking**: Strictly adhere to `task.md`. Only mark items as complete `[x]` when they are truly done and verified.
- **Self-Correction**: Run build checks (`npm run build`) or lint checks (`npm run lint`) after significant changes. If it fails, fix it immediately.
- **Environment Awareness**: 
  - `src/` is for the React Web App.
  - `google_apps_script/` is for GAS code (clasp). DO NOT mix their dependencies or build processes.

## 3. Common Pitfalls & Syntax (Stop & Read)
### PowerShell (Windows)
- **Environment Variables**: Use `$env:VAR = 'val'` (NOT `export`, NOT `SET`).
- **Command Chaining**: Use `;` to chain commands (e.g., `cmd1; cmd2`). Avoid `&&` unless certain of PowerShell 7+.
- **Hanging Commands**: If a command might hang (like a server start), use `Start-Process` or handle it accordingly. Do not block the terminal.

### Tool Usage
- `run_command`: NEVER use `cd` to change directory. Use the `Cwd` parameter.
- `view_file`: Check file size/line count first to avoid token overflow.

## 4. Continuous Improvement (Aggregate Learning)
- **Update This File**: If you encounter a recurring issue, build failure pattern, or tooling mistake, YOU MUST update this file (`AGENT_RULES.md`) to prevent future agents from making the same mistake.
- **Pre-flight Check**: Before starting complex tasks, review this file to ensure previous lessons are applied.
