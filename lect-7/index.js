// function a(fn) {
//     console.log('Inside a');
//     fn();
//   }
  
//   function b() {
//     console.log('Inside b');
//   }
  
//   a(b);
//   // Inside a
//   // Inside b



// function a(fn) {
//     console.log('Inside a');
//     fn();
//   }
  
//   // function b() {
//   //   console.log('Inside b');
//   // }
  
//   a(function() {
//     console.log('Inside b');
//   });
//   // Inside a
//   // Inside b


// function a(fn) {
//     console.log('Inside a');
//     fn();
//   }
  
//   // function b() {
//   //   console.log('Inside b');
//   // }
  
//   a(function() {
//     console.log('Inside b');
//   });
//   // Inside a
//   // Inside b



// function getString(arr) {
//     let result = [];
  
//     for (let item of arr) {
//       if (typeof item === 'string') {
//         result.push(item);
//       }
//     }
  
//     return result;
//   }
  
//   function getNumber(arr) {
//     let result = [];
  
//     for (let item of arr) {
//       if (typeof item === 'number') {
//         result.push(item);
//       }
//     }
  
//     return result;
//   }
  
  
  
//   function getBoolean(arr) {
//     let result = [];
  
//     for (let item of arr) {
//       if (typeof item === 'boolean') {
//         result.push(item);
//       }
//     }
  
//     return result;
//   }
  
//   let arr = [120, 'Hello', 90, false, 'World', true, 20, 80, 'Messi'];
  
//   console.log(getString(arr));
//   console.log(getNumber(arr));
//   console.log(getBoolean(arr));