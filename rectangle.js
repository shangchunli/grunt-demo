$(function(){
    console.log("hello");
});
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  };
$(function () { 
    var $width=$('#width');
    $height=$("#height");
    $btnCal=$("#calculate");
    $perimeter=$("#perimeter");
    $area=$("#area");
    $btnCal.click(function () { 
        var w=Number($width.val());
        var h=Number($height.val());
        console.log(1)
        var p=roundFractional(2*(w+h),10);
        var a=roundFractional((w*h),10)
        console.log(2)
        console.log(p)
        $perimeter.val(p);
        $area.val(a);
     });
 });