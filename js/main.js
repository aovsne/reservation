function result(){
	var guestName = document.getElementById('name').value.toUpperCase()
	var guestNumber = document.getElementById('guests').value.toUpperCase()
	var guestArray = 
		{
			name: guestName,
			number: guestNumber
		}
	
	document.getElementById('gogo').innerHTML = "Hi Mr. " + guestArray.name + " your reservation for " + guestArray.number + " guests is reserved."

	console.log(guestArray)

}