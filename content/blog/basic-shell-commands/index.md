---
title: Learn Basic Shell Commands
date: "2022-12-08T00:00:02.000Z"
description: The most important shell commands for web application development
---

_Prereq_: install [iTerm2](https://iterm2.com/)
_Prereq_: install [VSCode](https://code.visualstudio.com/)

Open iterm2 and try out a few commands:

When you open iterm2, it creates a new instance of a shell where you'll be able to run commands. The shell is responsible for accepting your input from the keyboard, interpretting that input, executing the appropriate commands based on your input, and surfacing any output from those commands.

`echo` prints its arguments to standard output. When you enter `echo hello world` on the command line, the first "token", `echo` is the name of the command to execute. In a shell, tokens are separated by whitespace. Additional tokens are called "arguments" and can be used to control the behavior of the command. "Standard output" refers to the destination where commands can write feedback on their execution. In this case, it's written back to the shell in your terminal. Type `echo hello world` and press enter:

```sh
$ echo hello world
hello world
```

_Note:_ in the sample above, the `$` is meant to indicate your command prompt. Lines starting with a `$` in a code block means that is a command that you type. Lines that don't start with a `$` indicate output from a command. In practice, your prompt may look different than a `$`. It's common for the prompt to include your username, the current directory, the name of your machine, or some combination of all three.

`pwd` print the absolute path of the current directory.

`cd` change directory to the specified path. If no path is specified, navigates to your home directory. A path can be specified to this command as a command line argument. For example: `cd mydir`.

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

`ls` Lists the contents of a directory. Without any arguments, will list both files and directories in the current directory. Use `cd` to navigate to a different directory, then type `ls` to list that directory's contents. `ls` also accepts a path to a directory as an argument. This allows you to list the contents of any directory in a single command without `cd`: Try `ls ~/Documents`.

By default, `ls` doesn't include hidden files and directories in it's output. A file or directory can be hidden by prefixing its name with a `.`. To see hidden files in a directory, we can specify the `-a` flag as an argument to the `ls` command. Try `ls -a ~` to see both visible and hidden files and directories in your home directory. Multiple flags can be specified at the same time. For example, `ls -aS1` will list the contents of a directory, including hidden files and directories, sorted by size (descending), and print each file or directory on a separate line. Another way of writing this could be `ls -a -S -1`. Flags can often be specified in any order.

`mkdir` Makes a new directory, accepts the directory name as an argument: Try: `mkdir my_directory` (where _my_directory_ is the name of the directory you'd like to create), then verify that the directory was created: `ls`. Navigate into the new directory with `cd my_directory`.

You can make several nested directories at once by specifying the `-p` flag and a path as an argument: `mkdir -p my/deeply/nested/directories` would create a structure that looks like this:

```
my
  deeply
    nested
      directories
```

`env` The shell provides details about the "environment" that are available commands that we run. `env` lists those environment details. Try out the `env` command without any arguments. You'll probably notice that it prints out a list of lots of text. Each item in this list is called an "environment variable". The item is actually a key-value pair separated by an `=` character. The token on the left side of the = is the name of the environment variable. It's a convention to name environment variables using all uppercase characters, but variables can be named using lowercase characters, numbers, or the underscore (`_`) character. A variable cannot start with a number however. The token on the right side of the = is the value of the variable. This can be anything! We reference variables by adding a `$` to their name.

You'll probably see an environment variable called `PATH` in the list. This is used by the shell to find the commands we've been using! Each command is an executable file somewhere on our filesystem. When we type the command, the shell finds that file and executes it. The `PATH` variable is a colon-delimited list of paths to directories that the shell will use to find an executable file with the same name as the commands we enter. If you list the contents of each of the directories in the `$PATH`, you'll find all of the commands we're using plus A LOT more.

Let's put some environment variables into practice:

```sh
$ echo The current user is $USER and its home directory is located at $HOME
The current user is dan and its home directory is located at /Users/dan
```

We can add a new variable to the environment using the `export` command:

```sh
$ export MY_VAR="My environment variable"
$ echo $MY_VAR
My environment variable
```

_Note:_ We're including quotes around the environment variable value because it contains whitespace. We use quotes to make sure the shell treats the text between the quotes as a single token.

Environment variables stay in the environment for the duration of the session. If you were to close your terminal window and open a new window, it would no longer have a value.

```sh
$ echo $MY_VAR

# In a new session, echo will only print a blank line because $MY_VAR is no
# longer set
```

_Note:_ In a shell, the `#` character is used to denote a comment. Anything following a `#` on the same line will be ignored by the shell. This can be useful for writing human-friendly notes.

`open` Accepts a path as an argument and uses the operating system's default application to open the path. For example, `open my_video.mov` might open the video file using Quicktime. `open index.html` would open the html file using the web browser.

`man` Accepts the name of a command as an argument and prints the manual page for the specified command using a program called `less`. The manual page lists a synopsis of what the command does as well as all the flags and arguments accepted by the command. Use the `q` key to quit the less program and return to the command line.

Let's add support for opening VSCode from the command line. Open VSCode and press `cmd+shift+P` to open the quick actions bar. Type `Shell command` and select "Install 'code' command in PATH". This will allow us to open VSCode from the command line by typing `code`.
