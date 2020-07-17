$(document).ready(function(){
    $('.datepicker').datepicker({
        autoClose: true,
        firstDay: 1
    })
  });

$(document).ready(function(){
    $('.timepicker').timepicker({
        autoClose: true,
        showClearBtn: true,
        twelveHour: false
    });
  });

//initialize collapsible
$(document).ready(function(){
    $('.collapsible').collapsible();
});