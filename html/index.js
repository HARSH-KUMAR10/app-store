function app_page(x){
    location.href="/app?app_name="+x;
}

getAllAppsList();

async function getAllAppsList(){
    var html='';
    await fetch('/getAllAppsList').then(res=>res.json()).then(data=>{
        for(var i=0;i<data.length;i++){
            html+='<a href="/app?app_name='+data[i].app_name+'"><section id="app-card"> <img src="'+data[i].IMG+'" width="200px" alt="'+data[i].app_name+'" id="app-tile-img"/>';
            html+='<section id="app-stats"><b style="color: #444;" id="app-tile-name"><div>App Name : '+data[i].app_name+'</div></b>';
            html+='<div>Category: '+data[i].category+'</div><div>'+data[i].cost+'</div></section></section></a>';
        }
    });
    document.getElementById('app-zone').innerHTML=html;
}