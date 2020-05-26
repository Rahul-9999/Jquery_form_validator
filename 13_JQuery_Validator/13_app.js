$.validator.setDefaults( {
    submitHandler: function () {
        alert( "submitted!" );
    }
});

// validation
$('#register-form').validate({
    rules : {
        firstname : {
            required : true,
            minlength : 3
        },
        lastname : {
            required : true,
            minlength : 3
        },
        username : {
            required : true,
            minlength : 5
        },
        email : {
            required : true,
            email: true
        },
        password : {
            required : true,
            minlength : 5
        },
        c_password : {
            required : true,
            minlength : 5,
            equalTo: "#password"
        },
        terms : {
            required : true
        }
    },
    messages : {
        firstname : {
            required : 'Please enter firstname',
            minlength : 'please enter at least 3 letters'
        },
        lastname : {
            required : 'Please enter lastname',
            minlength : 'please enter at least 3 letters'
        },
        username : {
            required : 'Please enter username',
            minlength : 'please enter at least 5 letters'
        },
        email : {
            required : 'Please enter an email',
            email: 'please enter a proper email'
        },
        password : {
            required : 'Please enter password',
            minlength : 'please enter at least 5 letters'
        },
        c_password : {
            required : 'Please enter confirm password',
            minlength : 'please enter at least 5 letters',
            equalTo: 'Passwords are NOT matched'
        },
        terms : {
            required : 'Please accept the terms & conditions'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});
