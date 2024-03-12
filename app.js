// let cities = ['islamabad' , 'lahore' , 'peshawar' , 'sakar' , 'Attock']
// console.log(cities);

// let fruit = ['apple' , 'orange' , 'mango' , 'bannana' , 'grapes']
// console.log(fruit.indexOf('grapes'));
// console.log(fruit.includes('watermalon'));
// fruit.pop();
// fruit.push('watermalon');
// fruit.shift();
// fruit.unshift('watermalon');
// fruit.splice(2, 2 , 'peach' , 'watermalon')


// const fruit = ['apple' , 'mango' , 'orange' , 'grapes' , 'watermalon']
// const input = document.querySelector('#input');
// const h2 = document.querySelector('h2');

// function getfruit(){
//    console.log(input.value);
//    console.log(fruit.includes('apple'));
//    if(fruit.includes(input.value)){
//        console.log('fruit available hai')
//        h2.innerHTML = ` ${input.value} is available `
//    } else {
//        console.log('fruit available nahi hai');
//        h2.innerHTML = ` ${input.value} is not available `

//    }

//  input.value = ''


// }

const fruit = [ 'apple' , 'orange' , 'grapes' , 'watermalon' , 'bannana']

const input = document.querySelector('#input');
const h2 = document.querySelector('h2');

function getfruit(){
    console.log(input.value);
    console.log(fruit.includes('apple'));
    if (fruit.includes(input.value)){
        console.log('fruit available hai');
        h2.innerHTML = ` ${input.value} is available`
    }else{
        console.log('fruit available nhi hai');
        h2.innerHTML = ` ${input.value} is not available`
    }


    input.value = ''
}