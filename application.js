$(document).ready(function () {

  $(document).on('click', '.btn.remove', function (event) {
    $(this).parent().parent().remove();
  });

  $(document).on('click', '.btn.add', function (event) {
    var item = $(this).parent().prev().prev().children('input').val();
    var price = $(this).parent().prev().children('input').val();

    $(this).parent().parent().before(" <div class=\"row item\" style=\"display: flex; justify-content: space-between;\">" 
    + "<div class=\"itemName\">" + item + "</div>"
    + "<div class=\"itemPrice\">" + price +".00</div>"
    + "<div class=\"quantity\">QTY <input type=\"number\"/></div>"
    + "<div><button class=\"btn remove\">Remove</button></div>"
    + "<div class=\"subtotal\">$--.--</div>");
  })

  $('body').on('input', '.item input', function () {
    var totalPrice = 0;
    console.log('run');

    var itemPrice = parseFloat($(this).parent().prev().text().substring(1, 3));
    var itemCount = $(this).val();
    var subTotalPrice = itemPrice * itemCount;

    $(this).parent().next().next().html("$" + subTotalPrice + ".00");
    $('.subtotal').each(function (index, element) {
      if(/\d/.test($(this).text())) {
        totalPrice += parseFloat($(this).text.substring(1));
      }
    });

    $('.totalcost').html("$" + totalPrice + ".00");
  })

})