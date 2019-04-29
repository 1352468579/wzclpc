$('.stu-grade').change(function () {
    var $this = $(this);
    var url = '/Wap/Api/applyClasses';
    var name = $this.val();
    $.ajax({
        url: url, data: {name: name}, type: "POST", dataType: "JSON", success: function (data) {
            console.log()
            if (data.code == 200) {
                name != 0 ? $('.stu-subject').html(data.data) : $('.stu-subject').html('<option value="0">科目</option>')
            }
        }, error: function (e) {
            console.log(e)
        }
    })
});
