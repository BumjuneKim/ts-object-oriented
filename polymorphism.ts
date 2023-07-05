class Sparta_6th {
	public language: string;
	public framework: string;

	constructor(language: string, framework: string) {
		this.language = language
		this.framework = framework
	}
	public study() {
		console.log(`우리는 ${this.language}언어를 기반으로 ${this.framework} 공부하고 있어요`)
	}
}

class NodeClass extends Sparta_6th {
	constructor() {
		super('JAVASCRIPT', 'express');
	}

	public makeAPI() {
		console.log(`${this.framework}에서 API를 만듭니다.`)
	}
}

class ReactClass extends Sparta_6th {
	constructor() {
		super('JAVASCRIPT', 'react');
	}

	public makeCSS() {
		console.log('프론트엔드 작업을 위해 CSS 구성합니다.')
	}
}

class SpringClass extends Sparta_6th {
	constructor() {
		super('JAVA', 'spring');
	}

	public useJVM() {
		console.log('JVM 환경에서 스프링이 돌아갑니다.')
	}
}

let polymorphism: Sparta_6th = new NodeClass()
polymorphism.study()

polymorphism = new ReactClass()
polymorphism.study()

polymorphism = new SpringClass()
polymorphism.study()
