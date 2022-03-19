$(document).ready(function () {


  $(document).on('click', '.btn.remove', function (event) {
    $(this).parent().parent().remove();

    calcTotal();

  });


  $(document).on('click', '.btn.add', function (event) {
    var item = $(this).parent().prev().prev().children('input').val();
    var price = $(this).parent().prev().children('input').val();

    $(this).parent().parent().before(" <div class=\"row item\" style=\"display: flex; justify-content: space-around;\">" 
    + "<div class=\"itemName col-xs-2\">" + item + "</div>"
    + "<div class=\"itemPrice col-xs-2\" col-xs-2>" + price +".00</div>"
    + "<div class=\"quantity col-xs-4\">QTY <input type=\"number\"/></div>"
    + "<div class=\"col-xs-2\"><button class=\"btn remove\">Remove</button></div>"
    + "<div class=\"subtotal col-xs-2\">$--.--</div>");
  });


  var calcTotal = function () {
    var totalAll = 0;

    $(".subtotal").each(function (index, element) {
      if (/\d/.test($(this).text())) { 
        totalAll += parseFloat($(this).text().substring(1));
      }
     });
    
    
     $(".totalprice").html("$" + totalAll +".00");
    
  }


  $('body').on('input', '.item input', function () {
    console.log('run');

    var itemPrice = parseFloat($(this).parent().prev().text().substring(1, 3));
    var itemCount = $(this).val();
    var subTotalPrice = itemPrice * itemCount;

    $(this).parent().next().next().html("$" + subTotalPrice + ".00");

    calcTotal();

  });

})