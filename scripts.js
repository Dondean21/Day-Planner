$(document).ready(function(){
    
    var now = moment();
    var currentDay = moment().format('dddd MMM Do YY');
    console.log(currentDay);
    $("#currentDay").text(currentDay);
     
    console.log(now.toString());

    var times = [9,10,11,12,13,14,15,16,17];
    
    
    

   onLoad();
   planner();

    function onLoad(){
        $("#9AM").val(localStorage.nine);
        $("#10AM").val(localStorage.ten);
        $("#11AM").val(localStorage.eleven);
        $("#12PM").val(localStorage.twelve);
        $("#1PM").val(localStorage.one);
        $("#2PM").val(localStorage.two);
        $("#3PM").val(localStorage.three);
        $("#4PM").val(localStorage.four);
        $("#5PM").val(localStorage.five);
    }
    
    $(".saveBtn").on("click", function(){
        localStorage.nine =$("#9AM").val();
        localStorage.ten =$("#10AM").val();
        localStorage.eleven =$("#11AM").val();
        localStorage.twelve=$("#12PM").val();
        localStorage.one =$("#1PM").val();
        localStorage.two =$("#2PM").val();
        localStorage.three =$("#3PM").val();
        localStorage.four =$("#4PM").val();
        localStorage.five =$("#5PM").val();
    });
   


    function planner(){
        // var hour = 
        for(var i = 0; i < times.length; i++){
            if (times[i] < now){
                $(".time-block").addClass("past");
            }else if(times[i] > now){
              $(".time-block").addClass("future");
            }else if(times[i] === now){
                $(".time-block").addClass("present");
            };  
        };
    };
    
    
    



});
 
