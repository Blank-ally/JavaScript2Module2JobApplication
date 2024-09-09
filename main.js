$(function(){


    //to do
    //1 validate index
    //2 submit navigate to application
    //3 set minimun date for birthday
    // send birthday to personal info div
    // Example starter JavaScript for disabling form submissions if there are invalid fields


$('#Bday').on('change',function (){
    $('#DOB').val(this.value)

})

    $('#goToApp').on('click', function (){
        const $index =  $(this).parents('.indForm')



        if ($index.find(':invalid').length){
            //add validation
            $('#firstForm').addClass('was-validated')


        }
        else{
            $('#firstForm').removeClass('was-validated')
            window.location.href = "application.html";
        }
    })
  $('#personb').on('click',function (){

      if ($('#v-pills-Personal').find(':invalid').length){
          $('#v-pills-Personal').addClass('was-validated')
      }
       else {
          $('#v-pills-Personal').removeClass('was-validated')
          $('#v-pills-Position-tab').click()
      }



  })
    $('#positB').on('click',function (){

        if ($('#v-pills-Position').find(':invalid').length){
            $('#v-pills-Position').addClass('was-validated')
        }
        else{
            $('#v-pills-Position').removeClass('was-validated')
            $('#v-pills-WrkExp-tab').click()
        }




    })
    $('#wrkexpb').on('click',function (){

        if ($('#v-pills-WrkExp').find(':invalid').length){

            $('#v-pills-WrkExp').addClass('was-validated')
        }
        else{
            $('#v-pills-WrkExp').removeClass('was-validated')
            $('#v-pills-Education-tab').click()
        }
    })
    $('#edub').on('click',function (){

        if ($('#v-pills-Education').find(':invalid').length){
            //add validation
            $('#v-pills-Education').addClass('was-validated')
        }
        else{
            $('#v-pills-Education').removeClass('was-validated')
        }

    })
    $('.APL-PREV-EMPLOY').on('change',function (e){

        if(this.value == 'Y'){
            $('#PREV-EMPLOY-EXPAN').show(1000);
        }else  if (this.value == 'N'){
            $('#PREV-EMPLOY-EXPAN').hide();
        }
    })

    $('.Employed_Different_Name').on('change',function (e){
        console.log(this)
        if(this.value == 'Y'){

            $('#Employed_Different_Name-EXPAN').show(1000);

        }else  if (this.value == 'N'){
            $('#Employed_Different_Name-EXPAN').hide();
        }
    })
    $('.Spouse_NPS_Employee').on('change',function (e){
        console.log(this)
        if(this.value == 'Y'){

            $('#Spouse_NPS_Employee-EXPAN').show(1000);

        }else  if (this.value == 'N'){
            $('#Spouse_NPS_Employee-EXPAN').hide();
        }

    });
    $('.Friend_Applying_Details_Name').on('change',function (e){
        if(this.value == 'Y'){

            $('#Friend_Applying_Details_Name-EXPAN').show(1000);

        }else  if (this.value == 'N'){
            $('#Friend_Applying_Details_Name-EXPAN').hide();
        }
    })

});