// 2. Даний рядок типу 'var_text_hello'. Зробіть із нього текст 'VarTextHello'.

function transformText(inputText) {
    const words = inputText.split('_');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const transformedText = capitalizedWords.join('');

    return transformedText;
}

console.log(transformText('var_text_hello')); // VarTextHello
