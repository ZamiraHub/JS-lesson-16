//map,filter,reduce

const fruits=['banana','apple','kiwi','orange','kiwi']

const upperFruits=fruits.map((fr)=>fr.charAt(0).toUpperCase()+fr.slice(1).toLowerCase())
const upeerfruits=fruits.map((fr)=>{
    console.log(fr,'fr');
    return fr.charAt(0).toUpperCase()+fr.slice(1).toLowerCase()
    
})
console.log(upperFruits);

// const minFruits=fruits.filter((fr)=>fr.length>5)
const minFruits=fruits.filter((fr)=>fr!=='kiwi')
console.log(minFruits);
// const letters=fruits.reduce((total,fr)=>total+fr.length,0)
const letters=fruits.reduce((total,fr)=>{
    console.log(total,"total");
    console.log(fr,fr.length);
   return total+fr.length
     
},0)
console.log(letters);

const students=[
   {id:1,name:'Alibak',age:16},
   {id:2,name:'Alinur',age:17},
   {id:3,name:'Atabek',age:20},
]
const mature=students.filter((stud)=>stud.age<18)
.reduce((total,st)=>total+st.age,0)
console.log(mature);

const totalAge=students.reduce((total,student)=>student.age+total,0)
console.log(totalAge);





