$(function(){


    //to do
    //1 validate index
    //2 submit navigate to application
    //3 set minimun date for birthday
    // send birthday to personal info div
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    let today = new Date()
    let ageLimit = today.getFullYear() - 18
    today.setFullYear(ageLimit)


$('#Bday').setAttribute('max',`${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`)


    /*(() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()
*/

    // add a p element if they choose a job with

    //hide add more button if clicked ?

    //
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