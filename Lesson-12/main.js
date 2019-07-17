// 1.
var arr = ['Vasia', 'Piotr', 'Radibor'];

function getArr(arr) {
	return arr.map(function (newArr) {
		var obj = { name: newArr }
		return obj;
	});
}

console.log(getArr(arr));


// 2.
var arr = ['00', '13', '24'];

function getArr(arr) {
	return arr.reduce(function (divider, itemArr) {
		return divider + ' : ' + itemArr;
	}, 'Текущее время');
}

console.log(getArr(arr));


// 3.
var word = 'Москва';

function getStr(string) {
	var halsne = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
	var i = 0;

	string = string.toLowerCase().split('');

	string.forEach(function (item) {
		if (halsne.indexOf(item) != -1) {
			i++;
		}
	});

	return i;
}

console.log(getStr(word));

// 4.
var str = 'Мужик, увидев, как девушка за пару минут поменяла проколотое колесо, решил с ней познакомиться и поехал следом. И доехал. К клубу трансвеститов. HumorNet.ru';

function getText(text) {
	var result = '';

	text = text.split(/[.!?]/);

	for (var j = 0; j < text.length; j++) {
		text[j] = text[j].trim();
	}

	for (var i = 0; i < text.length; i++) {
		if (text[i].length == 0) {
			continue;
		}

		result += text[i] + ' ' + text[i].split(/[,:;-]/).join('').split(' ').join('').length + '\n';
	}

	return result;

}

console.log(getText(str));
