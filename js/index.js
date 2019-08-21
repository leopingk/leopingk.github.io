$(function(){
  var totalWidth = 0;
  $('ul#proTab>li').each(function (i, obj) {
    totalWidth += $(obj).width();
  });
  $('ul#proTab').width(totalWidth);
  /* 获取时间,为新闻资讯下面的small标签添加时间 */
  var date = new Date();
  $('.list-group>a>small').html(date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + " 星期" + "日一二三四五六".charAt(date.getDay()))
  /* 获取点击的图片的src */
  var imgSrc ='../'+ $('div.card').children('.card-img-top').attr('src')
  $('div.card').click(function () {
    console.log(imgSrc)
    /* 点击这个div.card之后获取他的父级元素给他的父级元素添加一个href 跳转到商品详情上面 */
    $(this).parent().attr('href','product_details/index.html')
  /* 跳转完毕之后给这把这个页面的放大镜图片src修改为上面获取到的imgSrc路径 */
    
})
// setInterval(function(){
//   var imgSrc ='../'+ $('div.card').children('.card-img-top').attr('src')
//     console.log(imgSrc)
//     var a=$('#mediumImg');
//     a=imgSrc;
//     console.log(a)
// },3000)
})