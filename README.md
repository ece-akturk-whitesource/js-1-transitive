# White Source - Effective Usage Analysis Demo

This is a simple demo of Whitesource's Effective Usage Analysis.

## The demo

This is a very simple Node project that has 1 dependency with 2 known high _transitive_ dependencies

## Results

### Safe Func

When only importing and invoking `safeFunc` found in the [transitive dep package]() results in a _success_. EUA is able to pick up that we are not invoking the vulnerable function found in `lodash`.

![image](results/safeFunc.png)

### Vulnerable Func

When only importing and invoking `vulnerableFunc` found in the [transitive dep package]() results in a _failure_. EUA incorrectly marks that we are _not vulnerable_ to the `lodash` vulnerability

![image](results/vulnerableFunc.png)
"# js-1-transitive" 
