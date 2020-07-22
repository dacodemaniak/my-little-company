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

    // Blur event handler : fired when the focus is lost from a field
    $('[required]').on(
        'blur',
        (event) => {
            console.log('Focus was lost on a required field... But which ?')
            const value = $(event.target).val()
            let errorDiv = $(event.target).next('div')
            if ($(event.target).attr('name') == 'email-ctrl') {
                errorDiv = $(event.target).parents('.form-group').next('div')
            }
            if (value == '') {
                // How do i remove a class on the next div ?
                errorDiv.removeClass('hidden')
            } else {
                // Well, how do i add a class on the next div ?
                errorDiv.addClass('hidden')
            }
        }
    )

    // Manage focus event on required fields
    $('[required]').on(
        'focus',
        (event) => {
            let nextDiv = null;
            if ($(event.target).attr('name') != 'email-ctrl') {
               nextDiv = $(event.target).next('div') 
            } else {
                nextDiv = $(event.target).parents('div.form-group').next('div')
            }
            
            console.log('Well i got the focus')
            if (!nextDiv.hasClass('hidden')) {
                nextDiv.addClass('hidden')
            }
        }
    )

    // Manage form submission
    $('form#contact-form').on(
        'submit',
        (event) => {
            console.log('Form was submit')

            event.preventDefault() // Empêche le déclenchement de l'événement par défaut

            // Récupérer les données du template
            const snackbar = $('#snackbar').contents().clone()

            console.log(JSON.stringify(snackbar))

            // Ajouter les éléments du snackbar au contenu visible courant
            $('body').append(snackbar)

            // Laisser vivant 3s et supprimer le clone
            setTimeout(
                () => {
                    snackbar.remove()
                },
                3000 // 3s
            )

        }
    )
  }  
)

