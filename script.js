function convert()
{
   let elementH1=document.getElementById('captionConverter')
   console.log(elementH1.innerHTML)
   let fromValue=+document.getElementById('inputFrom').value
   let to=document.getElementById('inputTo');
   let res;
   if (elementH1.innerHTML=='метры в сантиметры')  res=fromValue*100;
   if (elementH1.innerHTML=='километры в метры')  res=fromValue*1000;
   if (elementH1.innerHTML=='дюймы в сантиметры')  res=fromValue*2.54;
   if (elementH1.innerHTML=='мили в километры')  res=fromValue*1.609;
   to.value=res;
}

/*
function convert1(){
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
*/
 function load(){
    convert()
    //convert2()
    //convert3()
    //convert4()
 }

 function changeConverter()
 {
   //console.log(document.getElementById('captionConverter').innerHTML);
   //console.log(document.getElementById('selectConverter').value);
   document.getElementById('captionConverter').textContent=document.getElementById('selectConverter').value;
   convert();
 }