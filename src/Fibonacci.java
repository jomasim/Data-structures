public class Fibonacci {
    /*
      The function finds the nth number in the fibonacci series
      This is memory optimized function using for-loop with variables
      to store only two previous values(a,b) and the next value in the series(result)
     */

    public static int fibonacci(int num) {
        /*
            a is the first number in the fibonacci series
            b is the second number in the fibonacci series
            result is the third number in the series => addition of the two previous numbers(a+b)
         */

        int a = 1, b = 1, result = 0;

        /*
            if the number given is 1 then the function returns 1;
         */
        if (num <= 1) {
            return 1;
        }

        for (int i = 0; i <= num; i++) {
            result = a + b; // the next number in the series
            a = b;  // b becomes the new a;
            b = result; // result becomes the new b;

        }

        return result;
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(2));
    }
}
