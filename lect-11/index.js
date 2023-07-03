// let step1 = function() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//         console.log('Selecting image');
//         resolve('image.jpg');    	
//       }, 4000);
//     })
//   }
  
//   let step2 = function(image) {
//       return new Promise( (resolve, reject)=> {
//         setTimeout(()=> {
//         console.log(`Applying filter to image ${image}`);
//         resolve('filtered-uimage.jpg');
//       }, 2000);
//     })
//   }
  
//   step1()
//   .then((image)=> {
//       step2(image).then((filteredImage)=> {
//         console.log(filteredImage);
//     })
//   })

//  let promise = new Promise((resolve,reject)=>{
//     // resolve('gla')
//     var isBool=false
//     if(isBool){
//         resolve('resolve')
//     }
//     else{
//   reject('reject')
//     }
// })
// promise.then((data)=>{
//     console.log(data)

// }).catch((err)=>{
//     console.log(err)

// })




// let promise =  new Promise((resolve,reject)=>{
//     let isBool=false
//     if(isBool){
//  resolve('resolve')
//     }
//     else{
//         reject('reject')
//     }
    
// })
// promise.then((data)=>{
//     console.log(data)


// }).catch((err)=>{
//     console.log(err)

// })




// Promise


    let promise= new Promise((resolve,reject)=>{
        var isBool=false
        if(isBool){
            resolve('resolve')
        }
        else{
        reject('reject') 
        }
       
     })
     promise.then((data)=>{
        console.log(data)

     }).catch((err)=>{
        console.log(err)

     })







