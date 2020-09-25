const doAsync = () => {
  status = true
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if(status){
  //       resolve("Hello Arkademy")
  //     }else{
  //       reject("Error")
  //     }
  //   }, 2000);
  // })
}

const helloWorld = async() => {
  try{

    const result = await doAsync()
    console.log(result)

  }catch(error){
    console.log(error)
    
  }finally{
    console.log("Selesai")
  }
}

helloWorld()