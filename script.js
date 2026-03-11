let input = document.getElementById("input");
let equal = document.getElementById("equal");

// numbers and operators
document.querySelectorAll(".input-button").forEach(btn=>{
  btn.onclick = ()=> input.value += btn.value;
});

// result
equal.onclick = ()=>{
  try{
    input.value = eval(input.value);
  }catch{
    alert("Invalid Input");
  }
};

// scientific functions
const sciFunctions = {
  pow: x => x**2,
  cube: x => x**3,
  sqrt: x => Math.sqrt(x),
  sin: x => Math.sin(x).toFixed(2),
  cos: x => Math.cos(x).toFixed(2),
  tan: x => Math.tan(x).toFixed(2),
  log: x => Math.log(x).toFixed(2),
  ln: x => Math.log(x),
  inverse: x => 1/x,
  percent: x => x/100,
  pi: () => 3.1416,
  e: x => Math.exp(x).toFixed(2),
  fact: x => {
    let r=1;
    for(let i=1;i<=x;i++) r*=i;
    return r;
  }
};

// apply functions
Object.keys(sciFunctions).forEach(id=>{
  let btn = document.getElementById(id);
  if(btn){
    btn.onclick = ()=>{
      let val = Number(input.value);
      input.value = sciFunctions[id](val);
    };
  }
});


document.getElementById("clear").onclick = ()=>{
  input.value = "";
}

// remove last character
document.getElementById("erase").onclick = ()=>{
  input.value = input.value.slice(0,-1);
}

// toggle calculators
let simple = document.getElementById("simpleCalc");
let sci = document.getElementById("sciCalc");

document.getElementById("showSci").onclick = ()=>{
  simple.style.display="none";
  sci.style.display="grid";
};

document.getElementById("showSimple").onclick = ()=>{
  sci.style.display="none";
  simple.style.display="grid";
};