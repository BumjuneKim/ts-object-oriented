
class Overloading {

	calculateNumber(num1: number, num2: number) {}

	calculateNumber(num1: number, num2: string) {}
}


// 오버라이딩 예제
class Parent {
	public play() {
		console.log('친구들이랑 술마셔야지')
	}
}

class Children extends Parent {
	public play() {
		console.log('친구들이랑 게임방가야지')
	}
}

const obj = new Children()
console.log(obj)
