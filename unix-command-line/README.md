## The Command Line

`Bash` = `Bourne Again Shell` is a CLI (Command Line Interpreter) for UNIX system

### Why use the command line?

With command line, you have full control and a lot of flexibility

### Command line techniques & directory navigation

- `ls` : list
- `cd` : change directory
  - Documents 폴더로 이동하고 싶으면 doc 타이핑 후 tab키 누르면 자동완성된다
  - `~`는 root를 표시하는 거라 `cd ~`는 루트 폴더로 이동함
  - 커맨드 라인에선 커서를 ➡️ ⬅️ 키로 움직일 수 있는데 `option ⌥`키를 누르고 클릭하면 클릭한 위치로 커서가 이동함
- `control ⌃ + A` : move to the `beginning` of the line
- `control ⌃ + E` : move to the `end` of the line
- `control ⌃ + U` : `clear` the current command without executing it

<br>

### Creating, Opening and Removing files

- `mkdir <directory>` : diretory creation
- `touch <file.extension>` : file creation
- `open <file.extension>` : open application
- `open -a <application> <file.ext>` : specify application to open the file

<br>

- `pwd` : print working directory, it tells you your entire path & current folder location

<br>

- `rm <file.ext>` : delete file
- `rm *` : delete all the files inside of folder (always check which location you are in!)
- `rm -r <directory>` : delete directory
  - `rm -rf <file>` : remove, force

[Command line tutorial from Learn Enough](https://www.learnenough.com/command-line-tutorial)
