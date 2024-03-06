let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let datec = document.getElementById("datecanvas");
let c = datec.getContext("2d");

let DATEc = document.getElementById("DATEcanvas");
let C = DATEc.getContext("2d");

ctx.translate(250,250);

setInterval(clock,10);

function clock(){
    //リセット
    ctx.clearRect(-250,-250,250,250);
    c.clearRect(0,0,500,120);
    C.clearRect(0,0,500,120);

    //文字盤
    clockback();
    clockface();
    clocknumber();

    //日付の取得
    var now = new Date();
    var Y = now.getFullYear();
    var M = now.getMonth();
    var D = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    //二桁に変換
    h=niketa(h);
    m=niketa(m);
    s=niketa(s);

    //年月日の出力
    c.fillStyle = 'hsl(0,100%, 0%)';
    c.font="72px serif";
    c.textAlign = 'center';
    if(M==0) c.fillText(Y+"   Jan  "+D, 250, 70);
    if(M==1) c.fillText(Y+"   Feb  "+D, 250, 70);
    if(M==2) c.fillText(Y+"   Mar  "+D, 250, 70);
    if(M==3) c.fillText(Y+"   Apr  "+D, 250, 70);
    if(M==4) c.fillText(Y+"   May  "+D, 250, 70);
    if(M==5) c.fillText(Y+"   Jun  "+D, 250, 70);
    if(M==6) c.fillText(Y+"   Jul  "+D, 250, 70);
    if(M==7) c.fillText(Y+"   Aug  "+D, 250, 70);
    if(M==8) c.fillText(Y+"   Sep  "+D, 250, 70);
    if(M==9) c.fillText(Y+"   Oct  "+D, 250, 70);
    if(M==10) c.fillText(Y+"   Nob  "+D, 250, 70);
    if(M==11) c.fillText(Y+"   Dec  "+D, 250, 70);

    //現在時刻の表示（デジタル）
    C.font="42px sans-serif";
    C.textAlign = 'center';
    C.fillStyle = 'hsl(0,100%, 70%)';
    C.fillText(h+' : '+m+' : '+s, 250, 50);
    C.strokeStyle = 'hsl(210,100%, 0%)';
    C.strokeText(h+' : '+m+' : '+s, 250, 50);

    //現在時刻の表示（アナログ）
    ctx.rotate((Math.PI/180) * ((h*30)+(m/2)));
    hour();
    ctx.rotate((Math.PI/180) * (360-((h*30)+(m/2))));
    ctx.rotate((Math.PI/180) * ((6*m)+(s/10.0)));
    min();
    ctx.rotate((Math.PI/180) * (360-((6*m)+(s/10.0))));
    ctx.rotate((Math.PI/180) * (6*s));
    sec();
    ctx.rotate((Math.PI/180) * (360-(6*s)));

    simbol();
}

//二桁に変換
function niketa(number){
    if(number<10) number=("0"+number);
    return number;
}

//時計　時間　針
function hour(){
    ctx.beginPath();
    ctx.fillStyle = 'hsl(0,100%, 0%)';
    ctx.rect(-3, 0, 6, -150);
    ctx.fill();
}

//時計　分　針
function min(){
    ctx.beginPath();
    ctx.fillStyle = 'hsl(0,100%, 0%)';
    ctx.rect(-1.5, 0, 3, -200);
    ctx.fill();
}

//時計　秒　針
function sec(){
    ctx.beginPath();
    ctx.fillStyle = 'hsl(0,100%, 0%)';
    ctx.rect(-0.5, 50, 1, -285);
    ctx.fill();
}

//時計　真ん中　シンボル
function simbol(){
    ctx.beginPath();
    ctx.fillStyle = 'hsl(170,90%, 80%)';
    ctx.moveTo(-10, -10);
    ctx.arc(-10, -10, 10, 0, Math.PI * 2, true);
    ctx.moveTo(10, -10);
    ctx.arc(10, -10, 10, 0, Math.PI * 2, true);
    ctx.moveTo(-10, 10);
    ctx.arc(-10, 10, 10, 0, Math.PI * 2, true);
    ctx.moveTo(10, 10);
    ctx.arc(10, 10, 10, 0, Math.PI * 2, true);

    ctx.strokeStyle = 'hsl(140,80%, 20%)';
    ctx.moveTo(-10, -10);
    ctx.arc(-10, -10, 10, 0, Math.PI * 2, true);
    ctx.moveTo(10, -10);
    ctx.arc(10, -10, 10, 0, Math.PI * 2, true);
    ctx.moveTo(-10, 10);
    ctx.arc(-10, 10, 10, 0, Math.PI * 2, true);
    ctx.moveTo(10, 10);
    ctx.arc(10, 10, 10, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
}

//時計　文字盤　背景
function clockback(){
    ctx.beginPath();
    ctx.fillStyle = 'hsl(0,100%, 100%)';
    ctx.arc(0, 0, 249, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.strokeStyle = 'hsl(0,80%, 30%)';
    for(i=249; i>=243; i--){
        ctx.arc(0, 0, i, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}

//時計　文字盤
function clockface(){
    ctx.beginPath();
    ctx.fillStyle = 'hsl(0,0%, 70%)';

    for(i=1; i<=12; i++){
        ctx.rect(-2.5, -165, 5, -23);
        ctx.rect(-2.5, -230, 5, -8);
        ctx.fill();
        ctx.rotate((Math.PI / 180) * 30);
    }
}

//時計　文字盤　数字
function clocknumber(){
    ctx.fillStyle = 'hsl(0,100%, 0%)';

    ctx.font="38px serif";
    ctx.fillText(1, 95, -168);
    ctx.fillText(2, 173, -91);
    ctx.fillText(3, 200, 13);
    ctx.fillText(4, 168, 118);
    ctx.fillText(5, 94, 196);
    ctx.fillText(6, -10, 223);
    ctx.fillText(7, -115, 196);
    ctx.fillText(8, -191, 119);
    ctx.fillText(9, -220, 13);
    ctx.fillText(10, -202, -92);
    ctx.fillText(11, -124, -170);
    ctx.fillText(12, -21, -195);
}