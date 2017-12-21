# Problem Solving Approach
The approach we will focus on will involve a series of phases. Starting with Setup Phase where you will clarify your understanding, plan a strategy and refine that strategy before starting to code and finishing with Implementation Phase where you turn your plan into code. 
## Setup Phase
This is the first phase of problem solving. It is important to make sure you understand the problem, plan your approach, and analyze the quality of your approach.
### Parse
Here you should make sure that you have a clear understanding of inputs, outputs, constraints and a good name in verbNoun format. You want to make sure you know what data structure to use, what the structure looks like in code and a sample of data to use for testing. If the input or output format are not scalar then diagram them out. Being able to visualize the problem is crucial to understanding it.
### Strategize
Now is the time to come up with a plan of attack. Don't focus on coming up with the most eloquent solution at first. Create a high level plan for what procedures you will need to get from input to output. Once the high level plan makes sense, go deeper creating a step by step strategy using precise english. Once the pseudocode is complete spend time to analyze the big-o to get an idea of the quality of the solution. Think of ways to refactor into a better complexity (space or time). Adjust your high level and step by step strategies to match the revised solution.
## Implementation Phase
This phase is where you take the plan you came up with during setup and actually solve the problem.
### Plan the construction
Stub out the functions and variables you will need. Focus on good naming practices (self-describing code). Using your plan sketch out the specific transformation logic in each function and for each variable. Look for and factor out helper functions. This should get you to a place where you can start writing tests for your implementation. Create some intitial tests, at least one test per use case, covering required constraints and edge cases. Create test data as needed to drive tests.  
### Finish the implementation
Replace any sketched out logic left with working code, cleaning up and refining names as you go.  Add more tests as needed, working in a TDD style, going back and forth between writing a failing test and making it pass. If you need to debug your code start by reading log output and watching the stack. Use the browser debugging tools if available. Take your turn as the interpreter, read the code stating what values are at each step. Verbally walk through the code using precise, technical vocabulary making sure you can clearly explain what the code is doing at each line.
