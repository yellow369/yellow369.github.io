let data = document.querySelector('.datas')
let time = document.querySelector('.times')

//时间
function time1() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dates = date.getDate(); //日
  let day = date.getDay();
  let hours = date.getHours(); //获取当前小时数(0-23)
  let minutes = date.getMinutes(); //获取当前分钟数(0-59)
  let seconds = date.getSeconds(); //获取当前秒数(0-59)
  let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  month = month < 10 ? '0' + month : month;//时间补0 
  data.innerHTML = month + '月' + dates + '日' + ' ' + arr[day]
  time.innerHTML = hours + ' ：' + minutes + ' ：' + seconds
}
setInterval(() => { time1() }, 1000);

//转换
let pic = document.querySelector(".pic")
let text = document.querySelector(".text")
let btn1 = document.getElementById("images")
let btn2 = document.getElementById("text")

btn1.addEventListener('click', function () {
  pic.style.display = "block"
  text.style.display = "none"
});

btn2.addEventListener('click', function () {
  pic.style.display = "none"
  text.style.display = "block"
});

//侧边栏
let aside = document.querySelector("aside")
aside.addEventListener('mouseover', function () {
  aside.style.opacity = "1"
  aside.style.color = "black"
})

aside.addEventListener('mouseout', function () {
  aside.style.opacity = "0.6"
  aside.style.color = "#666"
})
