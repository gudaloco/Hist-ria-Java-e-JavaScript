public class Main5 extends Thread {
    public void run() {
        System.out.println("Tarefa emsegundo plano em Java!");
    }

    public static void main(String[] args) {
        Main tarefa = new Main();
        tarefa.start(); // Inicia a thread
    }
}