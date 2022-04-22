function moveZeros(arr) {
  let newArr = []
  newArr = arr.filter((item)=>{
    return item !== 0
  })
  let newArr2 = arr.filter((item)=>{
    return item === 0
  })
  let newArr3 = newArr.concat(newArr2)
  return newArr3

}


moveZeros([false,1,0,1,2,0,1,0,3,0,"a"])