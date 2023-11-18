// const submit = document.querySelector('.submit');

// submit.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	let userName = document.querySelector('#userName');
// 	let pNumber = document.querySelector('#pNumber');
// 	if (userName.value == '' && pNumber.value == '') {
// 		alert('enter User Name and phone Number');
//         // return
// 	} else {
// 		console.log(userName.value);
// 		console.log(pNumber.value);

// 		userName.value = '';
// 		pNumber.value = '';
// 	}
// });

// const submit = document.querySelector('.submit');

// submit.addEventListener('click', async (e) => {
// 	e.preventDefault();
// 	let userName = document.querySelector('#userName');
// 	let pNumber = document.querySelector('#pNumber');

// 	if (userName.value == '' || pNumber.value == '') {
// 		alert('Please enter User Name and Phone Number');
// 	} else {
// 		// Create a data object to send in the request body
// 		const data = {
// 			userName: userName.value,
// 			pNumber: pNumber.value,
// 		};

// 		try {
// 			// Make a POST request using the fetch API
// 			const response = await fetch('http://localhost:5000/userData', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(data),
// 			});

// 			// Check if the request was successful (status code 200-299)
// 			if (response.ok) {
// 				console.log('Data saved successfully');
// 			} else {
// 				console.error('Failed to save data:', response.statusText);
// 			}
// 		} catch (error) {
// 			console.error('Error during fetch:', error.message);
// 		}

// 		// Reset input values
// 		userName.value = '';
// 		pNumber.value = '';
// 	}
// });

const submit = document.querySelector('.submit');

submit.addEventListener('click', async (e) => {
	e.preventDefault();
	let userName = document.querySelector('#userName');
	let pNumber = document.querySelector('#pNumber');

	if (userName.value == '' || pNumber.value == '') {
		alert('Please enter User Name and Phone Number');
	} else {
		// Convert the phone number to a number
		const phoneNumberAsNumber = Number(pNumber.value);

		// Check if the conversion is successful and the result is not NaN
		if (!isNaN(phoneNumberAsNumber)) {
			// Create a data object to send in the request body
			const data = {
				userName: userName.value,
				pNumber: phoneNumberAsNumber,
			};

			try {
				// Make a POST request using the fetch API
				const response = await fetch('http://localhost:5000/userData', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				// Check if the request was successful (status code 200-299)
				if (response.ok) {
					console.log('Data saved successfully');
					alert('Data saved successfully');
				} else {
					console.error('Failed to save data:', response.statusText);
				}
			} catch (error) {
				console.error('Error during fetch:', error.message);
			}
		} else {
			alert('Please enter a valid phone number');
		}

		// Reset input values
		userName.value = '';
		pNumber.value = '';
	}
});
