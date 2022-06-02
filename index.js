var mainPage = '#Introduce'
$(document).ready(function() {
    if ( mainPage == '#Introduce')
    {
        $('#Introduce').addClass('main');
        $('#History').addClass('other');
        $('#SNS').addClass('other');
        $('a[href="#Introduce"]').css('color','black');
        $('a[href="#History"]').css('color','gray');
        $('a[href="#SNS"]').css('color','gray');
    }      
})

$(document).on("click", 'a[href="#History"]', function(){
    if ( mainPage == "#Introduce"){
        $('#Introduce').removeClass('main');
        $('#Introduce').addClass('other');
        $('#History').removeClass('other');
        $('#History').addClass('main');
    }
    else if( mainPage == "#SNS"){
        $('#SNS').removeClass('main');
        $('#SNS').addClass('other');
        $('#History').removeClass('other');
        $('#History').addClass('main');
    }
    $('a[href="#History"]').css('color','black');
    $('a[href="#Introduce"]').css('color','gray');
    $('a[href="#SNS"]').css('color','gray');
    $('#name a').css('color', 'black');
    mainPage = "#History";
})

$(document).on("click", 'a[href="#SNS"]', function(){
    if ( mainPage == "#Introduce"){
        $('#Introduce').removeClass('main');
        $('#Introduce').addClass('other');
        $('#SNS').removeClass('other');
        $('#SNS').addClass('main');
    }
    else if( mainPage == "#History"){
        $('#History').removeClass('main');
        $('#History').addClass('other');
        $('#SNS').removeClass('other');
        $('#SNS').addClass('main');
    }
    $('a[href="#SNS"]').css('color','black');
    $('a[href="#Introduce"]').css('color','gray');
    $('a[href="#History"]').css('color','gray');
    $('#name a').css('color', 'black');
    mainPage = "#SNS";
})

$(document).on("click", 'a[href="#Introduce"]', function(){
    if ( mainPage == "#History"){
        $('#History').removeClass('main');
        $('#History').addClass('other');
        $('#Introduce').removeClass('other');
        $('#Introduce').addClass('main');
    }
    else if( mainPage == "#SNS"){
        $('#SNS').removeClass('main');
        $('#SNS').addClass('other');
        $('#Introduce').removeClass('other');
        $('#Introduce').addClass('main');
    }
    $('a[href="#SNS"]').css('color','gray');
    $('a[href="#Introduce"]').css('color','black');
    $('a[href="#History"]').css('color','gray');
    $('#name a').css('color', 'black');
    mainPage = "#Introduce";
})

$('div[id="name"]').click(function(){
    if ( mainPage == "#History"){
        $('#History').removeClass('main');
        $('#History').addClass('other');
        $('#Introduce').removeClass('other');
        $('#Introduce').addClass('main');
    }
    else if( mainPage == "#SNS"){
        $('#SNS').removeClass('main');
        $('#SNS').addClass('other');
        $('#Introduce').removeClass('other');
        $('#Introduce').addClass('main');
    }
    $('a[href="#SNS"]').css('color','gray');
    $('a[href="#Introduce"]').css('color','black');
    $('a[href="#History"]').css('color','gray');
    $('#name a').css('color', 'black');
    mainPage = "#Introduce";
});