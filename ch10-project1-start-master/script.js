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
});