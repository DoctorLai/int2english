# int2english
NPM JS Convert Integers to English as described https://helloacm.com/c-coding-exercise-convert-integer-to-english-words/

## Installation
```
npm install int2english
```

## Usage
```
var IntegerToEnglish = require('int2english').IntegerToEnglish;
console.log(IntegerToEnglish(0));
console.log(IntegerToEnglish(1));
console.log(IntegerToEnglish(11));
console.log(IntegerToEnglish(1234));
console.log(IntegerToEnglish(9999234));
console.log(IntegerToEnglish(-9999234));
```

Output:
```
Zero
One
Eleven
One Thousand Two Hundred Thirty Four
Nine Million Nine Hundred Ninety Nine Thousand Two Hundred Thirty Four
Negative Nine Million Nine Hundred Ninety Nine Thousand Two Hundred Thirty Four
```

## Tests
```
npm test
```

## Online Tool
You may also like [Online Converter from Arabic Numerals (Integers) to English Words with API](https://helloacm.com/tools/convert-arabic-numerals-to-english-words/).

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D
