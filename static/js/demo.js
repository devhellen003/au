// var currentQq;
// var telegram;
// (function currentQqM(){
//   axios.get('http://api.27b.site/v1/getContactL').then(res=>{
//     currentQq = res.data.data
//     console.log(currentQq)
//   })
// })()

// document.addEventListener("DOMContentLoaded", function () {


//       axios.get('http://api.27b.site/v1/getContactL')
//       .then(function (res) {
//          currentQq = res.data.data
//          console.log( currentQq)
//         //  getfeiji()
//          console.log(telegram)
//         //  var html=`<a href="https://wa.me/`+currentQq+`">
//         //  <div class="online_item_1"></div></a>
//         //   getfeiji()
//         //   <a href="https://t.me/`+telegram+`"><div class="online_item_2"></div></a>

//         //   <a href="javascript:scrollTo(0,0);"><div class="online_top"></div></a>`

//         //  var div= document.getElementById("online_box")
//         //  console.log(div)
//         //  div.innerHTML=html

//         //  return div;

//       //    console.log(navigator.userAgent);
//       //      var os = function (){
//       //        var ua = navigator.userAgent,
//       //        isWindowsPhone = /(?:Windows Phone)/.test(ua),
//       //        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
//       //        isAndroid = /(?:Android)/.test(ua),
//       //        isFireFox = /(?:Firefox)/.test(ua),
//       //        isChrome = /(?:Chrome|CriOS)/.test(ua),
//       //        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
//       //        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
//       //        isPc = !isPhone && !isAndroid && !isSymbian;
//       //        return {
//       //            isTablet: isTablet,
//       //            isPhone: isPhone,
//       //            isAndroid: isAndroid,
//       //            isPc: isPc
//       //        };
//       //    }();
//       //    var href;
//       //    if (os.isAndroid || os.isPhone) {
//       //      console.log("手机")
//       //      console.log(currentQq)
//       //      href="whatsapp://send?phone="+currentQq
//       //      //
//       //    }  else if(os.isPc) {
//       //      console.log("电脑")
//       //      console.log(currentQq)
//       //       href="https://web.whatsapp.com/send?phone="+currentQq

//       //      //
//       //    }
//       //    var btn= document.getElementById("btn")

//       //  btn.onclick=function(){
//       //    console.log(href)
//       //      window.location.href=href 
//       //  }
//       // function btn(){
//       //   window.location.href=href 
//       // }
//       })
//       function getfeiji(){
//         axios.get('http://api.27b.site/v1/getContact')
//         .then(function (res) {
//           telegram = res.data.data.list[0].urlName
//            console.log(telegram)

//           //  return div;

//         //    console.log(navigator.userAgent);
//         //      var os = function (){
//         //        var ua = navigator.userAgent,
//         //        isWindowsPhone = /(?:Windows Phone)/.test(ua),
//         //        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
//         //        isAndroid = /(?:Android)/.test(ua),
//         //        isFireFox = /(?:Firefox)/.test(ua),
//         //        isChrome = /(?:Chrome|CriOS)/.test(ua),
//         //        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
//         //        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
//         //        isPc = !isPhone && !isAndroid && !isSymbian;
//         //        return {
//         //            isTablet: isTablet,
//         //            isPhone: isPhone,
//         //            isAndroid: isAndroid,
//         //            isPc: isPc
//         //        };
//         //    }();
//         //    var href;
//         //    if (os.isAndroid || os.isPhone) {
//         //      console.log("手机")
//         //      console.log(currentQq)
//         //      href="whatsapp://send?phone="+currentQq
//         //      //
//         //    }  else if(os.isPc) {
//         //      console.log("电脑")
//         //      console.log(currentQq)
//         //       href="https://web.whatsapp.com/send?phone="+currentQq

//         //      //
//         //    }
//         //    var btn= document.getElementById("btn")

//         //  btn.onclick=function(){
//         //    console.log(href)
//         //      window.location.href=href 
//         //  }
//         // function btn(){
//         //   window.location.href=href 
//         // }
//         })
//       }
//       getfeiji()


//     });