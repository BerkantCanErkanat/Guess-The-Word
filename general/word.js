class Word {
    constructor(trueForm){
        this.trueForm = trueForm.turkishToLower();
        this.mixedForm = this.trueForm.split('').sort(function(){return 0.5-Math.random()}).join('');
    }
    
}
String.prototype.turkishToLower = function(){
    var string = this;
    var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
    string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function(letter){ return letters[letter]; })
    return string.toLowerCase();
}