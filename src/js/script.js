$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-producttrico1]').click(function(){
      window.location = "data-producttrico1.html";
  })
  $('[data-producttrico2]').click(function(){
      window.location = "data-producttrico2.html";
  })
  $('[data-producttrico3]').click(function(){
      window.location = "data-producttrico3.html";
  })
  $('[data-producttrico4]').click(function(){
      window.location = "data-producttrico4.html";
  })
  $('[data-product19080]').click(function(){
      window.location = "data-product19080.html";
  })
  $('[data-product80190t]').click(function(){
      window.location = "data-product80190t.html";
  })
  $('[data-product80190p]').click(function(){
      window.location = "data-product80190P.html";
  })
  $('[data-product]').click(function(){
      window.location = "data-product.html";
  })
  $('[data-add-to-cart]').click(function(){
      alert('اضيف المنتج الى عربة الشراء');
  })
  $('.product-option input[type="radio"]').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
  });
  $('[data-remove-from-cart]').click(function(){
     $(this).parents('[data-product-info]').remove();
      calculateTotalPrice();
  });
  $('[data-product-quantity]').change(function(){
      var newQuantity = $(this).val();
      var $parent = $(this).parents('[data-product-info]');
      var pricePerUnit = $parent.attr('data-product-price');
      var totalPriceForProduct = newQuantity * pricePerUnit;
      $parent.find('.total-price-for-product').text(totalPriceForProduct + 'دج');
      calculateTotalPrice();
  });
    function calculateTotalPrice(){
        var totalPriceForAllProducts=0;
        $('[data-product-info]').each(function(){
            var pricePerUnit = $(this).attr('data-product-price');
            var quantity = $(this).find('[data-product-quantity]').val();
            var totalPriceForProduct = quantity * pricePerUnit;
            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;
        });
        $('#total-price-for-all-products').text(totalPriceForAllProducts + 'دج');
        if(totalPriceForAllProducts===0){
            $('#form-checkout button[type="submit"]').prop('disabled',true);
        }
    }
    var citiesByCountry = {
        alger: [
            'القبة',
            'باب الواد',
            'الكاليتوس',
            'باب الزوار'
        ],
        msilla: [
            'سيدي عامر',
            'بوسعادة',
            'أمجدل',
            'مسيلة'
        ],
        tipaza: [
            'القليعة'
        ],
        boumerdas: [
            'بومرداس'
        ]
    };
     //عندما يتيغر البلد
    $('#form-checkout select[name="country"]').change(function(){
     //اجلب رمز البلد
     var country = $(this).val();
     // اجلب مدن هذا الرمز 
     var cities = citiesByCountry[country];
     //فرغ حقل المدن
     $('#form-checkout select[name="city"]').empty();
     $('#form-checkout select[name="city"]').append('<option disabled selected value="">اختر المدينة </option>');
     //اضف المدن الى قائمة المدن

     //من اجل كل مدينة 
      cities.forEach(function(city){
     //انشاء حقل اختيار جديد
      var $newOption = $('<option></option>');
     // اضافة النص
     $newOption.text(city);
     // اضافة القيمة
     $newOption.val(city);
     // اضافة الى حقل المدينة 
     $('#form-checkout select[name="city"]').append($newOption);
       });  
    });
    
     //عندما تتغير طريقة الدفع
      $('#form-checkout input[name="payment_method"]').change(function(){
     //اجلب القيمة المختارة حاليا 
      var paymentMethod = $(this).val();
     //اذا كانت عند التسليم
      if(paymentMethod==='on_delivery')
     //عطل حقول الادخال لبطاقة الائتمان
      {
          $('#credit_card_info input').prop('disabled',true);
      }
     //والا
     else{
     //قم بتفعيلهاا
         $('#credit_card_info input').prop('disabled',false);     
      }
         $('#credit_card_info').toggle();
    });    
})
