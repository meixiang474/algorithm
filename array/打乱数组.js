const shuffle = arr => {
  for(let i = arr.length - 1; i >= 0; i--){
    let rIndex = Math.floor(Math.random()*(i+1));
    [arr[rIndex], arr[i]] = [arr[i], arr[rIndex]]
  }
  return arr
}

const shuffle1 = arr => arr.sort((a,b) => Math.random() > .5 ? -1 : 1)
