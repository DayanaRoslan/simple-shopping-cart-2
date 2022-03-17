$(document).ready(function () {

  $(document).on('click', '.btn.remove', function (event) {
    $(this).parent().parent().remove();
  });

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