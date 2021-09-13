let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*你好，我是韩
接下来我要展示样式了
首先需要准备一个红色正方形的div盒子
*/
.box{
border: 1px solid red;
position:fixed;
top:20px;
left:40%;
width: 600px;
height: 600px;
}
/*然后在盒子里面创造一个圆*/
.bigCircle{
width: 400px;
height: 400px;
position:fixed;
top:20px;
left:40%;
border-radius: 50%; 
box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3);
overflow: hidden;
}
/*消除红色正方形的div盒子的高度和宽度以及边框线*/
.box{
border:none;
position:fixed;
top:20px;
left:40%;
width:0;
height:0;
}
/*再给圆填充黑白两色*/
.bigCircle .black1{
width: 200px;
height: 400px;
background:#000;
}
.bigCircle .white1{
width: 200px;
height: 400px;
background:#fff;
}
/*创造一个固定在圆中间的长方形盒子*/
.displacement{
border:1px solid red;
height:400px;
width:200px;
position: fixed;
transform: translate(100px);
}
/*再在长方形盒子里面创建两个相同大小的圆*/
.mediumCircle{
border:1px solid green;
width: 200px;
height: 200px;
border-radius: 50%;
margin:0 auto;
display: flex;
justify-content: center;
align-items: center;
}
/*分别给两个圆填充黑白两色*/
.mediumCircleBlack{
background: #000;
}
.mediumCircleWhite{
background: #fff;
}
/*消除长方形盒子的边框以及盒子里两个圆的边框*/
.displacement{
border:none;
height:400px;
width:200px;
position: fixed;
transform: translate(100px);
}
.mediumCircle{
border:none;
width: 200px;
height: 200px;
border-radius: 50%;
margin:0 auto;
display: flex;
justify-content: center;
align-items: center;
}
/*在两个中型圆里面再创建两个黑白的小圆*/
.mediumCircleBlack .smallCircleWhite{
width: 70px;
height: 70px;
background: #fff;
border-radius: 50%;
}
.mediumCircleWhite .smallCircleBlack{
width: 70px;
height: 70px;
background: #000;
border-radius: 50%;
}
/*这样一幅八卦图就画好了，感谢观看*/
`
let string2 = ''
let i = 0

let step =() => {
  setTimeout(()=>{
    if (string[i]==='\n'){
      string2 += '<br>'
    }else if(string[i] === ' ') {
      string2 += '&nbsp'
    }else {
      string2 += string[i]
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,i);
    window.scrollTo(0, 99999);
    i++
    /*
    把i++放到第一段判断语句后面，
    如果放在前面，执行第一段判断语句时就等于string.length了，
    这样执行下一段判断语句判断i的值时才会等于string.length，
    当i等于string.length时就调用不了下一段判断语句里面的函数了
    */
    if (i<string.length){
      step()
    }

  },5)
}
step();
