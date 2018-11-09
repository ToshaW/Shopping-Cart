$(document).ready(function () {
    let num1;
    let num2;
    let result;
    let operator;
    let isFirstComplete = false;
  

const setNumber = function (e) {
    e.preventDefault();
    const digit = parseInt($(this).val());
    if (!isFirstComplete) {
      num1 = num1 || 0;
      num1 = (num1 * 10) + digit; 
    } else {
      num2 = num2 || 0;
      num2 = (num2 * 10) + digit;
    }

    render();
  }


/* 
  operator and input based on plus or minus.
  */
 const setResult = function (e) {
    e.preventDefault();
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
    }

    render();
  }

   /* 
  Reset to its initial state.
  */
 const clear = function(e){
    e.preventDefault();
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    isFirstComplete = false;

    render();
  }

}

$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp;gt; 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp;lt; 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});


