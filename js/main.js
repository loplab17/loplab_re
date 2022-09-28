//메인슬라이드 
var swiper = new Swiper(".swiper1", {
  speed: 500,
  direction: "vertical",
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  watchOverflow : true,
  on: {
      slideChange: function() {
          setTimeout(function () {
            swiper.params.touchReleaseOnEdges = false;  
            swiper.params.mousewheel.releaseOnEdges = false;
          });
      },
      reachEnd: function() {
          setTimeout(function () {
              swiper.params.touchReleaseOnEdges = true;
              swiper.params.mousewheel.releaseOnEdges = true;
          }, 500);
      },
      reachBeginning: function() {
          setTimeout(function () {
              swiper.params.touchReleaseOnEdges = true;
              swiper.params.mousewheel.releaseOnEdges = true;
          }, 500);
      } 
  }//스와이퍼 슬라이드의마지막 페이지에 도달하면 스크롤로 벗어날 수 있도록 만들어주는 api
}); //SWIPER1

//포트폴리오 슬라이드 
var swiper2 = new Swiper(".swiper2", {
  width: 2000, //스와이퍼 슬라이드의 전체 width값을 조정해줌.
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  observer: true,
  observeParents: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    // snapOnRelease: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },

});//SWIPER2

  



//클라이언트 슬라이드
var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 6,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },

    breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // 화면의 넓이가 640px 이상일 때
    760: {
      slidesPerView: 3,
        },
    1024: {
      slidesPerView: 4,
      },
    1025: {
      slidesPerView: 6,
    }
  }
});

// 스와이퍼 슬라이드를 여러개 사용했을때, var 로 선언한 함수가 겹쳐서 동시에 실행했을때 문제가 생긴거.
//포폴 슬라이드의 변수를 var swiper2로 수정하니 해결됨.



$(function () { 
  //헤더 스크롤 디자인

  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('#nav').addClass('h_active');
    } else {
      $('#nav').removeClass('h_active');
    }
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('.scroll_down, .scroll_txt').fadeOut();
    } else {
      $('.scroll_down , .scroll_txt').fadeIn();
    }
  });

  //사이트맵 모달창
  $('#section01 .open').on("click", function (event) { //사이트맵 오픈 버튼을 누르면
      $('#sitemap').slideDown(); //팝업오픈
  });
  $("#sitemap .close").on("click", function (event) {
      $('#sitemap').slideUp(); //사이트맵 클로즈 버튼을 누르면 팝업 닫김.
  });


//비즈니스 아이콘 컬러변경
  $('#section02 .buisness article').each(function () { 
    var img = $(this).find('img');
    //.find() = A.find(B): A의 하위 요소 중 지정한 B를 찾는다. 
    var src_off = img.attr('src'); 
    //attr로 src 속성값을 찾는다. 
    var src_on = src_off.replace('off', 'on');

    $(this).hover(function () { img.attr('src', src_on) },
      function () { img.attr('src', src_off) });
  })//each
  
  //top버튼
  var offset = $('#section01').offset();
  $('#footer .top_btn').click(function () {
    $('html').animate({scrollTop : offset.top },400)
  })//

})//ready



/*===========================포트폴리오 슬라이드 필터==============================*/

//영화 정보 셋팅 DB 대신 JSON 파일 임시 생성

//여기에 포트폴리오 배열을 담아주세요. 이미지 썸네일의 제목과 아이템 구분을 명확히 해주기. 

let arryPort = [
    { 'name': 'KOIZI', 'item': 'web' }, //코이지 (web)
    { 'name': 'KOIZI (APP)', 'item': 'soft' }, //코이지 (soft)
    { 'name': 'MJ MASON', 'item': 'web' },//MJ MASON(web)
    { 'name': 'MJ MASON', 'item': 'soft' }, //MJ MASON(soft)
    { 'name': '윤논술 입시학원', 'item': 'web' },//윤논술입시학원(web)
    { 'name': '이노에이엠씨', 'item': 'web' },//이노에이엠씨(web)
    { 'name': '부경테크', 'item': 'web' },//부경테크(web)
    { 'name': 'IMOS', 'item': 'web' },//IMOS(web)
    { 'name': '런드리샤워', 'item': 'web' },//런드리샤워(web)
    { 'name': 'KHO무역', 'item': 'web' },//KHO무역회사(web)
    { 'name': '리뷰라이크', 'item': 'app' },//리뷰라이크(app)
    { 'name': '빡BTI', 'item': 'web' },//빡BTI(web)
    { 'name': '집파인', 'item': 'web' },//집파인(web)
    { 'name': '금방금방', 'item': 'app' },//금방금방(app)
    { 'name': '기부앤테이크', 'item': 'app' },//기부앤테이크(app)
    { 'name': 'KHO무역 (APP)', 'item': 'app' },//KHO(app)
    { 'name': 'G&B Solar', 'item': 'app' },//G&B Solar(app)
    { 'name': 'DOHWA', 'item': 'app' },//DOHWA(app)
    { 'name': '하늬바람', 'item': 'app' },//하늬바람(app)
    { 'name': '리빙푸드', 'item': 'app' },//리빙푸드(app)
    { 'name': 'TAYM', 'item': 'app' },//TAYM(app)
    { 'name': '캔탈마켓', 'item': 'app' },//캔탈마켓(app)
    { 'name': 'BOM', 'item': 'app' },//BOM(app)
    { 'name': '꽃도매앱', 'item': 'app' },//꽃도매앱(app)
    { 'name': '네일스카이', 'item': 'web' },//네일스카이(web)
];

//배열을 담을 배열
 
let showingArry = [];


//배열섞기함수
const shuffleArray = array => {
    for (var i = 0; i < array.length; i++) { //문자열 길이 체크
        var j = Math.floor(Math.random() * (i + 1));
        const temp = array[i]; //빈 곳에 배열 i를 저장
        array[i] = array[j]; //배열 j를 배열 i에 저장
        array[j] = temp; //상수 x를 배열 j에 저장 
    }
    return array;
};
//'모두' 버튼을 누르면 배열을 랜덤으로 나열해주는 코드. 


for (let i = 0; i < arryPort.length; i++) { 
    let items = `<div class='swiper-slide itemBox' data-item='${arryPort[i].item}'><img src='./portfolio/${arryPort[i].name}.png' alt='${arryPort[i].name}'><h3 class="p_title">${arryPort[i].name}</h3></div>`
  showingArry.push(items);
  //아이템 html구조 작성시 '' 문자열 따옴표가 아니라,  `` 기호를 써야 ${arryPort[i].item} 이 인식됨.
}
shuffleArray(showingArry);
//

//섞은 배열 출력하기 
$(function () { 
    $('.portfolio').append(showingArry);
    //포트폴리오 슬라이드의 마지막 요소에 배열을 추가. append 메서드로 배열을 화면에 표시할 예정이므로 html은 주석처리 해놓음.
  
    let list = $('.list');
    let itemBox = $('.itemBox');

    list.on('click', function () { 
        list.removeClass('active');
        $(this).addClass('active');
        let dataFilter = $(this).attr('data-filter');
        console.log(showingArry);

        itemBox.each(function () { 
            $(this).addClass('hide');
            $(this).removeClass('active');
            if ($(this).attr('data-item') == dataFilter || dataFilter == 'all') {
                $(this).addClass('active');
                $(this).removeClass('hide');
            }
        })
    })//click
  

  

})//ready

/*===========================포트폴리오 슬라이드 필터 끝==============================*/