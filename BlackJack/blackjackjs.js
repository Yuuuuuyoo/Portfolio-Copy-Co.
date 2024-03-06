// 大変申し訳ないが、コメントは充分に記述出来ていない。
// このアプリケーションは大学の単位習得の為講義の課題で制作した。
// 正直に、
// コメントを書くほどの時間は無く、それ以前に構想を練りながらコードを書いたは良いが、
// 複雑化しておりコメントを軽々と後付け出来なかった。
// とは言え、実務でそれが通用しない事は重々に認識している。この件を反省点して受け止め、
// 周りと協働する事を視野に入れて今後コードを書くよう改める。

"use strict";

let sng = document.getElementById("startnewgame");
sng.innerHTML = "Start New Game?";

// ボタン設定
let startbtn = document.getElementById("startbtn");
let hittbtn = document.getElementById("hitbtn");
let staybtn = document.getElementById("staybtn");

let gamef = 0;


startbtn.innerHTML = "Start";
hittbtn.innerHTML = "";
staybtn.innerHTML = "";


// 初期セット
startbtn.style.cssText = 'width: 150px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer;';
staybtn.style.cssText = '';
hitbtn.style.cssText = '';


// マウスが離れたら
startbtn.addEventListener('mouseleave',function(){
    if(gamef==0){
        startbtn.style.cssText = 'width: 150px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer;';
    }else{
        startbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; background: #eeeeee; text-align: center; color: #000000;  transform: translateY(3px);';
    }
});
staybtn.addEventListener('mouseleave',function(){
    if(gamef==0){
        staybtn.style.cssText = '';
    }else{
        staybtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer;';
    }
});
hitbtn.addEventListener('mouseleave',function(){
    if(gamef==0){
        hitbtn.style.cssText = '';
    }else{
        hitbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer;';
    }
});

// マウスが上に来たら
startbtn.addEventListener('mouseover',function(){
    if(gamef==0){
        startbtn.style.cssText = 'width: 150px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9;';
    }else{
        startbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; background: #eeeeee; text-align: center; color: #000000;  transform: translateY(3px);';
    }
});
staybtn.addEventListener('mouseover',function(){
    if(gamef==0){
        staybtn.style.cssText = '';
    }else{
        staybtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9;';
    }
});
hitbtn.addEventListener('mouseover',function(){
    if(gamef==0){
        hitbtn.style.cssText = '';
    }else{
        hitbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9;';
    }
});

// マウスボタンが押されている時
startbtn.addEventListener('mousedown',function(){
    if(gamef==0){
        startbtn.style.cssText = 'width: 150px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 1px #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9; transform: translateY(3px);';
    }else{
        startbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; background: #eeeeee; text-align: center; color: #000000;  transform: translateY(3px);';
    }
});
staybtn.addEventListener('mousedown',function(){
    if(gamef==0){
        staybtn.style.cssText = '';
    }else{
        staybtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 1px #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9; transform: translateY(3px);';
    }
});
hitbtn.addEventListener('mousedown',function(){
    if(gamef==0){
        hitbtn.style.cssText = '';
    }else{
        hitbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 1px #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9; transform: translateY(3px);';
    }
});

// マウスボタンを押した後
startbtn.addEventListener('mouseup',function(){
    if(gamef==0){
        startbtn.style.cssText = 'width: 150px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9;';
    }else{
        startbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; background: #eeeeee; text-align: center; color: #000000;  transform: translateY(3px);';
    }
});
staybtn.addEventListener('mouseup',function(){
    if(gamef==0){
        staybtn.style.cssText = '';
    }else{
        staybtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9;';
    }
});
hitbtn.addEventListener('mouseup',function(){
    if(gamef==0){
        hitbtn.style.cssText = '';
    }else{
        hitbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer; opacity: 0.9;';
    }
});


startbtn.addEventListener("click", function() {
    if(startbtn.innerHTML == "Start"){
        newgame();
    }
});

