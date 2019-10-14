
var newdiv;
var arr = [];
function createFields() {
    arr = ["InputField1", "InputField2", "InputField3", "InputField4", 
            "InputField5", "InputField6", "InputField7", "InputField8", 
            "InputField9", "InputField10", "InputField11", 
            "InputField12"];

	for (var i = 0; i < arr.length; i++) {
		newdiv = document.createElement('div');
		newdiv.id = 'field' + (i + 1);
	
        newdiv.innerHTML = "<br>"+"<label>"+arr[i]+"</label>"+"<br>"+
                            "<input type='text' id='field'"+" class='a' onkeypress = 'allowNumbersOnly(event)'>"+"<span></span>";
		document.getElementById('fields').appendChild(newdiv);		
	}

}

		
var arr = [];
function allowNumbersOnly(e) {
	var code = (e.which) ? e.which : e.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {
		e.preventDefault();
	}
	arr.push(String.fromCharCode(code));
}


function isNumber(event) {
	document.getElementById("duplicate").innerHTML = "";
	event.preventDefault()

	var str = [], s;

	var elem = document.getElementsByClassName("a");
	console.log((elem.value))
	var inputKeys = [];
	var numArr = [];
	for (var i = 0; i < elem.length; ++i) {
		if (typeof elem[i].value !== "undefined") {
			s = (elem[i].value).replace(/^0+/, '');
			inputKeys.push(s);
			numArr.push(inputKeys.map(Number)[i]);

		}
	}
	console.log(numArr);
	
	var allDiv = document.getElementById("fields").getElementsByTagName('div')
	
	var m = true;
	var k = 0;
	for (var i = 0; i < allDiv.length; i++) {

		var a = allDiv[i].getElementsByTagName('input')[0].value;
		console.log((a));
		if (a.length >= 1 && (a) < 1 || (a) > inputKeys.length) {
			allDiv[i].getElementsByTagName("span")[0].innerHTML = "<br>"+"please enter the Numeric value only Among 1-" + inputKeys.length;
			m = false;
        	}
        
		else {
			allDiv[i].getElementsByTagName("span")[0].innerHTML = "";

		}
		if (str.includes(inputKeys[i]) && inputKeys[i] != "") {
			k = k + 1;

		}
		else {
			s = inputKeys[i].replace(/^0+/, '');
			str.push(s);
			document.getElementById("duplicate").innerHTML = "";

		}
		if (k != 0) {
			document.getElementById("duplicate").innerHTML = "Duplicate Values are not allowed";
			m = false;
		}


		}
	
	
	if (m == true) {
		
	 objArr1 = [];
	 objArr2 = [];
	
		for (var i = 0; i < numArr.length; i++) {

			if (numArr[i] != 0) {
                var div1 = document.getElementsByTagName('div')[i];
		console.log(div1);
                var inputval1 =  div1.getElementsByTagName("input")[0].value;
		console.log(typeof(Number(inputval1)));
                var obj = new Hero(div1,Number(inputval1)); 
                objArr1.push(obj);
	
			}

		}
		for (var i = 0; i < numArr.length; i++) {


			if (numArr[i] == 0) {
                var div2 =document.getElementsByTagName('div')[i];
                var inputval2 =  div2.getElementsByTagName("input")[0].value
 		var obj = new Hero(div2,Number(inputval2)); 
                objArr2.push(obj);
              
		
			}

		}
		console.log(objArr1);
		console.log(objArr2);
		for (var i = 0; i<objArr1.length; i++) 
        	{
            		for (var j = i + 1; j<objArr1.length; j++) 
            		{
                		if (objArr1[i].ninputval > objArr1[j].ninputval) 
                		{
                    		temp = objArr1[i];
                    		objArr1[i] = objArr1[j];
                    		objArr1[j] = temp;
                		}
            		}
        	}
		document.getElementById('fields').innerHTML = "";
		
		for (var i = 0; i < objArr1.length; i++) {

		document.getElementById('fields').appendChild(objArr1[i].ndiv);
		
		}
		for (var i = 0; i < objArr2.length; i++) {
		document.getElementById('fields').appendChild(objArr2[i].ndiv);
		
		}
		
		console.log(objArr1);
		console.log(objArr2);
	}

}

class Hero {

	constructor(ndiv,ninputval) {
		this.ndiv = ndiv;
		this.ninputval = ninputval;
	}

}
