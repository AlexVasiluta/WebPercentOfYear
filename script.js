function getPercent()
{
	var text = document.getElementById("text");
	var bar = document.getElementById("bar");
	var t = new Date();
	var day = t.getDate();
	var month = t.getMonth();
	var year = t.getFullYear();
	var dayselapsed = day, daystotal = 365;
	var leapyear = false;
	var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	console.log(day);
	console.log(month);
	console.log(year);
	if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0))
	{
		leapyear = true;
		daystotal = 366;
	}
	for(var i = 0; i < month; i++) {
		dayselapsed += months[i];
		if(leapyear)
			dayselapsed++;
	}
	var result = dayselapsed / daystotal * 100;
	text.innerHTML = year + " is " + result.toFixed(2).toString() + "% complete";
	bar.value = result;
}

getPercent();