staybtn.addEventListener("click", function() {
    if(startbtn.innerHTML == "or"){
        s=1;
        endgame();
    }
});
hitbtn.addEventListener("click", function() {
    if(startbtn.innerHTML == "or"){
        s=0;
        showgame();
    }
});

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let i, t, y, s;
let tt=0, yy=0, pp;
let c;


// SetImages
let img = new Image();
img.src = "cardset.png";

img.onload = function(){
    ctx.drawImage(img, 0, 960, 800, 600, 0, 0, 800, 600);    
    ctx.drawImage(img, 800, 960, 800, 600, 0, 0, 800, 600);

    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 200);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 200);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 200);

    ctx.fillStyle = 'hsl(0,80%, 60%)';
    ctx.font="120px serif";
    ctx.fillText("START GAME", 3, 350);
    ctx.strokeStyle = 'hsl(0,100%, 20%)';
    ctx.strokeText("START GAME", 3, 350);
}

let cards = Array(52);
let p = Array(52);


function newgame(){
    gamef=1;
    startbtn.innerHTML = "or";
    hittbtn.innerHTML = "Hit";
    staybtn.innerHTML = "Stay";
    startbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; background: #eeeeee; text-align: center; color: #000000;  transform: translateY(3px);';
    staybtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer;';
    hitbtn.style.cssText = 'width: 100px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer;';
    sng.innerHTML = "";




    ctx.drawImage(img, 0, 960, 800, 600, 0, 0, 800, 600);

    // shuffle
    for(let j=0; j<52; j++){
        cards[j] = j+1;
    }
    console.log(cards);
    for(let j=cards.length-1; j>0; j--){
        let r = Math.floor(Math.random() *(j+1));
        let tmp = cards[j];
        cards[j] = cards[r];
        cards[r] = tmp;
    }
    for(let j=0; j<52; j++){
        if((cards[j]%13)<10){
            p[j] = cards[j]%13;
        }else{
            p[j] = 10;
        }
        if(p[j]==0) p[j]=10;
    }
    console.log(cards);
    console.log(p);

    i=3;
    s=0;
    showgame();

}

