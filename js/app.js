'use strict';
// header============================================
$(document).ready(function () {
    document.querySelector('.singer h4').nextElementSibling.style.display='block';
    let path=$('aside').innerWidth();
    $('.openDiv').animate({left:'-1px'},10);
    $('aside').animate({left:-path},10);
});
$('.openDiv').click(function (e) { 
    $('.openDiv').animate({left:$('aside').innerWidth()},500);
    $('aside').animate({left:0},500);
});
$('#closeBTN').click(function(e){
    $('.openDiv').animate({left:'-1px'},500);
    $('aside').animate({left:-$('aside').innerWidth()},500);
})
$('aside ul li a').click(function(e){
    let aHref=e.target.getAttribute('href');
    let offset = $(aHref).offset().top;
    console.log(offset);
    $("html , body").animate({scrollTop : offset},1000);
})
//singer=================================================
$('.singer h4').click(function(e){
    $(e.target).next().slideToggle(500);
    $(e.target).parent().siblings().find('p').slideUp(500);
});
//timer====================================================
let seconds=Number($('h2.second span').html());
let minutes=Number($('h2.minute span').html());
let hours=Number($('h2.hour span').html());
let day=Number($('h2.day span').html());
setInterval(() => {
    seconds--;
    if(seconds==0){
        seconds=59;
        minutes--;
    }
    if(minutes==-1){
        minutes=59;
        hours--;
    }
    if(hours==-1){
        hours=23;
        day--;
    }
    $('h2.second span').html(seconds);
    $('h2.minute span').html(minutes);
    $('h2.hour span').html(hours);
    $('h2.day span').html(day);
}, 1000);
//footer==============================================================
let limitOfChar=Number($('.message p span').html())
document.querySelector('textarea').addEventListener('input',function(e){
    limitOfChar--;
    $('.message p span').html(limitOfChar);
    if(limitOfChar==0){
        limitOfChar=100;
        window.alert('Write less than 100 letters');
        $('textarea').val('');
        $('.message p span').html(limitOfChar);
    }
})