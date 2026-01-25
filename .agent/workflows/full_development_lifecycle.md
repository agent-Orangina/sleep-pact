---
description: Full Development Lifecycle Workflow for Sleep Pact - Repeatable Improvement Process
---

# 🔄 Full Development Lifecycle Workflow for Sleep Pact

**Purpose**: This workflow provides a complete, repeatable process for improving the Sleep Pact application. Send this entire document to the Cursor agent to initiate an improvement cycle.

**Repository**: https://github.com/rodelBeronilla/sleep-pact  
**Live Site**: https://rodelberonilla.github.io/sleep-pact/  
**Tech Stack**: React 19, TypeScript, Vite, Firebase (Auth + Firestore), TailwindCSS

---

## 📋 Phase 1: Discovery & Planning (MANDATORY START)

### 1.1 Environment Assessment
**Exit Criteria**: Complete understanding of current state documented

- [ ] Read `.agent/rules.md` to understand project standards
- [ ] Read `ISSUES.md` to identify known issues
- [ ] Check `package.json` for dependencies and scripts
- [ ] Verify `.env` file exists (or `.env.example` if not configured)
- [ ] Review recent git commits: `git log --oneline -10`
- [ ] Check current branch: `git branch --show-current`
- [ ] Verify Firebase configuration in `src/lib/firebase.ts`
- [ ] Check GitHub repository status and recent PRs/issues

**Output**: Brief status report summarizing:
  - Current branch and uncommitted changes
  - Active issues from `ISSUES.md`
  - Build/lint status
  - Firebase configuration status

### 1.2 Issue Prioritization
**Exit Criteria**: Clear task list with priorities

- [ ] Review `ISSUES.md` for active issues
- [ ] Check GitHub Issues (if accessible via MCP/API)
- [ ] Identify user-requested improvements (from conversation)
- [ ] Categorize by severity:
  - **Critical**: Blocks functionality, security issues
  - **High**: Major bugs, performance issues
  - **Medium**: UX improvements, minor bugs
  - **Low**: Code quality, refactoring
- [ ] Create or update `task.md` with selected items for this cycle

**Output**: Prioritized task list in `task.md` format:
```markdown
# Current Sprint Tasks

## Critical
- [ ] Task 1 description

## High Priority
- [ ] Task 2 description

## Medium Priority
- [ ] Task 3 description
```

### 1.3 Implementation Planning
**Exit Criteria**: Clear implementation plan documented

- [ ] For each selected task, document:
  - Files that need modification
  - Dependencies/APIs required
  - Testing approach
  - Potential risks
- [ ] Create `implementation_plan.md` if changes are significant (>3 files)
- [ ] Identify if Firebase schema changes are needed
- [ ] Check if GitHub Actions workflows need updates

**Output**: Implementation plan (in `implementation_plan.md` or conversation)

---

## 🛠️ Phase 2: Development (Implementation)

### 2.1 Branch Management
**Exit Criteria**: Feature branch created and checked out

- [ ] Ensure working directory is clean: `git status`
- [ ] If uncommitted changes exist, commit or stash them
- [ ] Create feature branch: `git checkout -b feat/description-of-change`
  - Use format: `feat/`, `fix/`, `refactor/`, `docs/`, `test/`
  - Example: `feat/add-sleep-streak-tracking`

### 2.2 Code Implementation
**Exit Criteria**: All code changes complete and functional

**Rules to Follow**:
- [ ] Read `.agent/rules.md` before coding
- [ ] Follow TypeScript strict typing (no `any` without justification)
- [ ] Use TailwindCSS with `clsx` + `tailwind-merge` for conditional classes
- [ ] Implement defensive programming (try/catch, null checks)
- [ ] Add docstrings/comments for complex logic
- [ ] Follow separation of concerns (business logic ≠ presentation)

**For Firebase Changes**:
- [ ] Update Firestore rules if schema changes: `google_apps_script/firestore.rules`
- [ ] Update indexes if needed: `google_apps_script/firestore.indexes.json`
- [ ] Test Firebase operations with proper error handling
- [ ] Verify environment variables are properly used (no hardcoded secrets)

**For React/TypeScript Changes**:
- [ ] Ensure all components have proper TypeScript types
- [ ] Use React hooks correctly (no dependency array issues)
- [ ] Follow React 19 patterns and best practices
- [ ] Maintain responsive design with TailwindCSS

### 2.3 Local Verification
**Exit Criteria**: All checks pass locally

- [ ] **Lint Check**: `npm run lint`
  - Fix all linting errors immediately
  - Do not proceed if lint fails
