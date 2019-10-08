package DataStructures;

public class RecursiveFibonacci {
    /*
        Recursive approach involves solving sub-problems which in turn solve the main problem.
        The 1st number in fibonacci series is 1. Therefore fib(1) should give 1;

        sample fibonacci series       ⤵ - 5th fibonacci number
                             1 1 2 3 5 8 13 21
          1st fibonacci number⤴       ️
     */

        /*
            fib(1) = 1;
            fib(2) = fib(1) + fib(1)
            fib(3) = fib(2) + fib(1)  ↓ notice some pattern here ?🤔 => fib(n) = fib(n-1) + fib(n-2)
            fib(4) = fib(3) + fib(2)
            fib(5) = fib(5) + fib(3)    same case here fib(n) = fib(n-1) + fib(n-2)
            fib(6) = fib(5) + fib(8)
             ... and so on


            The pattern follows fibonacci sequence
            fib(n) = fib(n-1) + fib(n-2);
         */

    public static int fib(int num) {
        /*
            if the number given is 1 then the function returns 1;
         */
        if (num <= 1) {
            return 1;
        }
        return fib(num - 1) + fib(num - 2);
    }

    public static void main(String[] args) {
        System.out.println(fib(5));
    }
}
