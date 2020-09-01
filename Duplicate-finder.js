function dupCheck(text){
  let sortedText = text.split(/(?!$)/u).sort();
  let output = [];
  for (let i = 0; i < sortedText.length-1; i ++) {
    if (sortedText[i + 1] === sortedText[i]){
      output.push(sortedText[i]);
    }
  }
  let uniqueOutput = [...new Set(output)]
  return uniqueOutput;
}
console.log(dupCheck("AaaaCcccffv"));
