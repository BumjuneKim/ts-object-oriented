export class Time {
	private hour: number
	private minute: number
	private second: number

	constructor(hour: number, minute: number, second: number) {
		this.hour = hour
		this.minute = minute
		this.second = second
	}
}


const time = new Time(12, 15, 0)
console.log(time)
