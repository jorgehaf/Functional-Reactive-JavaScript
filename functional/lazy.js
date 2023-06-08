function eager(a) {
	const fim = Date.now() + 2500;
	while (Date.now() < fim) {}

	const valor = Math.pow(a, 3);
	return function (b) {
		return valor + b;
	};
}

console.time("#1");
console.log(eager(3)(100));
console.log(eager(3)(100));
console.log(eager(3)(100));
console.timeEnd("#1");

console.time("#2");
const lazy = eager(3);
console.log(lazy(100));
console.log(lazy(100));
console.log(lazy(100));
console.timeEnd("#2");
