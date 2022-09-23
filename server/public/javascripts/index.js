const calculator = document.querySelector('.calculator');
const expression = calculator.querySelector('.expression');

calculator.addEventListener('click', (e) => {
	const element = e.target;
	const className = element.className;

	if (element.tagName !== 'TH' && element.tagName !== 'TD') {
		return;
	}

	if (expression.innerHTML === 'Entrada inválida!') {
		expression.innerHTML = expression.innerHTML = '0';
	}

	if (className) {
		if (className === 'send' && expression.innerHTML !== '0') {
			const formattedExpression = expression.innerHTML.replaceAll(/÷/g, '/').replaceAll(/×/g, '*');

			try {
				// placeholder: aqui será implementada a chamada do microsserviço
				expression.innerHTML = new Function(`return ${formattedExpression}`)();
			} catch {
				expression.innerHTML = 'Entrada inválida!';
			}
		} else if (className === 'delete') {
			expression.innerHTML = expression.innerHTML.length > 1 ? expression.innerHTML.slice(0, -1) : '0';
		} else if (className === 'clear') {
			expression.innerHTML = '0';
		}
	} else {
		expression.innerHTML =
			expression.innerHTML !== '0'
				? `${expression.innerHTML}${element.innerHTML}`
				: `${element.innerHTML}`;
	}
});
