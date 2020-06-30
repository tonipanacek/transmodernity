const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

// const initializeIntroVar = (() => {
//   Promise.resolve()
//   .then(() => {
//     if (window.location.pathname === '/' && !localStorage.getItem('intro')) {
//       localStorage.setItem('intro', 'false');
//       window.location.replace('/intro')
//     } else {
//       console.log('hi toni')
//     }
//   })
// })();


// const checkIntroVar = (() => {

// })