function showgame(){
    ctx.drawImage(img, 0, 960, 800, 600, 0, 0, 800, 600);
    deck();

    ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
    ctx.drawImage(img, 1600, 960, 160, 240, 405, 50, 120, 180);
    ctx.drawImage(img, 1760, 960, 160, 240, 405, 50, 120, 180);

    ctx.fillStyle = 'hsl(200,100%, 10%)';
    ctx.font="120px serif";
    ctx.fillText("?", 430, 185);

    ctx.fillStyle = 'hsl(0,100%, 100%)';

    ctx.font="20px serif";
    ctx.fillText("*Dealer's Cards*", 330, 35);
    ctx.font="18px serif";
    ctx.fillText("Dealer's total", 80, 80);
    ctx.font="32px serif";
    if(p[1]==1){
        ctx.fillText(1 +" or "+11+" + ?", 55, 130);
    }else if(p[1]>10){
        ctx.fillText(p[1]+" + ?", 92, 130);
    }else{
        ctx.fillText(p[1]+" + ?", 82, 130);
    }

    ctx.font="20px serif";
    ctx.fillText("*Your Cards*", 346, 310);
    ctx.font="20px serif";
    ctx.fillText("Your total", 630, 420);

    i++;
    if(i==4){
        t = p[0]+p[2];
        if(p[0]==1){
            y = 11+p[2];
        }else if(p[2]==1){
            y = p[0]+11;
        }else{
            y = p[0]+p[2];
        }
    }
    tt=0;
    yy=0;

    if(i==4){
        pcards(cards, 2);
    }else{
        pcards(cards, i-2);
    }

    for(let j=4;j<i;j++){
        if(t==y){
            if((p[j])==1 && (t+yy)<=10){
                yy += 11;
            }else{
                yy += p[j];
            }
        }
        tt += p[j];
    }

    ctx.fillStyle = 'hsl(0,100%, 100%)'; 
    ctx.font="38px serif";
    if(y == 21){
        ctx.fillText(y, 655, 480);
        pp = y;
    }else if(s==1){
        if(tt < yy && (t+yy)<=21){
            pp = t+yy;
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }else if(t < y && (y+tt)<=21){
            pp = y+tt;
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }else{
            pp = t+tt;
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }
    }else{
        pp = t+tt;
        if(t==y){
            if((tt != yy) && (t+yy)<=21){
                if((t+tt) <10){
                    if((t+yy) <10){
                        ctx.fillText((t+tt)+" or "+(t+yy), 623, 480);
                    }else{
                        ctx.fillText((t+tt)+" or "+(t+yy), 613, 480);
                    }
                }else{
                    ctx.fillText((t+tt)+" or "+(t+yy), 603, 480);
                }
                pp = t+yy;
            }else{
                if(pp <10){
                    ctx.fillText(pp, 665, 480);
                }else{
                    ctx.fillText(pp, 655, 480);
                }
            }
        }else if((y+tt)<=21){
            if((t+tt) <10){
                if((y+tt) <10){
                    ctx.fillText((t+tt)+" or "+(y+tt), 623, 480);
                }else{
                    ctx.fillText((t+tt)+" or "+(y+tt), 613, 480);
                }
            }else{
                ctx.fillText((t+tt)+" or "+(y+tt), 603, 480);
            }
            pp = y+tt;
        }else{
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }
    }

    if((t+tt)>=21 || (y+tt)==21 || (t+yy)==21){
        endgame();
    }
}
function endgame(){

    ctx.drawImage(img, 0, 960, 800, 600, 0, 0, 800, 600);
    deck();

    ctx.fillStyle = 'hsl(0,100%, 100%)';

    ctx.font="20px serif";
    ctx.fillText("*Dealer's Cards*", 330, 35);
    ctx.font="18px serif";
    ctx.fillText("Dealer's total", 80, 80);

    ctx.font="20px serif";
    ctx.fillText("*Your Cards*", 346, 310);
    ctx.font="20px serif";
    ctx.fillText("Your total", 630, 420);

    ctx.fillStyle = 'hsl(0,100%, 100%)'; 
    ctx.font="38px serif";
    if(y == 21){
        ctx.fillText(y, 655, 480);
        pp = y;
    }else if(s==1){
        if(tt < yy && (t+yy)<=21){
            pp = t+yy;
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }else if(t < y && (y+tt)<=21){
            pp = y+tt;
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }else{
            pp = t+tt;
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }
    }else{
        pp = t+tt;
        if(t==y){
            if((tt != yy) && (t+yy)<=21){
                if((t+tt) <10){
                    if((t+yy) <10){
                        ctx.fillText((t+tt)+" or "+(t+yy), 623, 480);
                    }else{
                        ctx.fillText((t+tt)+" or "+(t+yy), 613, 480);
                    }
                }else{
                    ctx.fillText((t+tt)+" or "+(t+yy), 603, 480);
                }
                pp = t+yy;
            }else{
                if(pp <10){
                    ctx.fillText(pp, 665, 480);
                }else{
                    ctx.fillText(pp, 655, 480);
                }
            }
        }else if((y+tt)<=21){
            if((t+tt) <10){
                if((y+tt) <10){
                    ctx.fillText((t+tt)+" or "+(y+tt), 623, 480);
                }else{
                    ctx.fillText((t+tt)+" or "+(y+tt), 613, 480);
                }
            }else{
                ctx.fillText((t+tt)+" or "+(y+tt), 603, 480);
            }
            pp = y+tt;
        }else{
            if(pp <10){
                ctx.fillText(pp, 665, 480);
            }else{
                ctx.fillText(pp, 655, 480);
            }
        }
    }

    if(i==4){
        pcards(cards, 2);
    }else{
        pcards(cards, i-2);
    }


    let dt=0;
    let dy=0;
    dt = p[1]+p[3];
    if(p[1]==1){
        dy = 11+p[3];
    }else if(p[3]==1){
        dy = p[1]+11;
    }else{
        dy = p[1]+p[3];
    }
    let dtt=0;
    let d=i;
    if(dy<17){
        for(;(dy+dtt)<17;d++){
            if(p[d]==1 && (dy+dtt)<=10){
                dtt += 11;
            }else{
                dtt = dtt+p[d];
                if((dy+dtt)>21) dy = dt;
            }
        }
    }

    dcards(cards, i, (d-i+2));

    ctx.fillStyle = 'hsl(0,100%, 100%)';
    ctx.font="32px serif";
    ctx.fillText((dy+dtt), 115, 130);

    ctx.drawImage(img, 800, 960, 800, 600, 0, 0, 800, 600);
    if(s==0){
        if(pp>21){
            bursted();
        }else{
            if(dy==21){
                if(y != 21){
                    L();
                }
            }else if((dy+dtt)==21 && y != 21){
                T();
            }else{
                Blackjack();
            }
        }
    }else{
        if((dy+dtt)==21 || (pp<(dy+dtt) && (dy+dtt)<21)){
            L();
        }else if(pp==(dy+dtt)){
            T();
        }else{
            W();
        }
    }

    // 初期セット
    gamef=0;
    startbtn.innerHTML = "Start";
    hittbtn.innerHTML = "";
    staybtn.innerHTML = "";
    startbtn.style.cssText = 'width: 150px; margin: 0 auto; padding: 10px; border-radius: 4px; background: #004466; box-shadow: 0 4px 0 #0884ad; text-align: center; color: #ffffff; cursor: pointer;';
    staybtn.style.cssText = '';
    hitbtn.style.cssText = '';
    sng.innerHTML = "Start New Game?";
}

