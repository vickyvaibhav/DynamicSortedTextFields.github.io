

function createFields(){
	var arr = ["InputField1","InputField2","InputField3","InputField4","InputField5","InputField6","InputField7","InputField8","InputField9","InputField10","InputField11","InputField12"]
	var i;

	for(i=0; i<arr.length; i++){
 	  var newdiv = document.createElement('div');
	 
	  var txtLabel = document.createElement("Label");
 	  var newspan = document.createElement("span");
 	  txtLabel.innerHTML = "<br>"+arr[i];
          newdiv.innerHTML = "<input type='text' id='field' maxlength = '' name=''class='a'>";
	   document.getElementById('fields').appendChild(txtLabel);
	   document.getElementById('fields').appendChild(newdiv);

	   newspan.id = 's'+(i+1);
	
	   document.getElementById('fields').appendChild(newspan);
	console.log(txtLabel)	
console.log(newdiv)	
console.log(newspan)
	}   
	
	
}
function isNumber(event){
	document.getElementById("duplicate").innerHTML = "";
        event.preventDefault()
                                
        var str = [],s;
        console.log(str);
   
 var elem = document.getElementsByClassName("a");
	
  var inputKeys = [];
  for (var i = 0; i < elem.length; ++i) {
    if (typeof elem[i].value !== "undefined") {
  	s = (elem[i].value).replace(/^0+/, '');
	        inputKeys.push(s);
		
	
      }
    }
console.log(inputKeys)
        var k=0;
        console.log(inputKeys)
        var i;
                                
        for(i=0; i<inputKeys.length; i++){
		var a = (inputKeys[i]);
		console.log(((Number(a))))
		if(a.length>=1 && isNaN(Number(a)) || parseInt(a)<1 || parseInt(a)>inputKeys.length ){
                	document.getElementById("s"+(i+1)).innerHTML="please enter the Numeric value only Among 1-"+inputKeys.length;                                     
                }
        	
                else{
                         document.getElementById("s"+(i+1)).innerHTML="";
                }  
                if(str.includes(inputKeys[i]) && inputKeys[i]!=""){
                	k=k+1;
                                
                }
                else{
			s = inputKeys[i].replace(/^0+/, '');
			str.push(s);
			console.log(str);
			document.getElementById("duplicate").innerHTML = "";             
                }
                if(k!=0){
                        document.getElementById("duplicate").innerHTML = "Duplicate Values are not allowed";
                }
                                
       }
  
} 
