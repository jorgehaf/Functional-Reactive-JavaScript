function composition(...fns) {
	return function (valor) {
		return fns.reduce(async (acc, fn) => {
			if (Promise.resolve(acc) === acc) return await fn(acc);
			return fn(acc);
		}, valor);
	};
}

function scream(text) {
	return text.toUpperCase();
}

function emphasize(text) {
	return `${text}!!!!`;
}

function slowDown(text) {
	return text.split("").join(" ");
}

result = composition(scream, emphasize, slowDown);

console.log(result("texto"));
