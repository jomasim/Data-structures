package DataStructures;

public class RecursiveFibonacci {
    /*
            Recursive approach involves solving sub-problems which in turn solve the main problem.
            A Recursive function calls itself over and over again until a base condition is met that breaks the loop.
            The 1st number in fibonacci sequence is 1. Therefore fib(1)/fib(0) should give 1;

            sample fibonacci series     ⤵ - 5th fibonacci number
                               1 1 2 3 5 8 13 21
            1st fibonacci number⤴       ️


            For instance, to find the third-3 fibonacci number in the sequence
            you need to get the sum of two previous numbers. The two previous
            are the 2nd and 1st numbers in the sequence i.e n-1, n-2;

            fib(3) = fib(2) + fib(1);
            fib(2) => will resolve to the 2nd number in the sequence.
            fib(1) => will resolve to the 1st number in the sequence.
            Since we know fib(1)/fib(0) will resolves 1 we can use it to solve
            the other problems above i.e fib(2)  & fib (1);

            fib(2) = fib(1) + fib(0); => 1 + 1 = 2; ↓ notice some pattern here ?🤔 => fib(n) = fib(n-1) + fib(n-2)
            fib(3) = fib(2) + fib(1); => 2 + 1 = 3;

            Thus, the above problem follow a general formula below:
            fib(n) = fib(n-1) + fib(n-2)
            The above approach solves the problem recursively. Think of it as a 'bottom-top approach'
            where the you need to solve related sub-problems in the tree starting from fib(1) which you know is 1,
            then going up-wards to solve problems like fib(2) + fib(1);

            fib(0) = 1;
            fib(1) = 1;
            fib(2) = fib(1) + fib(0) => 2
            fib(3) = fib(2) + fib(1) => 3  ↓ notice some pattern here ?🤔 => fib(n) = fib(n-1) + fib(n-2)
            fib(4) = fib(3) + fib(2) => 5
            fib(5) = fib(4) + fib(3) => 8
            fib(6) = fib(5) + fib(4) => 13
             ... and so on

         */

    public static int fib(int num) {
        /*
            if the number given is 1 then the function returns 1;
         */
        if (num <= 1) { // base case
            return 1;
        }
        return fib(num - 1) + fib(num - 2); // recursive case
    }

    public static void main(String[] args) {
        System.out.println(fib(5));
    }
}
/*
    More notes on recursion vs looping
    https://www.quora.com/Is-recursion-faster-than-loops
    https://medium.com/@williambdale/recursion-the-pros-and-cons-76d32d75973a

 */