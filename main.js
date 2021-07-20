// main.js

$(function(){
  $('.faq dt').click(function(){
    // 기존의 목록을 닫음(현재 목록을 제외한 나머지 닫음)
    $('.faq dt').not(this).next().removeClass('active');
    // 현재 클릭한 목록을 열거나 닫음
    $(this).next().toggleClass('active');

    // 메뉴상태: 열림: atcive,  메뉴 닫힘: '' 
    // 아이콘의 상태: 닫힌상태 = 열림 아이콘(V), 열린상태 = 닫힘 아이콘(^)
    if($(this).next().hasClass('active')) {
      // 열렸을 때
      $('.faq dt button').removeClass('up'); // 초기화
      $(this).find('button').addClass('up');
    } else {
      // 닫혔을 때
      $(this).find('button').removeClass('up');
    }
  });

});