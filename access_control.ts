class People {
	private 주민등록번호: string
	protected age: number
	public sex: string

	constructor(주민등록번호: string, age: number, sex: string) {
		this.주민등록번호 = 주민등록번호
		this.age = age
		this.sex = sex
	}

	public print() {
		console.log(this.주민등록번호)
		console.log(this.age)
		console.log(this.sex)
	}
}

const people = new People('050302-3203232', 20, 'm')
console.log(people.주민등록번호)
console.log(people.age)
console.log(people.sex)


class Someone extends People {
	public print() {
		console.log(this.주민등록번호)
		console.log(this.age)
		console.log(this.sex)
	}
}
