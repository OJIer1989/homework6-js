function modernFn(...agr) {
  let sum =0;
  for( let a = 0;a<agr.length;a++){
    sum += agr[a];
  }
  return  sum;
}
modernFn()
console.log(modernFn(2,3,4,3,2));





const Data = new Date();
console.log(Data);
const UserData = new Date(prompt(`Введите ваш день рождения`, `год,месяц,день`));
console.log(UserData);


function DataBirthday() {
  if(UserData.getDate() === Data.getDate() && UserData.getMonth() === Data.getMonth() ){
    console.log(`${UserData.getFullYear()}  С Дмем рождения!`);
  return 
  }
  else {
    console.log(`${UserData.getFullYear()} Ваш год рождения `);
  }
  
}
DataBirthday()






const sort2 = [true, 'false', 111, -0, 'true', false, { a: false }, [true, 'false']];
console.log(sort2);
const sort = [];
function SortBoolean(arr) {
  for(let a of arr.flat(2)){

    if (typeof a === 'boolean') {
      sort.push(a);
      }
    if (typeof a.a === 'boolean'){
      sort.push(a.a);
    }
  }
}
SortBoolean(sort2)
console.log(sort);




let UseYear = prompt("Ведите год")

function fixet(year) {
year= Math.ceil((year / 100))
 return console.log(`Вы выбрали ${year} Век`);
}
fixet(UseYear)



let MounthDate = new Date()
let Mounth = MounthDate.getMonth()
let MounthDays = [31,28,31,30,31,30,31,31,30,31,30,31]

function date1() {
 for(let a = 0;a<MounthDays.length;a++){
   if (MounthDays[Mounth] === 28) {
     return console.log(`в этом месяце ${MounthDays[Mounth]} дней , а в следующем ${MounthDays[Mounth] + 3} дней `);
   }
   if(MounthDays[Mounth] == 30) {
     return console.log(`в этом месяце ${MounthDays[Mounth]} дней , а в следующем ${MounthDays[Mounth] + 1} дней `);
   }
    if (MounthDays[Mounth] == 31) {
     return console.log(`в этом месяце ${MounthDays[Mounth]} дней , а в следующем ${MounthDays[Mounth] - 1} дней `);
   }
  
  }
}
date1(MounthDays)
console.log(MounthDays[Mounth]);














