var url = new URL(location.href);
var c = url.searchParams.get("app_name");
var imgList = [];
var currentPointer=0;

async function getAppData(){
    var html="";
    await fetch('/getApp?name='+c).then(res=>res.json()).then(data=>{
        html+='<div id="app-initial"><img id="app-initial-img" src="'+data.IMG+'" width="250px" alt="'+data.app_name+'"/>';
        html+='<section id="app-initial-details"><section><div id="app-title">'+data.app_name+'</div>';
        html+='<div>Type : '+data.category+'</div><div>Cost : '+data.cost+'</div></section><section>';
        html+='<br/><br/><a id="install-button" href="/'+data.apk+'">install</a>';
        html+='</section></section></div><hr/><section><div id="app-desc"><br/>'+data.about+'<br/><br/></div></section><hr/><section id="app-images-mobile"><section id="app-images-mobile-img">'
        +'</section><button id="next-button" onclick="next(\'<\')">&lt;</button><button id="next-button" onclick="next(\'>\')">&gt;</button></section><section id="app-images">';
        for(i=0;i<data.multiple.length;i++){
            imgList[imgList.length]=data.multiple[i];
            html+='<img src="'+data.multiple[i]+'" width="250px" alt="App Image"/>';
        }
        html+='</section><hr/><section style="padding:20px"><div id="app-feature-head">Features</div><section id="features-section" style=""><div><b>Upload Date :-</b>'
        html+=data.date+'</div><div><b>Version :-</b> '+data.version+'</div><div><b>Size :-</b> '+data.size;
        html+='</div></section></section>';
    });
    document.getElementById('app-zone').innerHTML=html;
    document.getElementById('app-images-mobile-img').innerHTML='<img src="'+imgList[currentPointer]+'" width=100% alt="App Images"/>';
}

function next(x){
    if(x=='<'){
        if(currentPointer==0){
            currentPointer=imgList.length-1;
        }else{
            currentPointer--;
        }
    }
    if(x=='>'){
        if(currentPointer==imgList.length-1){
            currentPointer=0;
        }else{
            currentPointer++;
        }
    }
    document.getElementById('app-images-mobile-img').innerHTML='<img src="'+imgList[currentPointer]+'" width=100% alt="App Images"/>';
}


getAppData(c);