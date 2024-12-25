# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within a `useEffect` hook. The bug arises from updating the state variable (`count`) within the `useEffect`'s callback function, which is also present in its dependency array. This creates a continuous loop of rendering and state updates.

## Bug Description
The `useEffect` hook is designed to perform side effects based on changes to its dependency array.  However, if the state update inside the effect directly modifies a variable in the dependency array, an infinite loop occurs.

## Solution
The solution involves preventing the infinite loop by introducing a conditional check, an asynchronous operation using `setTimeout`, or restructuring the code to avoid unnecessary state updates inside the effect. 