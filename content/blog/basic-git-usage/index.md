---
title: Learn Basic Git usage
date: "2022-12-18T00:00:00.000Z"
description: The most common commands for a successful git workflow
---

Git is a powerful tool for managing multiple revisions of a codebase. As you make changes to files within a codebase, you might be tempted to make backup copies of your code in case you break something and want to revert to a working version:

```sh
index.html
index-final(v2).html
index-backup1.html
index-backup2.html
```

We want to avoid this! It's messy and doesn't scale as you end up with a codebase that has potentially hundreds of files.

That's where Git comes in. Git gives us the ability to set checkpoints called "commits" for our codebase that we can revert to if needed. We can also share these commits across different machines. Git also gives us the ability to merge changes between multiple commits into a new commit. This makes it a powerful collaboration tool and allows us to quickly switch tasks if we need to make multiple changes at once. For example, we might be working on a new feature for our web application when a critical bug is reported that needs to be fixed ASAP. Rather than backing out all our work on the new feature, or rushing to finish the new feature, we can save our feature work to a commit, then go back to the previous commit, fix the bug with a new commit, then merge the fix into our feature work so we don't write over it as we make new changes.

Let's get started!

Make a new directory for our web application: `mkdir -p ~/Source/webapp`

Change into the app directory: `cd ~/Source/webapp`

Initialize a new Git repository

```sh
$ webapp git init
Initialized empty Git repository in /Users/dan/Source/webapp/.git/
```

Git will now track changes to files within the webapp repository. It created a hidden directory `.git` within our project directory where it will keep track of commits and general configuration for the project. Since it's just a directory and files, you can open the `.git` directory and look around. Be careful about making any changes! In practice, you likely won't be directly modifying anything in this directory yourself.

Back in our `webapp` directory, let's open VSCode and start making some edits: `code .` Opens VSCode in the current directory.

Create a new file in VSCode called `README.md`. We'll use this to convey any important information about our webapp project. Write a few sentences to describe the new project. The `md` file extension indicates that this is a markdown file. Markdown is a file format that is meant to be human readable text, but uses special characters to denote special meaning:

- Lines starting with `#` are treated as top-level headings
- Lines starting with `##` are treated as secondary headings
- Text surrounded by a single underscore is emphasized: `_text to emphasize_`
- Text surrounded by two underscores is strongly emphasized: `__strongly__ emphasized`
- Links to URLs can be embedded: `[link text](https://url-to-content.com)`

For now, let's add the following text to our README.md file:

```markdown
# My First Web Application

This repository contains the code for my first web application.
```

Save the file and switch back to iterm2.

Git can tell us of any high level file changes with `git status`

```sh
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md

nothing added to commit but untracked files present (use "git add" to track)
```

This gives us a quick overview of the state of our repository. We're currently using the `main` branch and have not created any checkpoints or commits yet in this repository. Git identified a new file `README.md` that is considered "untracked" because it hasn't been included in any commits yet.

Let's create our first commit and start tracking changes for the README.md file:

```sh
$ git add README.md
$ git commit -m "Initial readme file"
[main (root-commit) 0388158] Initial readme file
 1 file changed, 3 insertions(+)
 create mode 100644 README.md
```

`git add README.md` tells git to start tracking changes made to the README.md file. `git add` can take any path within the repository. In practice, you might find youself using `git add .` to track changes to all files in the repository.

`git commit -m "Initial readme file"` tells git to create a new commit or checkpoint for the state of all files that are currently tracked in the repository. The commit accepts a message that we provide with the `-m` flag. This message is used to give ourselves context about what changes were made in the commit. Over time, we can use these messages to see a history of our progress in developing the app.

The output from the commit tells us that the commit was applied to the `main` branch. It also includes a hash of the changes (`0388158` in the example output) and the commit message. Below the message, the output gives a summary of the changes that were committed.

## What is a branch in Git?

Our `git status` command above just told us we're currently on the `main` branch, but what does this actually mean? If we think about how we'll be making changes to our codebase, we could be working on multiple features and bug fixes in parallel at any given time. We want to work on each change independently of the other changes however. In the example scenario at the beginning of this post, we described using multiple commits for different changes. What if we wanted to use more than one checkpoint when developing a feature? It's a good practice to commit often. Think of it like setting a checkpoint in a video game. If things get messy, you can safely return to the checkpoint. Branches allow us to separate our work in progress by feature. We can create multiple commits on a given branch, then merge the feature branch into the main branch when it's done to apply changes from all of the commits of that branch.

Let's create a new branch to add a [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) file. The `CODEOWNERS` file is used to identify the maintains of the code in the repository. This is helpful for providing contact information of subject matter experts in larger organizations where the maintainers of the codebase might not always be immediately known by everyone.

First, let's make a new branch for this change. It's important not to work on changes directly on the `main` branch (this defeats the purpose)! `git checkout -b add-codeowners`

The `git checkout` command is used for switching to different commits. We can specify commits to `git checkout` in a few different ways:

