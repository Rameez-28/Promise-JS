// //promise function
// let vcomplete = true;
// let vprom = new Promise(function (vresolved, vreject) {
//   if (vcomplete) {
//     vresolved("I am succesful");
//   } else {
//     vreject("I am failed");
//   }
// });
// console.log(vprom);

// //promise in normal function
// function vprom(vcomplete) {
//     return new Promise(function (vresolved, vreject) {
//         if (vcomplete) {
//           vresolved("I am succesful");
//         } else {
//           vreject("I am failed");
//         }
//       });

// }
// console.log(vprom(false));

// //promise using then and catch and settimeout
// function vprom(vcomplete) {
//   return new Promise(function (vresolved, vreject) {
//     console.log(`Fetching data, please wait...`);
//     setTimeout(() => {
//       if (vcomplete) {
//         vresolved("I am succesful");
//       } else {
//         vreject("I am failed");
//       }
//     }, 2000);
//   });
// }
// vprom(false)
//   .then((vresult) => {
//     console.log(vresult);
//   })
//   .catch((verror) => {
//     console.log(verror);
//   });

// //calculate value using promise using then and catch and settimeout
// function vprom(a,b) {
//     return new Promise(function (vresolved, vreject) {
//       console.log(`Fetching data, please wait...`);
//       let c = a/b;
//       setTimeout(() => {
//         if (a,b) {
//           vresolved(`Your ans is ${c}`);
//         } else {
//           vreject("Cannot calculate");
//         }
//       }, 2000);
//     });
//   }
//   vprom(5,2)
//     .then((vresult) => {
//       console.log(vresult);
//     })
//     .catch((verror) => {
//       console.log(verror);
//     });

//calculate value using ajax jquerry using then and catch and settimeout
function vprom() {
  return new Promise(function (vresolved, vreject) {
    console.log(`Fetching data, please wait...`);
    setTimeout(() => {
      $.get("https://jsonplaceholder.typicode.com/posts", 
      function (vdata) {
          vresolved(vdata);
      }).fail(verr =>{
          reject(`Fail to load JSON.`);
      });
    }, 2000);
  });
}
vprom().then((vresult) => {
    console.log(vresult);
  })
  .catch((verror) => {
    console.log(verror);
  });
