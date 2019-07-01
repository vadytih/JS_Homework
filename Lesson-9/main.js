var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

function deepClone(obj) {
    var cleanObj = {};

    for (var key in obj) {
        var currentValue = obj[key];

        if (Array.isArray(currentValue)) {
            cleanObj[key] = [];

            for (var i = 0; i < currentValue.length; i++) {
                if (typeof (currentValue[i]) == 'object' && !Array.isArray(currentValue[i]) && !!currentValue[i]) {
                    cleanObj[key].push(deepClone(currentValue[i]));
                    continue;
                }
                cleanObj[key].push(currentValue[i]);
            }

            continue;
        }

        if (typeof (currentValue) == 'object') {
            cleanObj[key] = deepClone(currentValue);
            continue;
        }

        cleanObj[key] = currentValue;
    }

    return cleanObj;
}


var clonedObj = deepClone(initialObj);


clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);
