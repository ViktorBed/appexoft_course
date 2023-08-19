// function data(data, callback) {
//   if (data) {
//     constresult = callback(data);
//     return result;
//   }else{
//     return "No data try again"
//   }
// }

// function stringLength(str) {
//   return str.length;
// }

// const input = "I am curently learning javascript";
// const length = data(input, stringLength);
// console.log("String, length", length);

const num = [1, 3, 14, 111, 242, 535, 124, 2, 3, 5];

// const doublenum = num.map((nums) => {
//   return num * 2;
// });

// const evenNums = num.filter((num) => num % 2 === 0);

// const more = num.filter((num) => num >= 50);
// console.log(more);

// const reduceM = num.reduce((acc, index) => acc + index, 0);
// console.log(reduceM);

// const sortNum = num.sort((a,b)=> a-b)

// const find535 = num.find((item) => item === 535);
// console.log(find535);

// async function getData() {
//   let url = "https://swapi.dev/api/films/";
//   try {
//     const responce = await fetch(url);
//     const data = responce.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

let url = "https://swapi.dev/api/films/";
async function AsyncgetData() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP-Error:" + response.statusText);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}
AsyncgetData();
