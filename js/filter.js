//영화 정보 셋팅 DB 대신 JSON 파일 임시 생성(?)

let arryPort = [
    { 'name': 'thum_02', 'item': 'web' },
    { 'name': 'thum_03', 'item': 'web' },
    { 'name': 'thum_05', 'item': 'web' },
    { 'name': 'thum_06', 'item': 'web' },
    { 'name': 'thum_07', 'item': 'web' },
    { 'name': 'thum_08', 'item': 'web' },
    { 'name': 'thum_04', 'item': 'web' },
    { 'name': 'thum_01', 'item': 'web' },
    { 'name': 'thum_09', 'item': 'app' },
    { 'name': 'thum_10', 'item': 'web' },
    { 'name': 'thum_11', 'item': 'web' },
    { 'name': 'thum_12', 'item': 'app' },
    { 'name': 'thum_13', 'item': 'app' },
    { 'name': 'thum_14', 'item': 'app' },
    { 'name': 'thum_15', 'item': 'app' },
    { 'name': 'thum_16', 'item': 'app' },
    { 'name': 'thum_17', 'item': 'app' },
    { 'name': 'thum_18', 'item': 'app' },
    { 'name': 'thum_19', 'item': 'app' },
    { 'name': 'thum_20', 'item': 'app' },
    { 'name': 'thum_21', 'item': 'app' },
    { 'name': 'thum_22', 'item': 'app' },
    { 'name': 'thum_23', 'item': 'app' },
    { 'name': 'thum_24', 'item': 'web' },
    
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

for (let i = 0; i < arryPort.length; i++) { 
    let items = `<div class='swiper-slide itemBox' data-item='${arryPort[i].item}'><img src='./portfolio/${arryPort[i].name}.png' alt='${arryPort[i].name}'></div>`
    showingArry.push(items);
}
shuffleArray(showingArry);

//섞은 배열 출력하기 
$(function () { 
    $('.portfolio').append(showingArry);

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