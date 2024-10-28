function convert(){
   let elementInputMetr, elementInputSm;
   elementInputMetr=document.getElementById("input_metr")
   elementInputSm=document.getElementById("input_sm")
   let m=elementInputMetr.value
   elementInputSm.value=m*100
}

function convert2(){
    let elementInputMetr, elementInputSm;
    elementInputMetr=document.getElementById("input_km")
    elementInputSm=document.getElementById("input_mt")
    let m=elementInputMetr.value
    elementInputSm.value=m*1000
 }

 function convert3(){
    let elementInputMetr, elementInputSm;
    elementInputMetr=document.getElementById("input_dm")
    elementInputSm=document.getElementById("input_sm1")
    let m=elementInputMetr.value
    elementInputSm.value=m*2.54
 }

 function convert4(){
   let elementInputMetr, elementInputSm;
   elementInputMetr=document.getElementById("input_ml")
   elementInputSm=document.getElementById("input_km1")
   let m=elementInputMetr.value
   elementInputSm.value=m*1.609
}

 function load(){
    convert()
    convert2()
    convert3()
    convert4()
 }