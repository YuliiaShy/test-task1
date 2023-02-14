
let text =
  "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, The Tao of Programming";

function searchingFirstUniqueSymbol(text) {
    
  let words = text.split(" ");
  let uniqueSymbols = new String();
  
  for (let word of words) {
    
    for (let i = 0; i < word.length; i += 1) {
      let symbol = word[i];
      
      if (i === word.indexOf(symbol) && i === word.lastIndexOf(symbol)) {
        uniqueSymbols = uniqueSymbols + symbol;
        break;
      }
    }
  }
  return uniqueSymbols; 
};

let result = searchingFirstUniqueSymbol(text);
const unique = searchingFirstUniqueSymbol(result);
console.log("firstUniqueSymbol -", unique);

