/** @format */

function send() {
	var sendMesg = document.getElementById("msg").value;
	var inbox = document.getElementById("inbox");
	for (let i = 0; i < inbox; i++) {
		inbox.innerHTML = sendMesg;
	}
}

// function reply() {
//     if (sendMesg === 'Hi' || sendMesg === 'Hello' || sendMesg === 'Hey') {
//         var
//     }
// }
