function checkFirstNumber(){
    const num = document.getElementById("fnum").value;
    if(isNaN(num)){
        document.getElementById("notif").innerHTML = "Số thứ nhất không phải số thực."
    }
}
function checkSecondNumber(){
    const num = document.getElementById("snum").value;
    if(isNaN(num)){
        document.getElementById("notif").innerHTML = "Số thứ hai không phải số thực."
    }
}
function compute(){
    const fnum = document.getElementById("fnum").value;
    const snum = document.getElementById("snum").value;
    var result; 
    if(!isNaN(fnum) && !isNaN(snum)){
        if(document.getElementById("plus").checked == true){
            result = fnum + snum;
        }
        if(document.getElementById("minus").checked == true){
            result = fnum - snum;
        }
        if(document.getElementById("multiply").checked == true){
            result = fnum * snum;
        }
        if(document.getElementById("division").checked == true){
            result = fnum / snum;
        }
        if(result != null){
            document.getElementById("result").innerHTML = result;
        }else{
            document.getElementById("notif").innerHTML = "Chưa chọn phép tính";
        }
        
    }else{
        document.getElementById("notif").innerHTML = "Chưa đủ 2 số hợp lệ";
    }
}