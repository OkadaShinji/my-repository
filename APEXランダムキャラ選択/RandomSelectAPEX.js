'use strict';
//HTMLファイルからidを取得し変数化
const userNameInput1=document.getElementById('userName1');
const userNameInput2=document.getElementById('userName2');
const userNameInput3=document.getElementById('userName3');
const randomSelectButton=document.getElementById('randomSelect');
const resultDivided=document.getElementById('result-area');

//空欄の場合は処理を終了する
randomSelectButton.onclick=()=>{
  const userName1=userNameInput1.value
  const userName2=userNameInput2.value
  const userName3=userNameInput3.value

  const allUserName=[userName1,userName2,userName3];

  if(userName1.length===0 || userName2.length===0 || userName3.length===0){
    return;
  };

//抽選結果表示エリア
resultDivided.innerText="";
//前回の結果を空欄に置き換え
const header=document.createElement('h3');
header.innerText='抽選結果';
resultDivided.appendChild(header);

const paragraph=document.createElement('p');
let result1=randomSelect(allUserName[0]);
let result2=randomSelect(allUserName[1]);
let result3=randomSelect(allUserName[2]);
let allresult=[result1,result2,result3];
paragraph.innerText=allresult
resultDivided.appendChild(paragraph);
};

const legends=[
  '{userName}の使用レジェンドはアッシュです',
  '{userName}の使用レジェンドはオクタンです',
  '{userName}の使用レジェンドはクリプトです',
  '{userName}の使用レジェンドはコースティックです',
  '{userName}の使用レジェンドはシアです',
  '{userName}の使用レジェンドはジブラルタルです',
  '{userName}の使用レジェンドはバンガロールです',
  '{userName}の使用レジェンドはパスファインダーです',
  '{userName}の使用レジェンドはヒューズです',
  '{userName}の使用レジェンドはブラッドハウンドです',
  '{userName}の使用レジェンドはホライゾンです',
  '{userName}の使用レジェンドはマッドマギーです',
  '{userName}の使用レジェンドはミラージュです',
  '{userName}の使用レジェンドはライフラインです',
  '{userName}の使用レジェンドはランパートです',
  '{userName}の使用レジェンドはレイスです',
  '{userName}の使用レジェンドはレヴナントです',
  '{userName}の使用レジェンドはローバです',
  '{userName}の使用レジェンドはワットソンです',
  '{userName}の使用レジェンドはヴァルキリーです'
 ];

//配列内から重複なくランダムに数字を取り出す関数
function randomNumberSelect(array, num) {
    var a = array;
    var t = [];
    var r = [];
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
      var i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    return r;
}
function randomSelect(allUserName){
  const numberArray=[
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
    ];
 
  const selectedNumber=randomNumberSelect(numberArray,3);

 let result1=legends[selectedNumber[0]];
 let result2=legends[selectedNumber[1]];
 let result3=legends[selectedNumber[2]];

 result1=result1.replaceAll('{userName}',allUserName[0]);
 result2=result2.replaceAll('{userName}',allUserName[1]);
 result3=result3.replaceAll('{userName}',allUserName[2]);

const allResult=[result1,result2,result3];

 return allResult
};

/*
userName1および2がundinedとなるが3は正常に表示される
☞userName1,2が3により上書きされている？
ⅠrandomSelectをループさせて三回行う　×
ⅡrandomSelectを3つに分割しそれぞれのuserNameについて処理を行う　×
Ⅲ
*/