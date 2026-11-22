# Branching Strategy: GitHub Flow

Our project follows the **GitHub Flow** strategy to ensure simplicity and speed. Every merge into `main` deploys the site to GitHub Pages, as described in [Deployment](#deployment).

## Core Principles

1.  **The `main` branch is always deployable.**
    *   Never commit directly to `main`.
    *   Whatever is on `main` is what visitors see at `https://sosmy.app`, so it must build and render correctly.

2.  **To work on something new, create a descriptive branch from `main`.**
    *   Use clear and concise names for branches.
    *   Examples: `feat/landing-page`, `fix/broken-store-link`, `docs/add-readme`.

3.  **Commit and push to your branch regularly.**
    *   Pushing your work to the remote repository backs up your work and shares your progress.

4.  **Open a Pull Request (PR) when you need feedback or are ready to merge.**
    *   PRs are for discussion, review, and final checks.
    *   Provide a clear description of your changes in the PR (see [pr-convention.md](pr-convention.md)).

5.  **Merge into `main` after review and once all checks pass.**
    *   **Always create a merge commit when merging into `main` (use `--no-ff` / No Fast-Forward).** Do not perform fast-forward merges to preserve the branching history.

6.  **Delete the branch once it has been merged.**

## Branch Naming Convention

*   `feat/`: New pages, sections, or other visible additions.
*   `fix/`: Bug fixes (broken links, layout errors, typos in content).
*   `docs/`: Documentation changes (README, AGENTS.md, git-workflow docs, etc.).
*   `refactor/`: Code changes that neither fix a bug nor add a feature.
*   `test/`: Adding or correcting tests.
*   `chore/`: Updates to build tasks, dependencies, deployment configs, etc.

## Merge Strategy

To ensure a clear, traceable commit history:
*   **Command Line Merge**: When merging branches locally, always use the `--no-ff` flag to force a merge commit:
    ```bash
    git merge --no-ff <branch-name>
    ```
*   **GitHub Pull Requests**: Select "Create a merge commit" (not Squash or Rebase) when merging Pull Requests, ensuring all branch history is kept.

## Deployment

*   The site is a static site served by GitHub Pages at the custom domain `https://sosmy.app`.
*   A GitHub Actions workflow builds and deploys the site on every push to `main`, so merging a PR is releasing it. There are no version numbers, release tags, or `develop`/`release`/`hotfix` branches.
*   An urgent fix is a `fix/` branch merged into `main` like any other change.
*   A bad deploy is undone with a new PR (for example `git revert -m 1 <merge-commit>`), never by force-pushing `main`.