- [ ] **Type Check**: `npm run build` (includes TypeScript check)
  - Fix all TypeScript errors
  - Do not proceed if build fails
- [ ] **Manual Testing** (if applicable):
  - Start dev server: `npm run dev`
  - Test affected features manually
  - Verify Firebase operations work
  - Check console for errors

**If any check fails**: Fix immediately before proceeding

### 2.4 Documentation Updates
**Exit Criteria**: All relevant docs updated

- [ ] Update `ISSUES.md`:
  - Mark resolved issues as `[RESOLVED]`
  - Add new issues discovered during development
- [ ] Update code comments/docstrings if logic changed
- [ ] Update `README.md` if features changed
- [ ] Update `.agent/rules.md` if new patterns/lessons learned

---

## ✅ Phase 3: Quality Assurance

### 3.1 Code Review (Self-Review)
**Exit Criteria**: Code passes self-review checklist

- [ ] **Code Quality**:
  - [ ] No `console.log` statements left in production code
  - [ ] No hardcoded secrets or API keys
  - [ ] Error handling implemented for all async operations
  - [ ] TypeScript types are correct (no `any` without justification)
- [ ] **Functionality**:
  - [ ] All task items from `task.md` are complete
  - [ ] Edge cases handled (null checks, empty states)
  - [ ] Firebase operations have error handling
- [ ] **Standards Compliance**:
  - [ ] Follows `.agent/rules.md` guidelines
  - [ ] Matches existing code style
  - [ ] No breaking changes (or documented if intentional)

### 3.2 Build Verification
**Exit Criteria**: Production build succeeds

- [ ] **Production Build**: `npm run build`
  - Must complete without errors
  - Check `dist/` folder is generated correctly
- [ ] **Preview Build**: `npm run preview` (optional, if time permits)
  - Verify app loads correctly
  - Test critical paths

### 3.3 Git Commit
**Exit Criteria**: Changes committed with descriptive message

- [ ] Stage all changes: `git add .`
- [ ] Commit with conventional commit message:
  ```bash
  git commit -m "feat: add sleep streak tracking feature
  
  - Added streak calculation logic in db.ts
  - Updated Dashboard to display streak counter
  - Added tests for streak edge cases
  
  Resolves #ISSUE_NUMBER"
  ```
- [ ] **Commit Message Format**:
  - Type: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
  - Brief summary (50 chars max)
  - Detailed description (if needed)
  - Reference issues: `Resolves #123` or `Fixes #456`

---

## 🚀 Phase 4: Integration & Deployment

### 4.1 GitHub Integration
**Exit Criteria**: PR created and ready for review

**Option A: Using GitHub MCP/Extension (Preferred)**
- [ ] Push branch to remote: `git push -u origin feat/branch-name`
- [ ] Use GitHub MCP tool to create Pull Request:
  - Title: Clear, descriptive
  - Description: Include what changed, why, and how to test
  - Link to related issues: `Closes #123`
  - Request review if applicable
- [ ] Wait for CI/CD checks to pass (if GitHub Actions configured)

**Option B: Manual GitHub Workflow (If MCP unavailable)**
- [ ] Push branch: `git push -u origin feat/branch-name`
- [ ] Create PR manually on GitHub:
  - Go to: https://github.com/rodelBeronilla/sleep-pact/pulls
  - Click "New Pull Request"
  - Select your branch
  - Fill in PR description
- [ ] Monitor GitHub Actions workflow (`.github/workflows/deploy.yml`)

### 4.2 Firebase Verification
**Exit Criteria**: Firebase changes verified (if applicable)

- [ ] If Firestore rules changed:
  - [ ] Review `google_apps_script/firestore.rules`
  - [ ] Test rules locally: `firebase emulators:start` (if emulator available)
  - [ ] Document rule changes in PR description
- [ ] If schema/indexes changed:
  - [ ] Review `google_apps_script/firestore.indexes.json`
  - [ ] Verify indexes are deployed with Firebase CLI
- [ ] Verify Firebase environment variables are set in deployment environment

### 4.3 Deployment
**Exit Criteria**: Changes deployed to production

**Automatic Deployment (GitHub Actions)**:
- [ ] Verify `.github/workflows/deploy.yml` is configured
- [ ] After PR merge, monitor deployment workflow
- [ ] Check deployment status in GitHub Actions tab

**Manual Deployment (If needed)**:
- [ ] Build production: `npm run build`
- [ ] Deploy to GitHub Pages:
  ```bash
  # If using gh-pages package
  npm run deploy
  # OR manually push dist/ to gh-pages branch
  ```
- [ ] Verify deployment at: https://rodelberonilla.github.io/sleep-pact/

