data=[]
 function fetch(){
     var http= new XMLHttpRequest();
     http.onreadystatechange= function(){
         if(http.readyState==4 && http.status==200){
             data=JSON.parse(http.responseText);
             loaddata(data);
         }
     };
     http.open("GET","https://restcountries.eu/rest/v2/all",false);
     http.send();
 }

 function seachme() {
    const box = document.getElementById("searchbox");
    const table = document.getElementById("mtab");
    table.innerHTML = "";
    document.getElementById("wai").innerHTML="Please wait while loading......";
    var result = data.filter(function(e) {
      return e.name
        .toLowerCase()
        .trim()
        .startsWith(box.value.toLowerCase().trim());
    });
    loaddata(result);
  }



 function loaddata(data){
     document.getElementById("wai").innerHTML=""
     var table= document.getElementById("mtab");
     var row= "<tr><td><h4>S.No</h4></td><td><h4>Name</h4></td><td><h4>Flag</h4></td></tr>";
     table.innerHTML+=row;
     for (var i=0; i<data.length; i++){
         var row= "<tr><td>"+(i+1)+"</td><td>"+data[i].name+"</td><td><img src='"+data[i].flag+"'height='42' width='84' style='padding:5px;'></tr>";
         table.innerHTML+=row;
     }
}