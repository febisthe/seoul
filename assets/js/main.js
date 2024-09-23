// 언어 변환 버튼
$('#header .btn-lang').click(function(){
  url = $('#global').val();
  window.open(url);
})


// 상단 위로 버튼
$(window).scroll(function(){
  curr = $(this).scrollTop();

  if(curr > 0 ){
    $('.btn-gotop').addClass('show');
  } else {
    $('.btn-gotop').removeClass('show');
  }
})


// 탑 버튼 눌렀을 때 위로 올라가기
$('.btn-gotop').click(function(){
  window.scrollTo({top:0, behavior:"smooth"})
})


// [섹션1] 비주얼 주요뉴스-시민참여
$('.sc-visual .tit').click(function(){
  $(this).parent().addClass('active').siblings().removeClass('active')
})


// [섹션2] 비주얼 주요뉴스 슬라이드
const visualSlide1 = new Swiper('.sc-visual .visual1',{
  autoplay:{
    delay: 1000,
  },
  loop: true,
  navigation:{
    nextEl:".sc-visual .btn-next",
    prevEl:".sc-visual .btn-prev",
  },
  pagination:{
    el:".sc-visual .fraction",
    type:"fraction"
  }
})


// [섹션2] 비주얼 시민참여 슬라이드
const visualSlide2 = new Swiper('.sc-visual .visual2',{
  autoplay:{
    delay: 1000,
  },
  loop: true,
  navigation:{
    nextEl:".sc-visual .btn-next",
    prevEl:".sc-visual .btn-prev",
  },
  pagination:{
    el:".sc-visual .fraction",
    type:"fraction"
  }
})


// [섹션12] 팝업 슬라이드
const popSlide = new Swiper('.sc-popup .swiper',{
  slidesPerView : 3,
  spaceBetween : 43,
  loop: true,
  autoplay:{
    delay: 1000,
    disableOnInteraction: false, //컨트롤시 진행유무
  },
  navigation:{
    nextEl:".sc-popup .btn-next",
    prevEl:".sc-popup .btn-prev",
  },
  pagination:{
    el:".sc-popup .fraction",
    type:"fraction"
  }
})


// 슬라이드 자동재생-중지
slideArr = [visualSlide1, visualSlide2, popSlide]

$('.control .btn-auto').click(function(){

  idx = $(this).data('slide');
  console.log(idx);

  if($(this).hasClass('stop')){
    slideArr[idx].autoplay.start();
  } else {
    slideArr[idx].autoplay.stop();
  }

  $(this).toggleClass('stop');
})


// 관련사이트 토글
$('.sc-relate .btn-relate').click(function(e){
  e.preventDefault();
  if($(this).hasClass('on')){
    $('.btn-relate').removeClass('on').siblings('.relate-wrap').stop().slideUp();
  } else{
    $('.btn-relate').removeClass('on').siblings('.relate-wrap').stop().slideUp();
    $(this).addClass('on').siblings('.relate-wrap').stop().slideDown();
  }
});


// 키보드 이벤트
$('.sc-relate .depth2 li:first-child').keydown(function(e){
  code = e.keyCode;
  if (code === 9 && e.shiftKey) {
    //키보드 tab키와 shift키를 같이 누를 경우 (즉, 탭을 뒤로 이동할 경우)
    $('.btn-relate').removeClass('on').siblings('.relate-wrap').stop().slideUp();
    // 닫힘
  }

})
$('.sc-relate .depth2 li:last-child').keydown(function(e){
  code = e.keyCode;
  if (code === 9 && !e.shiftKey) {
     //키보드 shift키 없이 tab키만 누를 경우 (즉, 탭을 앞으로 이동할 경우)
    $('.btn-relate').removeClass('on').siblings('.relate-wrap').stop().slideUp();
    //닫힘
  }
})