$(function(){
//  $("select[name=school-name]").on("blur",function(){
//      var value = $(this).val();
//      if (!value) {
//      	
//      }
//  })
    $(".formSubmit").on("click",function(){
        var school_name = $("select[name=school_name]").val();
        var stduent_name = $("input[name=stduent_name]").val();
        var phone = $("input[name=phone]").val();
        var current_school = $("input[name=current_school]").val();
        var grade = $('input:radio[name="grade"]:checked').val();
        var source = $("select[name=source]").val();
        
        var error_school_name = $('.error_school_name');
        var error_stduent_name = $('.error_stduent_name');
        var error_phone = $('.error_phone');
        var error_current_school = $('.error_current_school');
        var error_grade = $('.error_grade');
        var error_source = $('.error_source');
        
//     选择校区分布判断
        console.log(school_name)
		if(school_name == 0){
			error_school_name.css('display','block');
			error_school_name.html('请选择校区分布');
		}else{
			error_school_name.css('display','block');
			error_school_name.html('选择完成');
		}
		
//      学生名字判断
        var reg_name=/^[\u0391-\uFFE5]+$/;
        if(stduent_name ==""||!reg_name.test(stduent_name)){ 
			error_stduent_name.css('display','block');
			error_stduent_name.html('请输入中文');
		}else{
			error_stduent_name.css('display','block');
			error_stduent_name.html('输入通过');
		}

//      学校名字判断
       if(current_school==""||!reg_name.test(current_school)){ 
			error_current_school.css('display','block');
			error_current_school.html('请输入中文');
		}else{
			error_current_school.css('display','block');
			error_current_school.html('输入通过');
		}
//      手机号码判断
		var reg_phone=/^[1][3,4,5,7,8][0-9]{9}$/;
		if(phone==""||!reg_phone.test(phone)){ 
			error_phone.css('display','block');
			error_phone.html('请输入正确的11位手机号码格式');
		}else{
			error_phone.css('display','block');
			error_phone.html('输入通过');
		}
//		就读小学判断
		if(grade == null){
			error_grade.css('display','block');
			error_grade.html('请选择就读的小学');
		}else{
			error_grade.css('display','block');
			error_grade.html('选择完成');
		}				
//		获取渠道判断
		if(source ==0){
			error_source.css('display','block');
			error_source.html('请选择获取渠道');
		}else{
			error_source.css('display','block');
			error_source.html('选择完成');
		}
	})
})