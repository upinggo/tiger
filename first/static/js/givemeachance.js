
$(function () {
    $.ajax(
        {
            url:'http://tiger.lc/v1/ApiHome-single.htm',
            type:'GET',
            async:false,
            // data:{
            //
            // },
            // timeout:5000,
            // dataType:'json',
            success:function(data){
                console.log(data);
                var s=JSON.parse(data);
                console.log(s);

            },

        }
    )
    var _province = ['110000', '120000', '310000', '500000'];
    // $(window).load(function () {
    //     //videoShow();
    //     if(window.innerWidth>=800){
    //         $("#main_css").attr("href","./css/givemeachancePC.css");
    //     }else{
    //         $("#main_css").attr("href","./css/givemeachance.css");
    //     }
    // });
    // $(window).resize(function () {
    //     //videoShow();
    //     if(window.innerWidth>=800){
    //         $("#main_css").attr("href","./css/givemeachancePC.css");
    //     }else{
    //         $("#main_css").attr("href","./css/givemeachance.css");
    //     }
    // });

    $(".next,.next2,.next3").on("click", function () {
        $(this).parent().toggle();
        $(this).parent().next().toggle();
    });
    $("#province ,#city").on("change", function () {
        var id = $(this).find("option:selected").attr("data-value");
        var region = '<option value="">请选择</option>';
        if (id != null && id != '') {
            region = getRegion(id);
            if ($(this).hasClass('province')) {
                $("#city").html(region);
                if ($.inArray(id, _province) > -1) {
                    if ($("#district").hasClass('text')) {
                        $("#district").removeClass('text');
                        $("#district").addClass('hide');
                    }
                } else {
                    if (!$("#district").hasClass('text')) {
                        $("#district").addClass('text');
                        $("#district").removeClass('hide');
                    }
                }
            } else if ($(this).hasClass('city')) {
                $("#district").html(region);
            }
        } else {
            if ($(this).hasClass('province')) {
                $("#city").html(region);
            }
            $("#district").html(region);
        }
    });

    $("#save_submit").on("click", function () {
        var _string = {};
        var os = 1;
        $(".text").each(function () {
            var _name = $(this).attr("name");
            var _value = $.trim($(this).val());
            var phone=/^[1][3,4,5,7,8][0-9]{9}$/;
            if(_name=='phone'){
                if(phone.test(_value)){
                    _string[_name] = _value;
                }
                else{
                    alert("请输入正确的手机号");
                    return false;
                }
            }
            else{
            if (_value == null || _value == '') {
                alert("请输入完整信息。" + $(this).attr('name'));
                os = 0;
                return false;
            }

            _string[_name] = _value;
            }
        });
        console.log(os);
        if (os == 1) {
            $.ajax({
                url: "http://tiger.lc/v1/ApiHome-saveSingle.htm",
                type: "POST",
                data: _string,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    $(".next2").click();
                    if (data.errorMessage === "tryAgain" || data.errorMessage === "dailyOver") {
                        $(".try_again").show();
                    } else if (data.errorMessage === "hasCode") {
                        $(".has_code").show();
                    } else {
                        $(".success").show();
                        $(".code").html(data.error);
                        console.log(data.error);
                    }
                    setTimeout("$('.next3').click();", 5000);

                }
            }).done(function (msg) {

            });
        }
    });
});
var getRegion = function (id) {
    var res = '<option value="">请选择</option>';
    $.ajax({
        async: false,
        url: "http://tigerhuclub.com/tiger/index.php?a=ApiEnum&m=getRegion&id=" + id,
        type: "GET",
        data: {},
        dataType: "json",
        success: function (obj) {
            var _data = obj.data.data;
            for (var i = 0; i < _data.length; i++) {
                res += '<option value="' + _data[i]['name'] + '" data-value="' + _data[i]['id'] + '">' + _data[i]['name'] + '</option>';
            }
        }
    }).done(function (msg) {
        // console.log(msg);
    });
    return res;
};