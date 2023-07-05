// Car Class
class Car {
	// modelName, price, color, owner는 property이다
	modelName: string
	price: number
	color: string
	owner: string

	constructor(owner: string, modelName: string, price: number, color: string) {
		this.owner = owner
		this.modelName = modelName
		this.price = price
		this.color = color
	}

	// public drive는 Method이다
	public drive(destination: string) {
		console.log(`${this.owner}(이/가) 소유한 자동차 ${this.modelName}가 ${destination}으로 향하고 있습니다.`)
	}
}

// new Car => 객체 생성
const myCar = new Car('김범준', '벤틀리', 1000000000, 'white')
myCar.drive('부산')
