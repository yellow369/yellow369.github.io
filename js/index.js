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

//图片/文字 转换
let pic = document.querySelector(".pic")
let img = document.querySelector(".pic>img")
let text = document.querySelector(".scroll")
let btn1 = document.getElementById("images")
let btn2 = document.getElementById("text")
let up = document.querySelector(".upjs")
let down = document.querySelector(".downjs")
let bu = -96;

btn1.addEventListener('click', function () {
  pic.style.display = "block"
  text.style.display = "none"
});

btn2.addEventListener('click', function () {
  pic.style.display = "none"
  text.style.display = "block"
});

// let dis = (i) => {
//   if (i == 0 || i == -96) {
//     up.style.opacity = 0.2

//   } else if (i == -571) {
//     down.style.opacity = 0.2

//   } else {
//     up.style.opacity = 1
//     down.style.opacity = 1
//   }
//   // console.log(i);
// }
// dis(0)
// up.addEventListener("click", function () {
//     bu = bu + 95
//     animate(img, bu + 95)
//     dis(bu);

// })

// down.addEventListener("click", function () {
//     animate(img, bu)
//     bu = bu - 95
//     dis(bu);
// })

up.addEventListener("click", function () {
  if (bu == -191 || bu == -286 || bu == -381 || bu == -476) {
    up.style.opacity = 1
    down.style.opacity = 1
    bu = bu + 95
    animate(img, bu + 95)
  } else if (bu == 0 || bu == -96) {
    up.style.opacity = 0.2
  }
  if (bu == -96) {
    up.style.opacity = 0.2
  }
  console.log("up" + bu);
})

down.addEventListener("click", function () {
  if (bu == -96 || bu == -191 || bu == -286 || bu == -381) {
    up.style.opacity = 1
    down.style.opacity = 1
    bu = bu - 95
    animate(img, bu)

  } else if (bu == -476) {
    down.style.opacity = 0.2
  }
  if (bu == -476) {
    down.style.opacity = 0.2
  }
  console.log("down" + bu);
})




//左侧边栏
let ul = document.querySelector(".aside-l>ul")
let lis = document.querySelectorAll(".aside-l>ul>li")
for (let i = 0; i < lis.length; i++) {
  // lis[i].addEventListener('mouseover', function () {
  //   lis[i].style.opacity = "1"
  //   lis[i].style.color = "#000"
  // })

  // lis[i].addEventListener('mouseout', function () {
  //   lis[i].style.opacity = "0.7"
  //   lis[i].style.color = "#666"
  // })
  setInterval(function () {
    if (Math.ceil(lis[i].offsetWidth) == Math.floor(ul.offsetWidth * 0.9) || Math.ceil(lis[i].offsetWidth) == Math.ceil(ul.offsetWidth * 0.9)) {
      lis[i].style.opacity = "1"
      lis[i].lastChild.lastChild.style.fontSize = "25px"
      lis[i].lastChild.lastChild.style.fontWeight = "600"
    } else {
      lis[i].style.opacity = "0.7"
      lis[i].lastChild.lastChild.style.fontSize = "15px"
      lis[i].lastChild.lastChild.style.fontWeight = "400"
    }
  }, 20)
}






