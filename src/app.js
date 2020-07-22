/**
 * @name app.js
 * @version 1.0.0
 * @author ADRAR - Juil. 2020
 * @abstract Manage contact form
 * @see JQuery (https://jquery.com)
 */
$(document).ready(
  () => {
    console.log('App works!')

    // Sets array of controls that are required
    const requiredControls = [
        'lastname-ctrl',
        'email-ctrl'
    ]
    // Sets an event handler on form
    $('#contact-form').on(
      'change keyup',
        (event) => {
            console.log('Change was detected on form')
            let isValid = true // Set form as valid before checking required fields
            requiredControls.forEach((control) => {
                const requiredControlValue = $('[name="' + control + '"]').val()
                console.log(`Value for ${control} : ${requiredControlValue}`)
                if (requiredControlValue == '') {
                    isValid = false // Set form as invalid if at least one controle is dirty
                }
            })
            console.log(`My form is : ${isValid ? 'Valid' : 'Invalid'}`)
            if (isValid) {
                // Well buddy, remove that fck disabled attribute
                $('#send-button').removeAttr('disabled')
            } else {
                // Something went wrong with user... 
                $('#send-button').attr('disabled', 'disabled')
            }
        }    
    )
  }  
)

