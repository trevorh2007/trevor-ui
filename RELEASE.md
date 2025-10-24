# Manual Release & NPM Publishing Guide

This repository uses **manual semantic versioning** with optional automatic analysis based on commit
messages. You control when releases happen!

## 🎯 **How Manual Releases Work**

### **Triggering a Release**

Releases are created manually via GitHub Actions:

1. Go to **Actions** tab in GitHub
2. Select **"Manual Release & NPM Publish"** workflow
3. Click **"Run workflow"**
4. Choose your options:
   - **Release Type**: `auto`, `patch`, `minor`, or `major`
   - **Pre-release**: Check for alpha/beta versions

### **Release Type Options**

| Release Type | Description                        | Example                        |
| ------------ | ---------------------------------- | ------------------------------ |
| `auto`       | Analyzes commits to determine bump | Automatic based on commit msgs |
| `patch`      | **Patch** (1.0.0 → 1.0.1)          | Bug fixes, small changes       |
| `minor`      | **Minor** (1.0.0 → 1.1.0)          | New features, backwards compat |
| `major`      | **Major** (1.0.0 → 2.0.0)          | Breaking changes               |

### **Manual Release Process**

1. **Manual trigger** → Decide when to release via GitHub UI
2. **Quality checks** → Runs tests, linting, type checking
3. **Version calculation** → Based on your selected type or auto-analysis
4. **Update package.json** → Commits new version back to repo
5. **Create release** → GitHub release with auto-generated changelog
6. **Publish to NPM** → If NPM token is configured

## 🚀 **Quick Start**

### **For Automatic Analysis**

When using `auto` release type, commit messages determine the bump:

```bash
# Feature commits (minor version bump)
git commit -m "feat: add disabled state to Button"
git commit -m "feature: implement tooltip component"

# Bug fix commits (patch version bump)
git commit -m "fix: button hover cursor issue"
git commit -m "bugfix: typescript export error"

# Breaking changes (major version bump)
git commit -m "feat!: redesign Button component API"
git commit -m "BREAKING: remove deprecated props"
```

### **Example Release Flow**

```bash
# Current version: 1.0.0-beta.1

# Work on features
git commit -m "feat: add hover states to buttons"
git push origin main

# When ready to release:
# → Go to GitHub Actions
# → Run "Manual Release & NPM Publish" workflow
# → Select "auto" release type
# → Result: v1.0.0 (removes beta, minor bump)

# For emergency patch:
# → Run workflow with "patch" type
# → Result: v1.0.1
```

### **Pre-release Versions**

Check the **"Pre-release"** option to create alpha/beta versions:

- `1.0.0` → `1.1.0-alpha.1` (with pre-release checked)
- Perfect for testing before final release

## 🔧 **Setup Requirements**

### **NPM Publishing (Optional)**

1. Create NPM account at [npmjs.com](https://www.npmjs.com)
2. Generate automation token
3. Add to GitHub Secrets as `NPM_TOKEN`
4. Package will be published as `trevor-ui` on NPM
5. View published package at: [npmjs.com/package/trevor-ui](https://www.npmjs.com/package/trevor-ui)

### **Permissions**

The workflow needs write access to:

- Create releases and tags
- Push version commits back to main
- Publish to NPM (if configured)

## 📋 **Manual Override**

If you need to manually set a version:

```bash
# Update package.json version manually
npm version 2.1.0 --no-git-tag-version
git add package.json
git commit -m "chore: bump version to 2.1.0"

# Then run release workflow with any type
# → Creates release for v2.1.0
```

## 🎉 **Benefits**

✅ **Full control** - You decide when releases happen  
✅ **Flexible versioning** - Manual override or auto-analysis  
✅ **Pre-release support** - Perfect for testing phases  
✅ **Semantic versioning** - Proper SemVer based on change types  
✅ **Auto changelog** - Generated from commit messages  
✅ **Quality gates** - All tests must pass before release

## 💡 **Best Practices**

1. **Use manual releases** for production deployments
2. **Test with pre-releases** before final versions
3. **Use conventional commits** when using auto-analysis
4. **Keep commits focused** - One logical change per commit
5. **Write descriptive messages** - They become your changelog
6. **Use PR reviews** - Multiple eyes on changes before main
7. **Release regularly** - Don't let changes pile up
