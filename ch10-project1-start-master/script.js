$(document).ready(function(){
    $("#thumbBox div img").on("click", function(){
        var x = $(this).attr("src");
        var y = $(this).attr("title");
        var z = $(this).attr("alt");
        switch(x){
            case "images/small/painting1.jpg":
                $("#imgManipulated").children("img").attr({src:"images/medium/painting1.jpg" , title : y, alt : z});
                $("figcaption").html('<em>'+z+'</em><br>'+y);
                break;
            case "images/small/painting2.jpg":
                $("#imgManipulated").children("img").attr({src: "images/medium/painting2.jpg", title : y, alt : z});
                $("figcaption").html('<em>'+z+'</em><br>'+y);
                break;
            case "images/small/painting3.jpg":
                $("#imgManipulated").children("img").attr({src: "images/medium/painting3.jpg", title : y, alt : z});
                $("figcaption").html('<em>'+z+'</em><br>'+y);
                break;
            case "images/small/painting4.jpg":
                $("#imgManipulated").children("img").attr({src: "images/medium/painting4.jpg", title : y, alt : z});
                $("figcaption").html('<em>'+z+'</em><br>'+y);
                break;
            case "images/small/painting5.jpg":
                $("#imgManipulated").children("img").attr({src: "images/medium/painting5.jpg", title : y, alt : z});
                $("figcaption").html('<em>'+z+'</em><br>'+y);
                break;
            default:
                $("#imgManipulated").children("img").attr({src: "images/medium/painting1.jpg", title : y, alt : z});
                $("figcaption").html('<em>'+z+'</em><br>'+y);
                break;
        }
    });
    $('.sliders').on('input', function(){
        var temp = $(this).attr("id");
        var val = this.value;

        switch(temp){
            case "sliderOpacity":             
            $("#imgManipulated").children("img").css("-webkit-filter", "opacity("+val+"%)");    
            break;
            case "sliderSaturation":
            $("#imgManipulated").children("img").css("filter", "saturate("+val+"%)");    
            break;
            case "sliderBrightness":
            $("#imgManipulated").children("img").css("filter", "brightness("+val+"%)");    
            break;
            case "sliderHue":
            $("#imgManipulated").children("img").css("-webkit-filter", "hue-rotate("+val+"deg)");    
            break;
            case "sliderGray":
            $("#imgManipulated").children("img").css("filter", "grayscale("+val+"%)");    
            break;
            case "sliderBlur":
            $("#imgManipulated").children("img").css("-webkit-filter", "blur("+val+"px)");    
            break;
            default:
                reset();
                break;
        }
        function reset(){
            location.reload(true);
        }
    });
});