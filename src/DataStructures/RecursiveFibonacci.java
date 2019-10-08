package DataStructures;

public class RecursiveFibonacci {

    public static int fibonacci(int num) {
        /*
            if the number given is 1 then the function returns 1;
         */
        if (num <= 1) {
            return 1;
        }
        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(5));
    }
}
