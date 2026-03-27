---
name: GitHub Two-Developer Collaboration
description: Complete guide for two developers collaborating on a GitHub repository, including setup, daily workflow, pull requests, and common error troubleshooting.
---

# GitHub Two-Developer Collaboration Guide

> [!IMPORTANT]
> **This skill is ALWAYS ACTIVE.** Whenever the user runs any `git` command or discusses GitHub workflow, the assistant MUST proactively check for mistakes and warn them BEFORE damage is done.

---

## ⚠️ Proactive Caution Rules (MUST FOLLOW)

The assistant must **immediately warn the user** if any of the following are detected:

### 🚫 STOP & WARN if:
1. **Pushing directly to `main`** — Always use a feature branch + PR.
2. **Using slash (`/`) in branch names when a prefix branch exists** — e.g., `vineel-dev/feature` will fail if `vineel-dev` exists. Suggest hyphen (`-`) instead.
3. **Force pushing (`git push --force`)** — This rewrites history and can destroy your partner's work. Almost never needed.
4. **Committing without pulling first** — Always `git pull origin main` before starting work.
5. **Working on `main` directly** — Always create a feature branch first.
6. **Large, unfocused commits** — Each commit should be one logical change. Warn if `git add .` captures unrelated files.
7. **Merge conflicts ignored or deleted** — Warn if conflict markers (`<<<<<<<`) are left in files.
8. **Stale branches** — Warn if a branch hasn't been updated from `main` in several days.
9. **Deleting remote branches without confirmation** — Always confirm before running `git push origin --delete`.
10. **Resetting or reverting without understanding** — Warn before any `git reset --hard` or `git revert` command.

### ✅ SUGGEST proactively:
- Run `git status` before committing to review staged changes.
- Run `git pull origin main` before creating a new branch.
- Use descriptive branch names: `vineel-add-about-page`, not `fix` or `update`.
- Write meaningful commit messages starting with a verb.

---

## 1. One-Time Setup

### Create & Share the Repository
1. One developer creates the repo on GitHub.
2. Go to **Settings → Collaborators → Add people** and invite the second developer.
3. Both developers clone:
   ```bash
   git clone <repository-url>
   ```

---

## 2. Daily Workflow (Feature Branch Pattern)

### Step A: Always start from the latest `main`
```bash
git checkout main
git pull origin main
```

### Step B: Create a feature branch
Use a **descriptive, flat name** (no nested slashes if a branch with that prefix already exists):
```bash
# ✅ GOOD naming conventions
git checkout -b vineel-add-about-page
git checkout -b trisha-fix-navbar
git checkout -b feature-login-page

# ❌ BAD — will fail if a branch named `vineel-dev` already exists
git checkout -b vineel-dev/add-about-page
```

> **Why?** Git stores branches as file paths. If `vineel-dev` exists as a branch, Git cannot also create a folder called `vineel-dev/` to store `vineel-dev/add-about-page`. Use hyphens (`-`) instead of slashes (`/`).

### Step C: Work and commit often
```bash
git add .
git commit -m "Brief description of what you did"
```

**Commit message tips:**
- Start with a verb: `Add`, `Fix`, `Update`, `Remove`, `Refactor`
- Keep it under 72 characters
- Examples: `Add hero section to about page`, `Fix navbar mobile responsiveness`

### Step D: Push your branch to GitHub
```bash
git push -u origin your-branch-name
```

---

## 3. Pull Requests (PR) — Review & Merge

1. Go to GitHub.com → your repository.
2. Click the green **"Compare & pull request"** button.
3. Write a brief description of what you changed and why.
4. Your partner **reviews** the PR: reads the code, leaves comments, and **approves**.
5. Click **"Merge pull request"** → **"Confirm merge"**.
6. (Optional) Delete the feature branch after merging.

### After a PR is merged
Both developers must update their local `main`:
```bash
git checkout main
git pull origin main
```

---

## 4. Handling Merge Conflicts

### How to resolve
1. Git will mark conflicting files. Open them in your editor.
2. You'll see conflict markers:
   ```
   <<<<<<< HEAD
   Your version of the code
   =======
   Your partner's version of the code
   >>>>>>> branch-name
   ```
3. **Decide** which version to keep (or combine both). Delete the conflict markers.
4. Save, then:
   ```bash
   git add .
   git commit -m "Resolve merge conflict in filename"
   ```

### How to prevent conflicts
- **Communicate:** Tell your partner which files you're working on.
- **Pull frequently:** Run `git pull origin main` often.
- **Keep branches short-lived:** Merge PRs quickly.

---

## 5. Common Errors & Troubleshooting

### ❌ `fatal: cannot lock ref — exists; cannot create`
**Cause:** Slash conflict in branch naming (`vineel-dev` exists, can't create `vineel-dev/xyz`).
**Fix:** Use a hyphen instead of slash, or delete the old branch first.

### ❌ `error: failed to push — rejected — non-fast-forward`
**Cause:** Your partner pushed changes before you.
**Fix:**
```bash
git pull origin main --rebase
git push origin your-branch-name
```

### ❌ `Permission denied` or `remote: Permission denied`
**Cause:** Not added as collaborator, or SSH/credentials not set up.
**Fix:** Check collaborator access, verify `ssh -T git@github.com`, or use a Personal Access Token for HTTPS.

### ❌ `Your branch is behind 'origin/main'`
**Fix:**
```bash
git checkout main
git pull origin main
git checkout your-branch-name
git merge main
```

### ❌ `error: Your local changes would be overwritten by checkout`
**Fix:**
```bash
# Option 1: Commit first
git add . && git commit -m "WIP: save progress"

# Option 2: Stash
git stash
git checkout other-branch
git stash pop  # to restore later
```

---

## 6. Quick Reference Cheat Sheet

| Action | Command |
|---|---|
| Get latest code | `git pull origin main` |
| Create new branch | `git checkout -b branch-name` |
| See all branches | `git branch -a` |
| Switch branch | `git checkout branch-name` |
| Stage all changes | `git add .` |
| Commit | `git commit -m "message"` |
| Push branch | `git push -u origin branch-name` |
| Delete local branch | `git branch -d branch-name` |
| Delete remote branch | `git push origin --delete branch-name` |
| See commit history | `git log --oneline -10` |
| Current status | `git status` |
| Stash changes | `git stash` / `git stash pop` |

---

## 7. Golden Rules for Two Developers

1. **Never push directly to `main`.** Always use feature branches + PRs.
2. **Pull before you push.** Always `git pull origin main` before starting work.
3. **Communicate.** A quick *"I'm working on the About page"* saves hours.
4. **Keep branches small.** One feature = one branch = one PR.
5. **Review each other's code.** PRs are for learning and catching bugs.
