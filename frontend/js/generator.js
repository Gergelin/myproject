var Foods = ['alma','kenyér','málygombóc'];
var eloEtelTipusok = ['leves','krémleves'];
var foEtelTipusok = ['pörkölt','főzelék'];

function _ragVal_vel(word){
    var generated_word = '';

    var lastLetter        = _getLastLetter(word);
    var hangrend          = _getRagHangrend(word);
    var lastLetterIsVowel = _isMaganHangzo(lastLetter);
    var ragFirstLetter    = 'v';
    var rag = '';

    switch (hangrend){
        case 'magas':
            rag = 'el';
            break;
        case 'mely':
            rag = 'al';
            break;
    }

    if(lastLetterIsVowel){
        word           = _doUtolsoMaganhangzoHasonulas(word);
    }else{
        if (lastLetter.length > 1) {
            word = _removeLastY(word);
        }
        ragFirstLetter = lastLetter;
    }

    rag = ragFirstLetter+rag;

    generated_word = word+rag;

    return generated_word;
}

function replaceAt(word, index, character) {
    return word.substr(0, index) + character + word.substr(index+character.length);
}

function _removeLastY(word){
    return word.slice(0, - 1);
}

function _doUtolsoMaganhangzoHasonulas(word){
    var lastLetter = _getLastLetter(word);
    switch (lastLetter){
        case 'a':
            word = replaceAt(word,word.length-1,'á');
            break;
        case 'e':
            word = replaceAt(word,word.length-1,'é');
            break;
    }
    return word;
}

function _getLastLetter(word){
    var result = word.slice(-1);
    var utolso3betu = word.slice(-3);
    var lastLetter1 = utolso3betu.charAt(0);
    var lastLetter2 = utolso3betu.charAt(1);
    var lastLetter3 = utolso3betu.charAt(2);
        if(lastLetter3 === 'y'){
            result = word.slice(-2);
        }
        if(lastLetter1 === lastLetter2 && !_isMaganHangzo(lastLetter3)){ //vizsgálni hogy 2 jegyű mássalhangzóról van e szó
            result = '';
        }
    return result;
};

function _getRagHangrend(word){

    var highVowels = _highVowels();
    var lowVowels = _lowVowels();
    var last;
    var result;

    for (var i = 0, len = word.length; i < len; i++) {
        if(highVowels.indexOf(word.charAt(i)) >= 0 ){
            result = 'magas' || 'vegyes';
            last = 'magas';
        }
        if(lowVowels.indexOf(word.charAt(i)) >= 0 ){
            result = 'mely' || 'vegyes';
            last = 'mely';
        }
        if(result === 'vegyes'){ result = last; break;}
    }

    return result;
}

function _highVowels(){
    return ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
}

function _lowVowels(){
    return ['a', 'á', 'o', 'ó', 'u', 'ú'];
}

function _isMaganHangzo(letter){
    if(letter.length > 1) return false;
    var vowels = _highVowels().concat(_lowVowels());
    if(vowels.indexOf(letter) < 0) return false;
    return true;
}

function _ragSzarmazas(word){

}

function _ragEtelTipus(){

}

function _getInputs(){

}

var foodNamePatterns = {
    'simple' : ['main','mainFoodType'],
    'simpleWith' : ['main','mainFoodType','koret']
};

function _random(max){
    return Math.floor((Math.random() * max) + 1);
};

function generateFoodNameByPattern(pattern,Words){
console.log('--a-->',pattern);
    if(pattern['main']){
        alert('has main');
    }



//    var main = Words[_random(Words.length)];
//        Words[];
//    pattern['MAIN'] = main;
}

function _getNamePattern(Words){

    var result = Words[0];

    if(Words.length === 1){
        result = generateFoodNameByPattern(foodNamePatterns.simple,Words);
    }

    return result;

}

function doGenerate(){
    var word = document.getElementById('word').value;
    var result_div = document.getElementById('result');

    var test = [word];
    var test2 = [word, 'répa'];


    var generated_word = _getNamePattern(test);
//    var generated_word = _ragVal_vel(word);
//    console.log(word);
    result_div.innerHTML = generated_word;
}