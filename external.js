function LoginForm(event){
	var element = event.currentTarget;
	
	var a = element[0].value;	//email
	var b = element[1].value;	//password
	
	var result = true;
	
	var email_v = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/; 
	var pswd_v = /^([a-z]|[A-Z]|[0-9]){8}$/;
	
	document.getElementById("email_msg").innerHTML="";
	document.getElementById("pswd_msg").innerHTML="";
	
	if(a==null||a==""||!email_v.test(a))
		{
		document.getElementById("email_msg").innerHTML="Email is empty or invalid (xxx@xxx.xxx) ||";
		result = false;
		}
	
	if(b==null||b==""||!pswd_v.test(b))
		{
		document.getElementById("pswd_msg").innerHTML="8 characters only, no spaces ";
		result = false
		}
	
	if(result==false)
		{
		event.preventDefault();
		}
	}



function SignupForm(event){
	var element = event.currentTarget;
	
	var a = element[0].value;	//username
	var b = element[1].value;	//email
	var c = element[2].value;	//dob
	var d = element[3].value;	//password
	var e = element[4].value;	//confirm password
	var f = element[5].value;
	
	var result = true;
	
	var email_v = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/; 
	var uname_v = /^[a-zA-Z0-9_-]+$/;
	var pswd_v = /^([a-z]|[A-Z]|[0-9]){8}$/;
	var date_v =  /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	
	document.getElementById("uname_msg").innerHTML="";
	document.getElementById("email_msg").innerHTML="";
	document.getElementById("date_msg").innerHTML="";
	document.getElementById("pswd_msg").innerHTML="";
	document.getElementById("pswdr_msg").innerHTML="";
	document.getElementById("photo_msg").innerHTML="";
	
	if(a==null||a==""||!uname_v.test(a))
		{
		document.getElementById("uname_msg").innerHTML="Invalid! No spaces or other non-word characters.";
		result = false;
		}
	
	if(b==null||b==""||!email_v.test(b))
		{
		document.getElementById("email_msg").innerHTML="Email is empty or invalid (xxx@xxx.xxx). ";
		result = false;
		}
	
	if(c==null||c==""||!date_v.test(c))
		{
		document.getElementById("date_msg").innerHTML="please follow the format mm/dd/yyyy. ";
		result = false;
		}
	
	
	if(d==null||d==""||!pswd_v.test(d))
	{
		document.getElementById("pswd_msg").innerHTML="8 characters only, no spaces. ";
		result = false;
	}
	
	if(e==null||e==""||!pswd_v.test(e)||e!=d)
	{
		document.getElementById("pswdr_msg").innerHTML="Password does not match! ";
		result = false;
	}
	
	if(f==null||f=="")
		{
		document.getElementById("photo_msg").innerHTML="No picture uploaded. ";
		result = false;
		}
	
	if(result==false)
	{
	event.preventDefault();
	}

}


function accessCode(event){
	var element = event.currentTarget;
	
	var a = element[0].value;
	
	
	var result = true;
	
	var code_v = /^[a-zA-Z0-9_-]{6}$/;
	
	document.getElementById("code_msg_1").innerHTML="";
	
	
	if(a==null||a==""||!code_v.test(a))
		{
		document.getElementById("code_msg_1").innerHTML="6 characters only, please re-enter.";
		return false;
		}
	
	if(result==false)
		{
		event.preventDefault();
		}
	
}



function code1(){
	//var x = document.forms["myCode_1"]["code_1"].value;
	var x = document.forms.user_1.code_1.value;
	
	//var x = document.getElementById("user_1");
	var result = true;
	
	document.getElementById("code_msg").innerHTML="";
	
	var code_v = /^[a-zA-Z0-9_-]{6}$/;
	
	if(x==null||x==""||!code_v.test(x))
		{
		document.getElementById("code_msg").innerHTML="6 characters only, please re-enter.";
		return false;
		}

}





function textForm(event){ 

    var elements = event.currentTarget;

      
    var a = elements[0].value;	//text form value
    
    var b = elements[1].value;	//access code value
    var c = elements[2].value;	//date value
    var d = elements[3].value;	//time value
    
    var result = true;    
        

	var code_v = /^[a-zA-Z0-9]{6}$/;
	var date_v = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	var time_v = /^\d{1,2}:\d{2}([ap]m)?$/;
   
   
    document.getElementById("code_msg4").innerHTML ="";
    document.getElementById("date_msg").innerHTML ="";
    document.getElementById("time_msg").innerHTML ="";
    
    if (a==null || a=="")
        {	   
	   document.getElementById("text_msg").innerHTML="Post form cannot be empty.";
           result = false;
        }

	if (b==null || b=="" ||code_v.test(b) == false){  
	    document.getElementById("code_msg4").innerHTML="Access code must be 6 characters.";
	    result = false;
    }
   

	if (c==null || c=="" || date_v.test(c) == false){
		document.getElementById("date_msg").innerHTML="Date is invalid.";
		result = false;
	}

	if (d==null || d=="" ||time_v.test(d) == false){
		document.getElementById("time_msg").innerHTML="Time is invalid.";
		result = false;
	}
	
    if(result == false )
        {    
            event.preventDefault();
        }
}





function size(text){
	var max = 1000;
	if(text.value.length < max)
		{
			var str = max - text.value.length;
			document.getElementById("check_text").innerHTML=str.toString();
		}
	else
		{
			document.getElementById("check_text").innerHTML="Exceeded limit!";
		}
}