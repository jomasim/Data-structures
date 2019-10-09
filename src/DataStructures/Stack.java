package DataStructures;

class Stack {
    private static final int MAX = 2;
    private int[] a = new int[MAX];
    private int top;

    /*
        Constructor
        Initialize top to -1; when the stack is empty;
     */
    Stack() {
        top = -1;
    }

    boolean isEmpty() {
        return (top < 0);
    }

    /*
        add an item into the stack
     */
    boolean push(int item) {
        /*
            check to confirm if we have reached the max before pushing a new item;
         */
        if (top >= MAX - 1) {
            System.out.println("Stack overflow");
            return false;
        } else {
            a[++top] = item;
            System.out.println(item + " pushed to the stack");
            return true;
        }
    }

    /*
        Deletes a top item in the stack
     */
    int pop() {
        if (top < 0) {
            return 0;
        } else {
            System.out.println(a[top] + " popped out of the stack");
            return a[top--];
        }
    }

    int peek() {
        if (top < 0) {
            System.out.println("Stack underflow");
            return 0;
        } else {
            System.out.println(a[top] + " is the top value");
            return a[top];
        }
    }
}

class Main {

    public static void main(String[] args) {
        Stack stack = new Stack();
        stack.push(3);
        stack.push(4);
        stack.pop();
        stack.peek();
    }
}