function W(){

    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.fillStyle = 'hsl(0,80%, 60%)';
    ctx.font="87px serif";
    ctx.fillText("You Win!!!", 200, 320);
    ctx.strokeStyle = 'hsl(0,100%, 90%)';
    ctx.strokeText("You Win!!!", 200, 320);

}

function T(){

    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.fillStyle = 'hsl(35,100%, 50%)';
    ctx.font="72px serif";
    ctx.fillText("This Game is a Tie!", 75, 305);
    ctx.strokeStyle = 'hsl(35,100%, 20%)';
    ctx.strokeText("This Game is a Tie!", 75, 305);

}

function L(){

    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.fillStyle = 'hsl(205,100%, 40%)';
    ctx.font="87px serif";
    ctx.fillText("You Lose...", 180, 310);
    ctx.strokeStyle = 'hsl(205,80%, 70%)';
    ctx.strokeText("You Lose...", 180, 310);

}

function Blackjack(){

    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);

    ctx.fillStyle = 'hsl(0,100%, 50%)';
    ctx.font="120px serif";
    ctx.fillText("Blackjack!", 120, 320);
    ctx.strokeStyle = 'hsl(0,100%, 20%)';
    ctx.strokeText("Blackjack!", 120, 320);

    ctx.drawImage(img, 800, 960, 800, 600, 280, 360, 240, 50);
    ctx.drawImage(img, 800, 960, 800, 600, 280, 360, 240, 50);
    ctx.drawImage(img, 800, 960, 800, 600, 280, 360, 240, 50);
    ctx.fillStyle = 'hsl(0,100%, 70%)';
    ctx.font="38px serif";
    ctx.fillText("You Win!!!", 305, 400);
    ctx.strokeStyle = 'hsl(0,100%, 40%)';
    ctx.strokeText("You Win!!!", 305, 400);

}

