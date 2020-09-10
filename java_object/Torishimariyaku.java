public class Torishimariyaku implements Shain {
	@Override
	public void standUp() {
		System.out.println("取締役がふんぞり帰って立ちました。");
	}
	public void salary(int salary) {
		System.out.println("私の給料は" + salary * 4 + 2 + "円です。");
	}

}