- Use the name of a branch like `git checkout main` (most common)
- Use a commit hash `git checkout 0388158`
- Relative to the history
  - `git checkout HEAD` (checkout the latest commit)
  - `git checkout HEAD~1` (checkout the commit before the latest commit)

Our use of the `-b` flag tells `git checkout` to switch to a new branch off of our current repository state named `add-codeowners`. The `checkout` command does not create any commits!

Add the following to the CODEOWNERS file, substituting your email address for the sample email below:

```
* your@email.com
```

While we're editing files in VSCode, let's add the following note to the bottom of our README.md file to help collaborators navigate our repository:

```
Maintainers are listed in the CODEOWNERS file.
```

Save your changes and return to iterm.

Let's get our bearings with `git branch`. This lists the available branches in the repository and indicates the current branch.

Let's check on our outstanding changes with `git status`. At this point, it identifies that we've made changes to our README.md file and have also added a new CODEOWNERS file.

Use `git diff` to show all outstanding changes in files that are already tracked. The new line that we added to the readme should be listed in the diff. The `+` at the beginning of the line indicates that the line will be added to the file (a leading `-` would indicate the line will be removed). Note that changes in the CODEOWNERS file aren't listed in the diff. This is because the CODEOWNERS file hasn't yet been added for tracking.

Use the `git add` command to add the changes to both files. Do you remember how to do this in one command?

If you've successfully added both files to tracking, you should see the following when running the `git status` command

```sh
$ git status
On branch add-codeowners
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   CODEOWNERS
	modified:   README.md
```

We still don't have a new checkpoint yet, let's create the checkpoint now: `git commit -m "Add CODEOWNERS"`.

Now that we have a commit saved, let's go back to our `main` branch and make another change. Use the `git checkout` command to switch toe the `main` branch (hint: the exact command is mentioned earlier in this post).

We can confirm that we switched to the `main` branch using the `git branch` command.

Checkout a new branch called `add-changelog` (hint: we used the command to checkout a new branch earlier when we made a change to add the CODEOWNERS file). Confirm that we have switched to the new branch using the `git branch` command.

Make a new file called CHANGELOG.md and add the following to it:

```markdown
- Added CHANGELOG
```

Add the following line of text to the bottom of the README.md file:

```markdown
Changes are tracked using the CHANGELOG
```

_Note:_ Best practices for maintaining a changelog would use the [keep a changelog](https://keepachangelog.com/) approach, but we just need something lightweight for this exercise.

`git add` the changes to tracking and commit the changes with a meaningful commit message.

After adding and committing the changes, `git status` should report that there are no outstanding changes:

```sh
$ git status
On branch add-changelog
nothing to commit, working tree clean
```

We've made two distinct changes so far, but at this point these changes are on separate feature branches. We can access each change by switching to the respective branch, but now that our changes are complete, we want them all to be applied on the `main` branch.

Let's merge the first change into the `main` branch. First switch to the `main` branch.

From the `main` branch, merge changes from our codeowners branch: `git merge add-codeowners`

```sh
$ git merge add-codeowners
Updating 0388158..5f899ef
Fast-forward
 CODEOWNERS | 1 +
 README.md  | 2 ++
 2 files changed, 3 insertions(+)
 create mode 100644 CODEOWNERS
```

The command output shows which changes are applied.

Now let's merge our changes to add a changelog into the `main` branch:

```sh
$ git merge add-changelog
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result
```

This output doesn't show our changes being applied. What happened?!

We've encountered a merge conflict! Git wasn't able to automatically apply the changes we made in the README.md file because we made different changes in the same place in README.md file in two parallel branches. Git needs our help to determine how to handle these conflicting changes. In this case, we only have a conflict in the README.md file, but when merging larger changes, we could have conflicts in many files. Git will list every file with conflicts here. We need to resolve each conflict before finishing the merge.

Open the README.md file in VSCode and notice that Git has altered the file to indicate the conflicts:

```
# My First Web Application

This repository contains the code for my first web application.

<<<<<<< HEAD
Maintainers are listed in the CODEOWNERS file.
=======
Changes are tracked in the changelog
>>>>>>> add-changelog
```

We need to edit this file to remove any conflicts. In this case, we want to keep both changes, so we can safely remove the text added by Git. Our README should look something like this now:

```
# My First Web Application

This repository contains the code for my first web application.

Maintainers are listed in the CODEOWNERS file.

Changes are tracked in the changelog
```

`git status` tells us that we still have some outstanding changes:

```sh
$ git status
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:
	new file:   CHANGELOG.md

Unmerged paths:
  (use "git add <file>..." to mark resolution)
	both modified:   README.md
```

We need to add and commit our change to resolve the conflict:

```sh
$ git add README.md
$ git commit -m "Merge branch add-changelog into main"
```

We can use `git log` to open the revision history for the repository.

Create a new repository in GitHub. Do not choose the option to initialize with a readme, since we've already initialized our repository in this exercise. Copy the command that GitHub provides to add the remote repository.

Push our changes to GitHub with `git push`.

Git supports hooks that we can tap into as a way of executing commands during certain events. Later on, we can tap into these hooks to automatically run tests to make sure our changes are working correctly and then deploy the changes to a server if everything looks good.
