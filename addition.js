function fibonacci(sumfibneed) {
  if (sumfibneed > 0){
    let fibbonachi = [0, 1]
    let sumfib = 1
    for (var i = 0; sumfib <= sumfibneed; i++){
      for(var x = 0; x < fibbonachi.length ; x++){
         sumfib += fibbonachi[x];
      }
      fibbonachi[i + 2] = fibbonachi[i] + fibbonachi[i + 1]
    }
    fibbonachi[i + 2] = fibbonachi[i] + fibbonachi[i + 1]
    return fibbonachi
  }
}
//this function returns one more fibonaccy number than previous one
