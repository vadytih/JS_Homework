// 1

/^\+?(375\-?|8\-?0)(17|29|44|33|25)(\-?[1-9]\d{2})(\-?\d{2}){2}$/.test('+375-25-777-77-77');
/^\+?(375\-?|8\-?0)(17|29|44|33|25)(\-?[1-9]\d{2})(\-?\d{2}){2}$/.test('375299999999');
/^\+?(375\-?|8\-?0)(17|29|44|33|25)(\-?[1-9]\d{2})(\-?\d{2}){2}$/.test('8-044-444-44-44');
/^\+?(375\-?|8\-?0)(17|29|44|33|25)(\-?[1-9]\d{2})(\-?\d{2}){2}$/.test('8033-6666666');

// 2

function vowelLetters(text) {
    return text.match(/[аяыиоёуюэеaeiouy]/ig).length;
}

vowelLetters('Шла Саша по шоссе И сосала сУшку');