### 4.4 Post-Deployment Verification
**Exit Criteria**: Live site verified working

- [ ] Visit live site: https://rodelberonilla.github.io/sleep-pact/
- [ ] Test affected features on production
- [ ] Verify Firebase operations work (auth, database)
- [ ] Check browser console for errors
- [ ] Test on different devices/browsers (if critical feature)

---

## 📊 Phase 5: Retrospective & Documentation

### 5.1 Issue Tracking Update
**Exit Criteria**: `ISSUES.md` reflects current state

- [ ] Mark resolved issues in `ISSUES.md`:
  ```markdown
  ### [Issue Name] - RESOLVED
  - **Resolution Date**: YYYY-MM-DD
  - **Resolution**: Brief description of fix
  - **PR**: #123
  ```
- [ ] Add any new issues discovered during development
- [ ] Update issue priorities if needed

### 5.2 Knowledge Capture
**Exit Criteria**: Lessons learned documented

- [ ] Update `.agent/rules.md` if:
  - New patterns discovered
  - Common mistakes encountered
  - Tooling issues resolved
  - Best practices identified
- [ ] Document any Firebase-specific learnings
- [ ] Document any GitHub workflow improvements

### 5.3 Summary Report
**Exit Criteria**: Clear summary of work completed

**Generate summary including**:
- Tasks completed (from `task.md`)
- Files modified
- Features added/fixed
- Issues resolved
- PR link (if created)
- Deployment status
- Next steps or recommendations

---

## 🎯 EXIT CRITERIA CHECKLIST (MUST COMPLETE ALL)

Before marking this cycle complete, verify:

### Code Quality
- [ ] ✅ All lint checks pass: `npm run lint`
- [ ] ✅ All TypeScript checks pass: `npm run build`
- [ ] ✅ No hardcoded secrets or API keys
- [ ] ✅ Error handling implemented
- [ ] ✅ Code follows `.agent/rules.md`

### Functionality
- [ ] ✅ All tasks from `task.md` completed
- [ ] ✅ Features work as expected
- [ ] ✅ Firebase operations functional
- [ ] ✅ No console errors in production

### Version Control
- [ ] ✅ Changes committed with descriptive message
- [ ] ✅ Branch pushed to remote
- [ ] ✅ PR created (or merged if approved)

### Deployment
- [ ] ✅ Production build succeeds
- [ ] ✅ Changes deployed to live site
- [ ] ✅ Live site verified working

### Documentation
- [ ] ✅ `ISSUES.md` updated
- [ ] ✅ `task.md` updated (items marked complete)
- [ ] ✅ `.agent/rules.md` updated (if applicable)
- [ ] ✅ Summary report generated

---

## 🔄 REPEAT INSTRUCTIONS

To use this workflow again:

1. **Copy this entire document** and send it to the Cursor agent
2. **Specify your improvement goal** (e.g., "Fix the login bug" or "Add dark mode")
3. **The agent will follow this workflow** from Phase 1 through Phase 5
4. **Verify exit criteria** are met before considering the cycle complete

**Example Usage**:
```
Please follow the Full Development Lifecycle Workflow to:
- Fix the authentication issue where users can't log in
- Add a sleep streak counter to the dashboard
- Improve error messages for Firebase failures
```

---

## 🛠️ TOOLS & RESOURCES

### Required Tools
- **Git**: Version control
- **npm**: Package management
- **Firebase CLI**: For Firestore rules/indexes (optional)
- **GitHub MCP/Extension**: For PR management (preferred)

### Key Files
- `.agent/rules.md`: Project standards
- `.agent/workflows/full_development_lifecycle.md`: This file
- `ISSUES.md`: Issue tracking
- `task.md`: Current sprint tasks
- `package.json`: Dependencies and scripts
- `src/lib/firebase.ts`: Firebase configuration
- `src/lib/db.ts`: Database operations

### Useful Commands
```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run linter
npm run preview      # Preview production build

# Git
git status           # Check working directory
git checkout -b feat/name  # Create feature branch
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push -u origin branch-name  # Push branch

# Firebase (if CLI installed)
firebase deploy      # Deploy Firestore rules/indexes
firebase emulators:start  # Start local emulators
```

---

## 📝 NOTES

- **This workflow is designed to be repeatable**: Each cycle should be independent
- **Exit criteria are mandatory**: Do not skip verification steps
- **Documentation is critical**: Update `ISSUES.md` and `.agent/rules.md` regularly
- **Defensive programming**: Always handle errors gracefully
- **YAGNI principle**: Only implement what's needed now, not what might be needed later

---

**Last Updated**: 2026-01-25  
**Version**: 1.0  
**Maintainer**: Development Team
