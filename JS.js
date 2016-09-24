 
	function sum(){
		var x;

			switch(document.getElementById("from").value){


			case "USD":

			if ((document.getElementById("to").value=="INR")) {

				x=66.71*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="GBP"))
			 {
			 	x=0.77*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD")) {
			 	x=1.32*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }

			 break;


			 case "INR":

			 if ((document.getElementById("to").value=="USD")) {

				x=0.015*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="GBP"))
			 {
			 	x=0.012*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD")) {
			 	x=0.020*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }

			 break;

			 case "GBP":

			  if ((document.getElementById("to").value=="USD")) {

				x=1.30*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=86.49*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="CAD")) {
			 	x=1.71*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;

             case "CAD":
             if ((document.getElementById("to").value=="USD")) {

				x=0.76*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			} else if ((document.getElementById("to").value=="INR"))
			 {
			 	x=50.65*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }else if ((document.getElementById("to").value=="GBP")) {
			 	x=0.59*document.getElementById("io").value ;
		document.getElementById("io1").value=x;
			 }
             break;
}

if (document.getElementById("from").value==document.getElementById("to").value) {

	document.getElementById("io1").value=1;
}


if((document.getElementById("from").value=="Select")||(document.getElementById("to").value=="Select")){

	 alert("Please Select the Currency");
}

 

 }
 