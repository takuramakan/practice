public class Shacho {
	public static void main(String[] args) {
		Shain shain = null;
		if (args[0].equals("Tanto")) {
			shain = new Tanto();
		}
		if (args[0].equals("Shunin")) {
			shain = new Shunin();
		}
		if (args[0].equals("Bucho")) {
			shain = new Bucho();
		}
		if (args[0].equals("Torishimariyaku")) {
			shain = new Torishimariyaku();
		}
		shain.standUp();
		int salary = Integer.parseInt(args[1]);
		shain.salary(salary);
	}
}