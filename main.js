//$(document).ready(function(){

  //$('.Box').on('click', function(){
    //alert('押されたよ');
    //console.log('押されたよ！');
  //});
 // $('#js').on('click',function(){
  //var elem = '<a =href="#">次ページ</a>';
  //$("#js").html(elem);
  //$("#js").text(elem);
  //$("#js").css("color","#ff0");
  //$("#js").show(4000); //hide
  //$("#js").prepend(elem); // 要素の先頭に HTML 要素を追加
  //$("#js").append(elem); // 要素の最後に HTML 要素を追加
  //$("#id").empty(); // 子要素を全て削除
  //$("#id").remove(); // 要素を全て削除
//});
   $('#ex').ready(function(){
     $('#ex').fadeIn(4000);
     var elem = '<p>かきくけこ</p>';
     var aiue = '<p>あいうえお</p>'
     var sasi = '<p>さしすせそ</p>'
     $('#ex').html(elem);
     $('#ex').css("color","#ffffff");
     $('#ex').prepend(aiue);
     $('#ex').append(sasi);
     $('p:odd').css("background-color","black");
     $('p:even').css("background-color","#ffffff");


   });

   $('#hide').on('click',function(){
     $("#ex").hide(2000);
   });
   $('#show').on('click',function(){
     $('#ex').show(2000);
   });

//});
