function moveZeros(arr) {
  let newArr = []
  arr.sort((a)=>{
    if(a === 0 && a!==false) {
      return -1
    }
  })
  newArr = arr.filter((item,index)=>{
    if(item === 0) {
      console.log(item,index)
      newArr.push(arr.slice(0,index+1)) 
      return newArr
    }
  })
  arr.splice(0,newArr.length)
  newArr = arr.concat(newArr)

}


moveZeros([false,1,0,1,2,0,1,0,3,0,"a"])