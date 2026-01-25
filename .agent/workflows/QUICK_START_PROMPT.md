---
description: Quick Start Prompt Template - Copy and paste this to start an improvement cycle
---

# 🚀 Quick Start Prompt for Sleep Pact Improvements

**Copy and paste this entire block to the Cursor agent to start an improvement cycle:**

---

```
Please follow the Full Development Lifecycle Workflow located at `.agent/workflows/full_development_lifecycle.md` to improve the Sleep Pact application.

## Improvement Goals for This Cycle:

[DESCRIBE YOUR IMPROVEMENT GOALS HERE]

Examples:
- Fix the authentication bug where users can't log in
- Add a sleep streak counter to the dashboard
- Improve error messages for Firebase connection failures
- Refactor the Dashboard component to reduce complexity
- Add dark mode support
- Fix TypeScript errors in db.ts

## Priority Level:
- [ ] Critical (blocks functionality)
- [ ] High (major bug or feature)
- [ ] Medium (UX improvement)
- [ ] Low (code quality, refactoring)

## Additional Context:
[ADD ANY ADDITIONAL CONTEXT, LINKS, OR SCREENSHOTS HERE]

---

**Workflow Requirements:**
1. Follow ALL phases of the Full Development Lifecycle Workflow
2. Complete ALL exit criteria before marking cycle complete
3. Use Firebase MCP/CLI tools for database operations
4. Use GitHub MCP/Extension for PR management
5. Update ISSUES.md and task.md throughout the process
6. Provide a summary report at the end

**Repository**: https://github.com/rodelBeronilla/sleep-pact
**Live Site**: https://rodelberonilla.github.io/sleep-pact/
```

---

## 📋 Usage Instructions

1. **Copy the prompt block above** (everything between the triple backticks)
2. **Fill in your improvement goals** in the `[DESCRIBE YOUR IMPROVEMENT GOALS HERE]` section
3. **Select priority level** by checking the appropriate box
4. **Add any additional context** (screenshots, error messages, user feedback, etc.)
5. **Paste into Cursor chat** and send

## 🎯 Example Prompts

### Example 1: Bug Fix
```
Please follow the Full Development Lifecycle Workflow located at `.agent/workflows/full_development_lifecycle.md` to improve the Sleep Pact application.

## Improvement Goals for This Cycle:

Fix the authentication bug where users see "Firebase not configured" error even though .env file exists. The app should properly load Firebase configuration from environment variables.

## Priority Level:
- [x] Critical (blocks functionality)

## Additional Context:
- Error appears in browser console: "Firebase not configured. Check your .env file."
- .env file exists with all required variables
- Issue occurs on first load after login
```

### Example 2: Feature Addition
```
Please follow the Full Development Lifecycle Workflow located at `.agent/workflows/full_development_lifecycle.md` to improve the Sleep Pact application.

## Improvement Goals for This Cycle:

Add a sleep streak counter that displays the number of consecutive days a user has successfully met their sleep goal. Display this prominently on the Dashboard.

## Priority Level:
- [ ] High (major bug or feature)

## Additional Context:
- Streak should reset to 0 if user misses a day
- Should show "Current Streak: X days" on Dashboard
- Should persist in Firestore user profile
```

### Example 3: Code Quality
```
Please follow the Full Development Lifecycle Workflow located at `.agent/workflows/full_development_lifecycle.md` to improve the Sleep Pact application.

## Improvement Goals for This Cycle:

Fix all TypeScript errors and improve type safety:
- Remove all `any` types from db.ts
- Add proper error types for Firebase operations
- Improve type definitions for UserProfile interface

## Priority Level:
- [ ] Medium (UX improvement)

## Additional Context:
- Current lint errors show "Unexpected any" in db.ts:59
- TypeScript strict mode should be enabled
```

---

## 🔄 After Each Cycle

After the agent completes a cycle:

1. **Review the summary report** provided by the agent
2. **Verify the live site** works as expected
3. **Check the PR** (if created) for any review comments
4. **Update your goals** for the next cycle
5. **Use this prompt again** to start the next improvement cycle

---

**Pro Tip**: Keep a running list of improvement ideas in `ISSUES.md` so you can easily reference them in future cycles!
