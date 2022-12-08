---
title: Learn Basic Shell Commands
date: "2022-12-08T00:00:02.000Z"
description: The most important shell commands for web application development
---

\_Prereq: install [iTerm2](https://iterm2.com/)

Open iterm2 and try out a few commands:

`pwd` print the absolute path of the current directory.

`cd` change directory to the specified path. If no path is specified, navigates to your home directory. A path can be specified to this command as a command line argument. For example: `cd mydir`. In a shell, terms are separated by whitespace. The first term specifies the command to run. Additional terms are called "arguments" and can be used to control the behavior of the command.

Note about paths: _Absolute paths_ always resolve to the same resource regardless of where you are when referencing the path. _Relative paths_ resolve to the resource based on where you currently are.

Consider the following directory structure

```
/
  Users
    dan
      Desktop
      Documents
        project1
        project2
        my project
```

If you are currently in your home directory `/Users/dan`, and want to navigate to the `project1` directory, you could take multiple approaches:

- Absolute path: `cd /Users/dan/Documents/project1` — This has the benefit of working from any current working directory, but can also be a lot to type depending on the path
- Relative path: `cd Documents/project1` — This is more concise, but requires you to know how to get to the directory from where you currently are

There are a couple special "paths":

- `/` root directory - Think of your filesystem like a tree: all files in your filesystem are connected to the root directory through one or more parent directories
- `.` current directory — This can be useful for relative paths: `cd ./Documents/project1` is equivalent to `cd Documents/project1`
- `..` parent directory - This is important in traversing closer to the root directory:
  - Try `cd ..` — Use `pwd` to confirm which directory you are now in
  - You can chain these together to ascend multiple levels at once: Try `cd ../..`
- `~` home directory — This is a reference to your user's directory. If your username is `dan`, the command `cd ~` will navigate to `/Users/dan`

Question: What are three different ways to change to the home directory?

Try to navigate to a directory with a space in the name: For example: `cd Documents/my project`
Normally, we'd expect to not see much feedback from the cd command. For most shell commans, _no news is good news_. If you don't see any feedback in your terminal, it usually means things are working correctly. In this case however, you might get an error!

Remember: the shell uses whitespace to separate arguments for the cd command. Our directory has a space in the name so when we specify the directory, the shell treats it as two arguments. We need to "escape" the space in the name to tell the shell that the space is part of the same argument. We use the backslash `\` to escape special characters: `cd Documents/my\ project`

`ls` TODO

`mkdir` TODO

`env` TODO

`ps` TODO

`kill` TODO

`open` TODO