function bursted(){

    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);
    ctx.drawImage(img, 800, 960, 800, 600, 0, 200, 800, 150);

    ctx.fillStyle = 'hsl(210,100%, 35%)';
    ctx.font="120px serif";
    ctx.fillText("You bursted", 60, 320);
    ctx.strokeStyle = 'hsl(205,80%, 10%)';
    ctx.strokeText("You bursted", 60, 320);

    ctx.drawImage(img, 800, 960, 800, 600, 280, 360, 240, 50);
    ctx.drawImage(img, 800, 960, 800, 600, 280, 360, 240, 50);
    ctx.drawImage(img, 800, 960, 800, 600, 280, 360, 240, 50);    

    ctx.fillStyle = 'hsl(205,100%, 40%)';
    ctx.font="38px serif";
    ctx.fillText("You Lose...", 305, 400);
    ctx.strokeStyle = 'hsl(205,80%, 20%)';
    ctx.strokeText("You Lose...", 305, 400);

}




function deck(){
    ctx.drawImage(img, 1600, 960, 160, 240, 640, 20, 80, 120);
    ctx.drawImage(img, 1600, 960, 160, 240, 638, 22, 80, 120);
    ctx.drawImage(img, 1600, 960, 160, 240, 636, 24, 80, 120);
    ctx.drawImage(img, 1600, 960, 160, 240, 634, 26, 80, 120);
    ctx.drawImage(img, 1600, 960, 160, 240, 632, 28, 80, 120);
    ctx.drawImage(img, 1600, 960, 160, 240, 630, 30, 80, 120);
}

function dcards (cards, k, c){

    if(c==2){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 405, 50, 120, 180);
    }else if(c==3){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 340, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 405, 50, 120, 180);
    }else if(c==4){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 318, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 362, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+1]-1)%13)*160), (Math.floor((cards[k+1]-1)/13)*240), 160, 240, 405, 50, 120, 180);
    }else if(c==5){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 307, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 340, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+1]-1)%13)*160), (Math.floor((cards[k+1]-1)/13)*240), 160, 240, 372, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+2]-1)%13)*160), (Math.floor((cards[k+2]-1)/13)*240), 160, 240, 405, 50, 120, 180);
    }else if(c==6){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 301, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 327, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+1]-1)%13)*160), (Math.floor((cards[k+1]-1)/13)*240), 160, 240, 353, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+2]-1)%13)*160), (Math.floor((cards[k+2]-1)/13)*240), 160, 240, 379, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+3]-1)%13)*160), (Math.floor((cards[k+3]-1)/13)*240), 160, 240, 405, 50, 120, 180);
    }else if(c==7){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 296, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 318, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+1]-1)%13)*160), (Math.floor((cards[k+1]-1)/13)*240), 160, 240, 339, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+2]-1)%13)*160), (Math.floor((cards[k+2]-1)/13)*240), 160, 240, 361, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+3]-1)%13)*160), (Math.floor((cards[k+3]-1)/13)*240), 160, 240, 382, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+4]-1)%13)*160), (Math.floor((cards[k+4]-1)/13)*240), 160, 240, 405, 50, 120, 180);
    }else if(c==8){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 296, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 318, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+1]-1)%13)*160), (Math.floor((cards[k+1]-1)/13)*240), 160, 240, 339, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+2]-1)%13)*160), (Math.floor((cards[k+2]-1)/13)*240), 160, 240, 361, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+3]-1)%13)*160), (Math.floor((cards[k+3]-1)/13)*240), 160, 240, 382, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+4]-1)%13)*160), (Math.floor((cards[k+4]-1)/13)*240), 160, 240, 404, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+5]-1)%13)*160), (Math.floor((cards[k+5]-1)/13)*240), 160, 240, 425, 50, 120, 180);
    }else if(c==9){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 253, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 296, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+1]-1)%13)*160), (Math.floor((cards[k+1]-1)/13)*240), 160, 240, 318, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+2]-1)%13)*160), (Math.floor((cards[k+2]-1)/13)*240), 160, 240, 339, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+3]-1)%13)*160), (Math.floor((cards[k+3]-1)/13)*240), 160, 240, 361, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+4]-1)%13)*160), (Math.floor((cards[k+4]-1)/13)*240), 160, 240, 382, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+5]-1)%13)*160), (Math.floor((cards[k+5]-1)/13)*240), 160, 240, 404, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+6]-1)%13)*160), (Math.floor((cards[k+6]-1)/13)*240), 160, 240, 425, 50, 120, 180);
    }else if(c==10){
        ctx.drawImage(img, (((cards[1]-1)%13)*160), (Math.floor((cards[1]-1)/13)*240), 160, 240, 253, 50, 120, 180);
        ctx.drawImage(img, (((cards[3]-1)%13)*160), (Math.floor((cards[3]-1)/13)*240), 160, 240, 275, 50, 120, 180);
        ctx.drawImage(img, (((cards[k]-1)%13)*160), (Math.floor((cards[k]-1)/13)*240), 160, 240, 296, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+1]-1)%13)*160), (Math.floor((cards[k+1]-1)/13)*240), 160, 240, 318, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+2]-1)%13)*160), (Math.floor((cards[k+2]-1)/13)*240), 160, 240, 339, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+3]-1)%13)*160), (Math.floor((cards[k+3]-1)/13)*240), 160, 240, 361, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+4]-1)%13)*160), (Math.floor((cards[k+4]-1)/13)*240), 160, 240, 382, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+5]-1)%13)*160), (Math.floor((cards[k+5]-1)/13)*240), 160, 240, 404, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+6]-1)%13)*160), (Math.floor((cards[k+6]-1)/13)*240), 160, 240, 425, 50, 120, 180);
        ctx.drawImage(img, (((cards[k+7]-1)%13)*160), (Math.floor((cards[k+7]-1)/13)*240), 160, 240, 447, 50, 120, 180);
    }
}

