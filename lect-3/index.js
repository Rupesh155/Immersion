
// function


function add(nam1,nam2){
    console.log(nam1,nam2)
}
add('hello','hii')
add()

let obj={
    name:"iphone",
    price:130000,
    isBuy:true
}


  function add(info){
    console.log('my phone is' + info.name)
    console.log(`my phone is ${info.name}`)
  }

  let obj1={
    name:"iphone",
    price:130000,
    isBuy:true
}
add(obj1)



let obj3={
    java:40,
    fullS:80,
    total:function(){
        console.log(this.java+this.fullS)
    }

}
obj3.total()


