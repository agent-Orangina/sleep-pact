# 🎯 Complete Workflow Guide for Sleep Pact Improvements

This guide explains how to use the workflow system to repeatedly improve your Sleep Pact application.

## 📁 What Was Created

I've created a comprehensive workflow system in `.agent/workflows/`:

1. **`full_development_lifecycle.md`** - Complete, detailed workflow covering all phases
2. **`QUICK_START_PROMPT.md`** - Easy-to-use prompt template
3. **`continuous_improvement.md`** - Simplified workflow for quick iterations (existing, updated)
4. **`README.md`** - Index of available workflows

## 🚀 How to Use (3 Simple Steps)

### Step 1: Choose Your Workflow

**For major improvements** (recommended):
- Use `full_development_lifecycle.md`
- Covers: Planning → Development → QA → Deployment → Documentation
- Has strict exit criteria to ensure quality

**For quick fixes**:
- Use `continuous_improvement.md`
- Faster, simpler process
- Good for small changes

### Step 2: Start an Improvement Cycle

**Option A: Quick Start (Easiest)**
1. Open `.agent/workflows/QUICK_START_PROMPT.md`
2. Copy the prompt template
3. Fill in your improvement goals
4. Paste into Cursor chat

**Option B: Full Workflow**
1. Open `.agent/workflows/full_development_lifecycle.md`
2. Copy the entire document
3. Add your goals at the top
4. Send to Cursor agent

### Step 3: Let the Agent Work

The agent will:
- ✅ Follow all phases of the workflow
- ✅ Complete all exit criteria
- ✅ Use Firebase and GitHub tools
- ✅ Update documentation
- ✅ Provide a summary report

## 📋 Example Usage

### Example 1: Fix a Bug
```
Please follow the Full Development Lifecycle Workflow to fix the login bug where users can't authenticate with Google.
```

### Example 2: Add a Feature
```
Please follow the Full Development Lifecycle Workflow to add a sleep streak counter that shows consecutive days of success.
```

### Example 3: Improve Code Quality
```
Please follow the Full Development Lifecycle Workflow to fix all TypeScript errors and remove any 'any' types.
```

## 🔄 Repeat the Process

After each cycle completes:
1. Review the summary report
2. Verify the live site works
3. Check the PR (if created)
4. Start a new cycle with new goals

## ✅ What Gets Ensured

Every cycle ensures:
- **Code Quality**: Linting, type checking, build verification
- **Functionality**: Features work as expected
- **Version Control**: Proper git workflow with branches and commits
- **Deployment**: Changes deployed and verified on live site
- **Documentation**: Issues tracked, rules updated, knowledge captured

## 🛠️ Tools Used

The workflows integrate with:
- **Firebase**: For database operations, rules, and configuration
- **GitHub**: For version control, PRs, and CI/CD
- **npm**: For building, linting, and dependency management
- **Git**: For branch management and commits

## 📝 Key Files

- **`.agent/workflows/full_development_lifecycle.md`** - Main workflow
- **`.agent/workflows/QUICK_START_PROMPT.md`** - Prompt template
- **`.agent/rules.md`** - Project standards (referenced by workflows)
- **`ISSUES.md`** - Issue tracking (updated during cycles)
- **`task.md`** - Current sprint tasks (created during cycles)

## 🎯 Exit Criteria

Every cycle must complete:
- ✅ All lint and build checks pass
- ✅ Code follows project standards
- ✅ Features work as expected
- ✅ Changes committed and pushed
- ✅ PR created (or merged)
- ✅ Live site verified
- ✅ Documentation updated

## 💡 Tips

1. **Start Small**: Begin with one improvement per cycle
2. **Be Specific**: Clearly describe what you want to improve
3. **Review Reports**: Always check the summary at the end
4. **Track Issues**: Keep `ISSUES.md` updated for future cycles
5. **Use Quick Start**: The prompt template makes it easy to repeat

## 🔗 Resources

- **Repository**: https://github.com/rodelBeronilla/sleep-pact
- **Live Site**: https://rodelberonilla.github.io/sleep-pact/
- **Workflows**: `.agent/workflows/` directory
- **Rules**: `.agent/rules.md`

---

**Ready to start?** Open `QUICK_START_PROMPT.md` and copy the template!
