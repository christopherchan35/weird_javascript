# Section 2: Execution Contexts and Lexical Environments
Syntax Parser: A program that reads your code and determines what it does and if its grammar is valid

Lexical Environment: Where something sits physically in the code you write

Execution Context: A wrapper to help manage the code that is running

Object: Collection of name/value pairs

Execution Context is created in 2 phases:
- Creation Phase:
  - Global Object
  - 'this'
  - Outer Environment
  - Setup memory space for variables and functions called "Hoisting"
    - The functions themselves are saved into memory and can be called but variables only have their names saved with the value of Undefined
- Execution Phase:
  - Runs your code, line by line. Interpreting, Converting, Compiling, and Executing

Undefined is a special value in Javascript, but it actually takes up space in memory and is the value initially set by JS.

Single Threaded, Synchronous Execution:
  - Single Threaded: One command at a time
  - Synchronous: One at a time and (in order)

Scope Chain: code will look for matching variable or function from the outer lexical environment

Let: Introduced in ES6, allows you to set variables with ```let``` instead of ```var```. The difference is they are both stored in memory during the creation phase, but with ```let```, you cannot call the variable before the line where it is declared has been executed. Whereas with ```var``` you can call it beforehand but you will just get the value ```undefined```

JS looks to finish the execution contexts before handling the event context (ie. click events)
