Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order 
from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for 
merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces 
single-item arrays to feed into merge. Good luck!

Merge Sort is a classic divide and conquer problem.
The following steps are involved:
Divide: We break the array from the middle using recusion until we’re left with 1 element.
Conquer: Then we sort these small arrays.
Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.
Time complexity of Merge Sort is O(nlogn).
Space complexity of Merge Sort is O(n).
It’s a stable algorithm.
