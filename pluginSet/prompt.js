

/**
 * 提醒弹窗
 * @param p 弹窗显示的位置（top，right）
 * @param h 提醒的内容
 */
function reminderPopup(p , h){
    var c = '';
    if(p == 'top'){
        c = 'tp';
    }else if(p == 'right'){
        c = 'rp';
    }

    var s = '<div class=' + c + '><span>' + h + '</span></div>';
    $('body').append($.parseHTML(s));
    $('.' + c).fadeIn(2000);//淡出
    setTimeout(function(){
        $('.' + c).fadeOut(3000);//淡出
    }, 2000);

    //延迟删除节点
    setTimeout(function(){
        $('.' + c).remove();
    }, 5000);

}