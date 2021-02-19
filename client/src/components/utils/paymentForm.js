const accessToken = process.env.ACCESS_TOKEN

const config = {
  
    // Initialize the payment form elements
    
    //TODO: Replace with your sandbox application ID
    applicationId: 'your_application_id',
    inputClass: 'sq-input',
    autoBuild: false,
    // Customize the CSS for SqPaymentForm iframe elements
    inputStyles: [{
        fontSize: '16px',
        lineHeight: '24px',
        padding: '16px',
        placeholderColor: '#a0a0a0',
        backgroundColor: 'transparent',
    }],
    // Initialize the credit card placeholders

    cardNumber: {
        elementId: 'sq-card-number', 
        placeholder: '•••• •••• •••• ••••'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal'
    },
    // SqPaymentForm callback functions
    callbacks: {
      
        /*
        * callback function: cardNonceResponseReceived
        * Triggered when: SqPaymentForm completes a card nonce request
        */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
        if (errors) {
            // Log errors from nonce generation to the browser developer console.
            console.error('Encountered errors:');
            errors.forEach(function (error) {
                console.error('  ' + error.message);
            });
            alert('Encountered errors, check browser developer console for more details');
            
            console.log("paymentform error 1")


            return;
        }
        let amount = JSON.parse(localStorage.getItem('state'));
           //alert(`The generated nonce is:\n${nonce}`);
           fetch('http://localhost:4000/process-payment', {
             
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + accessToken,
              },
    
              body: JSON.stringify({
                
                amount: amount.total,
                nonce: nonce
              })

            })
            
            .catch(err => {
              alert('Network error: ' + err);
              console.log("paymentform error 2")
            //   window.location.pathname = "/errorpage"
            })
            .then(response => {
              if (!response.ok) {
                return response.text().then(errorInfo => Promise.reject(errorInfo));
              }
              return response.text();
            })
            .then(data => {
              console.log(JSON.stringify(data));
              alert('Payment completed successfully!');
            })
            .catch(err => {
              console.error(err);
              alert('Payment failed to complete!\nCheck browser developer console form more details');
            //   window.location.pathname = "/errorpage"
              console.log("paymentform error 3")
            });
        }
      }
      
}


export default config