function pcards (cards, c){
    
    if(c==2){
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 235, 320, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 405, 320, 160, 240);

    }else if(c==3){
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 70, 320, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 100, 320, 160, 240);

    }else if(c==4){
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 40, 320, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 70, 320, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 100, 320, 160, 240);

    }else if(c==5){
        ctx.drawImage(img, (((cards[6]-1)%13)*160), (Math.floor((cards[6]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 40, 320, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 70, 320, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 100, 320, 160, 240);
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 130, 320, 160, 240);

    }else if(c==6){
        ctx.drawImage(img, (((cards[7]-1)%13)*160), (Math.floor((cards[7]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 10, 320, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 40, 320, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 70, 320, 160, 240);
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 100, 320, 160, 240);
        ctx.drawImage(img, (((cards[6]-1)%13)*160), (Math.floor((cards[6]-1)/13)*240), 160, 240, 130, 320, 160, 240);

    }else if(c==7){
        ctx.drawImage(img, (((cards[8]-1)%13)*160), (Math.floor((cards[8]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 10, 270, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 40, 270, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 70, 270, 160, 240);
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 100, 270, 160, 240);
        ctx.drawImage(img, (((cards[6]-1)%13)*160), (Math.floor((cards[6]-1)/13)*240), 160, 240, 130, 270, 160, 240);
        ctx.drawImage(img, (((cards[7]-1)%13)*160), (Math.floor((cards[7]-1)/13)*240), 160, 240, 85, 320, 160, 240);

    }else if(c==8){
        ctx.drawImage(img, (((cards[9]-1)%13)*160), (Math.floor((cards[9]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 10, 270, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 40, 270, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 70, 270, 160, 240);
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 100, 270, 160, 240);
        ctx.drawImage(img, (((cards[6]-1)%13)*160), (Math.floor((cards[6]-1)/13)*240), 160, 240, 130, 270, 160, 240);
        ctx.drawImage(img, (((cards[7]-1)%13)*160), (Math.floor((cards[7]-1)/13)*240), 160, 240, 55, 320, 160, 240);
        ctx.drawImage(img, (((cards[8]-1)%13)*160), (Math.floor((cards[8]-1)/13)*240), 160, 240, 85, 320, 160, 240);

    }else if(c==9){
        ctx.drawImage(img, (((cards[10]-1)%13)*160), (Math.floor((cards[10]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 10, 270, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 40, 270, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 70, 270, 160, 240);
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 100, 270, 160, 240);
        ctx.drawImage(img, (((cards[6]-1)%13)*160), (Math.floor((cards[6]-1)/13)*240), 160, 240, 130, 270, 160, 240);
        ctx.drawImage(img, (((cards[7]-1)%13)*160), (Math.floor((cards[7]-1)/13)*240), 160, 240, 55, 320, 160, 240);
        ctx.drawImage(img, (((cards[8]-1)%13)*160), (Math.floor((cards[8]-1)/13)*240), 160, 240, 85, 320, 160, 240);
        ctx.drawImage(img, (((cards[9]-1)%13)*160), (Math.floor((cards[9]-1)/13)*240), 160, 240, 115, 320, 160, 240);

    }else if(c==10){
        ctx.drawImage(img, (((cards[11]-1)%13)*160), (Math.floor((cards[11]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 10, 270, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 40, 270, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 70, 270, 160, 240);
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 100, 270, 160, 240);
        ctx.drawImage(img, (((cards[6]-1)%13)*160), (Math.floor((cards[6]-1)/13)*240), 160, 240, 130, 270, 160, 240);
        ctx.drawImage(img, (((cards[7]-1)%13)*160), (Math.floor((cards[7]-1)/13)*240), 160, 240, 25, 320, 160, 240);
        ctx.drawImage(img, (((cards[8]-1)%13)*160), (Math.floor((cards[8]-1)/13)*240), 160, 240, 55, 320, 160, 240);
        ctx.drawImage(img, (((cards[9]-1)%13)*160), (Math.floor((cards[9]-1)/13)*240), 160, 240, 85, 320, 160, 240);
        ctx.drawImage(img, (((cards[10]-1)%13)*160), (Math.floor((cards[10]-1)/13)*240), 160, 240, 115, 320, 160, 240);

    }else if(c==11){
        ctx.drawImage(img, (((cards[12]-1)%13)*160), (Math.floor((cards[12]-1)/13)*240), 160, 240, 320, 320, 160, 240);
        ctx.drawImage(img, (((cards[0]-1)%13)*160), (Math.floor((cards[0]-1)/13)*240), 160, 240, 10, 270, 160, 240);
        ctx.drawImage(img, (((cards[2]-1)%13)*160), (Math.floor((cards[2]-1)/13)*240), 160, 240, 40, 270, 160, 240);
        ctx.drawImage(img, (((cards[4]-1)%13)*160), (Math.floor((cards[4]-1)/13)*240), 160, 240, 70, 270, 160, 240);
        ctx.drawImage(img, (((cards[5]-1)%13)*160), (Math.floor((cards[5]-1)/13)*240), 160, 240, 100, 270, 160, 240);
        ctx.drawImage(img, (((cards[6]-1)%13)*160), (Math.floor((cards[6]-1)/13)*240), 160, 240, 130, 270, 160, 240);
        ctx.drawImage(img, (((cards[7]-1)%13)*160), (Math.floor((cards[7]-1)/13)*240), 160, 240, 25, 320, 160, 240);
        ctx.drawImage(img, (((cards[8]-1)%13)*160), (Math.floor((cards[8]-1)/13)*240), 160, 240, 55, 320, 160, 240);
        ctx.drawImage(img, (((cards[9]-1)%13)*160), (Math.floor((cards[9]-1)/13)*240), 160, 240, 85, 320, 160, 240);
        ctx.drawImage(img, (((cards[10]-1)%13)*160), (Math.floor((cards[10]-1)/13)*240), 160, 240, 115, 320, 160, 240);
        ctx.drawImage(img, (((cards[11]-1)%13)*160), (Math.floor((cards[11]-1)/13)*240), 160, 240, 145, 320, 160, 240);
    }

}