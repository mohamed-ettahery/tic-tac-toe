/*globale document */
var Box1 = document.getElementById("box1"),
	Box2 = document.getElementById("box2"),
	Box3 = document.getElementById("box3"),
	Box4 = document.getElementById("box4"),
	Box5 = document.getElementById("box5"),
	Box6 = document.getElementById("box6"),
	Box7 = document.getElementById("box7"),
	Box8 = document.getElementById("box8"),
	Box9 = document.getElementById("box9"),
	B1 = document.getElementById("b1"),
	B2 = document.getElementById("b2"),
	B3 = document.getElementById("b3"),
	B4 = document.getElementById("b4"),
	B5 = document.getElementById("b5"),
	B6 = document.getElementById("b6"),
	B7 = document.getElementById("b7"),
	B8 = document.getElementById("b8"),
	B9 = document.getElementById("b9"),
	myMsg = document.getElementById("messageWin"),
	myimg = document.getElementById("replay"),
	myMsg2 = document.getElementById("messageDraw"),
	c=0;
window.onload = function(){
	"use strict";
    
	setTimeout(function(){
		
		"use strict";
		document.getElementById("lab1").style.display = "block";
//		document.getElementById("lab2").style.display = "block";
		$("#lab2").fadeIn(1000);
		
	},3000);
//condition click about replay
myimg.onclick = function(){
	
	"use strict";
	// Box1.textContent = "";
	// Box2.textContent = "";
	// Box3.textContent = "";
	// Box4.textContent = "";
	// Box5.textContent = "";
	// Box6.textContent = "";
	// Box7.textContent = "";
	// Box8.textContent = "";
	// Box9.textContent = "";
	// B1.textContent = "";
	// B2.textContent = "";
	// B3.textContent = "";
	// B4.textContent = "";
	// B5.textContent = "";
	// B6.textContent = "";
	// B7.textContent = "";
	// B8.textContent = "";
	// B9.textContent = "";
	$(".container div,.container2 div").text("");
	myMsg.style.visibility = "hidden";
	myMsg2.style.visibility = "hidden";
	this.style.visibility = "hidden";
	
};

//$('.container>div').on('click',function(){
//    "use strict";
//    	c=c+1;
//	if(c % 2 == 0)
//		{
//			this.textContent = "O";
//			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
//		}
//	else
//		{
//			this.textContent = "X";
//			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
//		}
//    
// switch($(this).attr('id'))
//     {
//         case 'box1':
//             		if((this.textContent == "X" && Box2.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box4.textContent == "X" && Box7.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box9.textContent == "X"))
//                            {
//                                $("#scoreP1").text(parseInt($("#scoreP1").text())+1);
//                                myMsg.style.visibility = "visible";
//                                myimg.style.visibility = "visible";
//                            }
//                    else{
//                        if((this.textContent == "O" && Box2.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box4.textContent == "O" && Box7.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box9.textContent == "O"))
//                            {
//                                $("#scoreP2").text(parseInt($("#scoreP2").text())+1);
//                                myMsg.style.visibility = "visible";
//                                myimg.style.visibility = "visible";
//                            }
//                    }
//                //	if((this.textContent == Box2.textContent && this.textContent == Box3.textContent)||(this.textContent == Box4.textContent && this.textContent == Box7.textContent)||(this.textContent == Box5.textContent && this.textContent == Box9.textContent))
//                //		{
//                //			myMsg.style.visibility = "visible";
//                //			myimg.style.visibility = "visible";
//                //		}
//                    //3th condition
//                    if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
//                {
//                myimg.style.visibility = "visible";
//                    myMsg2.style.visibility = "visible";
//                }
//             break;
//     }
//
//});
Box1.onclick = function(){
	"use strict";
//if($(this).text() == "")
//{
        
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
//	second condition
		if((this.textContent == "X" && Box2.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box4.textContent == "X" && Box7.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box2.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box4.textContent == "O" && Box7.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box9.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	if((this.textContent == Box2.textContent && this.textContent == Box3.textContent)||(this.textContent == Box4.textContent && this.textContent == Box7.textContent)||(this.textContent == Box5.textContent && this.textContent == Box9.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
{
myimg.style.visibility = "visible";
	myMsg2.style.visibility = "visible";
}
//}
};
Box2.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && Box1.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box8.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box1.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box8.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	if((this.textContent == Box1.textContent && this.textContent == Box3.textContent)||(this.textContent == Box5.textContent && this.textContent == Box8.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box1.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
Box3.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && Box2.textContent == "X" && Box1.textContent == "X")||(this.textContent == "X" && Box6.textContent == "X" && Box9.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box7.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box2.textContent == "O" && Box1.textContent == "O")||(this.textContent == "O" && Box6.textContent == "O" && Box9.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box7.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	
//	if((this.textContent == Box2.textContent && this.textContent == Box1.textContent)||(this.textContent == Box6.textContent && this.textContent == Box9.textContent)||(this.textContent == Box5.textContent && this.textContent == Box7.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box2.textContent != "" && Box1.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }

};
Box4.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && Box1.textContent == "X" && Box7.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box6.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box1.textContent == "O" && Box7.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box6.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	
//	if((this.textContent == Box1.textContent && this.textContent == Box7.textContent)||(this.textContent == Box5.textContent && this.textContent == Box6.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box2.textContent != "" && Box3.textContent != "" && Box1.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
Box5.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && Box2.textContent == "X" && Box8.textContent == "X")||(this.textContent == "X" && Box4.textContent == "X" && Box6.textContent == "X")||(this.textContent == "X" && Box1.textContent == "X" && Box9.textContent == "X")||(this.textContent == "X" && Box3.textContent == "X" && Box7.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box2.textContent == "O" && Box8.textContent == "O")||(this.textContent == "O" && Box4.textContent == "O" && Box6.textContent == "O")||(this.textContent == "O" && Box1.textContent == "O" && Box9.textContent == "O")||(this.textContent == "O" && Box3.textContent == "O" && Box7.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	if((this.textContent == Box2.textContent && this.textContent == Box8.textContent)||(this.textContent == Box4.textContent && this.textContent == Box6.textContent)||(this.textContent == Box1.textContent && this.textContent == Box9.textContent) || (this.textContent == Box3.textContent && this.textContent == Box7.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box1.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
Box6.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
		//second condition
	if((this.textContent == "X" && Box3.textContent == "X" && Box9.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box4.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box3.textContent == "O" && Box9.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box4.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	if((this.textContent == Box3.textContent && this.textContent == Box9.textContent)||(this.textContent == Box5.textContent && this.textContent == Box4.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box1.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
	
};
Box7.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	
		//second condition
	if((this.textContent == "X" && Box4.textContent == "X" && Box1.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box8.textContent == "X" && Box9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box4.textContent == "O" && Box1.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box8.textContent == "O" && Box9.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	if((this.textContent == Box4.textContent && this.textContent == Box1.textContent)||(this.textContent == Box5.textContent && this.textContent == Box3.textContent)||(this.textContent == Box8.textContent && this.textContent == Box9.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box1.textContent != "" && Box8.textContent != "" && Box9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
	
	
};
Box8.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
		//second condition
	if((this.textContent == "X" && Box2.textContent == "X" && Box5.textContent == "X")||(this.textContent == "X" && Box7.textContent == "X" && Box9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box2.textContent == "O" && Box5.textContent == "O")||(this.textContent == "O" && Box7.textContent == "O" && Box9.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	if((this.textContent == Box2.textContent && this.textContent == Box5.textContent)||(this.textContent == Box7.textContent && this.textContent == Box9.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
	//3th condition
	if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box1.textContent != "" && Box9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
Box9.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
		//second condition
	if((this.textContent == "X" && Box6.textContent == "X" && Box3.textContent == "X")||(this.textContent == "X" && Box8.textContent == "X" && Box7.textContent == "X")||(this.textContent == "X" && Box5.textContent == "X" && Box1.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && Box6.textContent == "O" && Box3.textContent == "O")||(this.textContent == "O" && Box8.textContent == "O" && Box7.textContent == "O")||(this.textContent == "O" && Box5.textContent == "O" && Box1.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
//	if((this.textContent == Box3.textContent && this.textContent == Box6.textContent)||(this.textContent == Box5.textContent && this.textContent == Box1.textContent)||(this.textContent == Box8.textContent && this.textContent == Box7.textContent))
//		{
//			myMsg.style.visibility = "visible";
//			myimg.style.visibility = "visible";
//		}
//	
	//3th condition
	if(Box2.textContent != "" && Box3.textContent != "" && Box4.textContent != "" && Box5.textContent != "" && Box6.textContent != "" && Box7.textContent != "" && Box8.textContent != "" && Box1.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};

$("#letgo").click(function(){
	
	if($("#p1").val()!="" && $("#p2").val()!="")
		{
//			$(this).parent().fadeOut();
			$(this).parent().css("visibility","hidden");	
			$(".boss").css("visibility","visible");	
			$(".container2").css("visibility","hidden");
			$(".container").css("visibility","visible");
			$("#Player1").text($("#p1").val().split(" ",1));
			$("#Player2").text($("#p2").val().split(" ",1));
			$("#scoreP1").text("0");
			$("#scoreP2").text("0");
			myMsg.style.visibility = "hidden";
			myMsg2.style.visibility = "hidden";
			$(".container div").text("");
			if(c % 2 == 0)
		{
			$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !")
		}
	else
		{
			$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !")
		}
		}
	else{
		$("#msgname").show();
	}
	
});
$("#letgo2").click(function(){
	
	if($("#plyr").val()!="")
		{
//			$(this).parent().fadeOut();
			$(this).parent().css("visibility","hidden");	
			$(".boss").css("visibility","visible");
			$(".container").css("visibility","hidden");
			$(".container2").css("visibility","visible");
			$("#Player1").text($("#plyr").val().split(" ",1));
			$("#Player2").text("Computer");
			$("#scoreP1").text("0");
			$("#scoreP2").text("0");
			myMsg.style.visibility = "hidden";
			myMsg2.style.visibility = "hidden";
			$(".container2 div").text("");
//			if(c % 2 == 0)
//		{
//			$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !")
//		}
//	else
//		{
//			$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !")
//		}
		}
	else{
		$("#msgname2").show();
	}
	
});

$(".container div").click(function(){
	
	
if(c % 2 == 0)
		{
			$("#myturn").text($("#Player1").text()+" "+"Your Turn Now !")
		}
	else
		{
			$("#myturn").text($("#Player2").text()+" "+"Your Turn Now !")
		}
});

$("#startgame").click(function(){
	
//	$(this).parent().hide();
	$(this).parent().css("visibility","hidden");
//	$("#info").fadeIn();
	$("#info").css("visibility","visible");
	$("#infoVsComp").css("visibility","hidden");
});
	$("#vsComp").click(function(){
	
//	$(this).parent().hide();
	$(this).parent().css("visibility","hidden");
//	$("#info").fadeIn();
	$("#infoVsComp").css("visibility","visible");
	$("#info").css("visibility","hidden");
});
$("#return").click(function(){
//	$(this).parent().hide();
	$(this).parent().css("visibility","hidden");
//	$("#info").fadeIn();
//	$("#begin").css("visibility","visible");
});

$("#returnInfo").click(function(){
	
	$(this).parent().css("visibility","hidden");
	$("#begin").css("visibility","visible");
});
	$("#returnInfo2").click(function(){
	
	$(this).parent().css("visibility","hidden");
	$("#begin").css("visibility","visible");
});


	$("#lab2").click(function(){
		
		$(this).parent().css("visibility","hidden");
	});
	
	$("#return").click(function(){
		
		$("#begin").css("visibility","visible");
	});
	
//********************************************************
//********************************************************
//********************************************************
	
	B1.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
//	second condition
		if((this.textContent == "X" && B2.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B4.textContent == "X" && B7.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B2.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B4.textContent == "O" && B7.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B9.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
{
myimg.style.visibility = "visible";
	myMsg2.style.visibility = "visible";
}
};
B2.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && B1.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B8.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B1.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B8.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B1.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
B3.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && B2.textContent == "X" && B1.textContent == "X")||(this.textContent == "X" && B6.textContent == "X" && B9.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B7.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B2.textContent == "O" && B1.textContent == "O")||(this.textContent == "O" && B6.textContent == "O" && B9.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B7.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}	
	//3th condition
	if(B2.textContent != "" && B1.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }

};
B4.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && B1.textContent == "X" && B7.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B6.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B1.textContent == "O" && B7.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B6.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B2.textContent != "" && B3.textContent != "" && B1.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
B5.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	//second condition
	if((this.textContent == "X" && B2.textContent == "X" && B8.textContent == "X")||(this.textContent == "X" && B4.textContent == "X" && B6.textContent == "X")||(this.textContent == "X" && B1.textContent == "X" && B9.textContent == "X")||(this.textContent == "X" && B3.textContent == "X" && B7.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B2.textContent == "O" && B8.textContent == "O")||(this.textContent == "O" && B4.textContent == "O" && B6.textContent == "O")||(this.textContent == "O" && B1.textContent == "O" && B9.textContent == "O")||(this.textContent == "O" && B3.textContent == "O" && B7.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B1.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
B6.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
		//second condition
	if((this.textContent == "X" && B3.textContent == "X" && B9.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B4.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B3.textContent == "O" && B9.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B4.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B1.textContent != "" && B7.textContent != "" && B8.textContent != "" && B9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
	
};
B7.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
	
		//second condition
	if((this.textContent == "X" && B4.textContent == "X" && B1.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B8.textContent == "X" && B9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B4.textContent == "O" && B1.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B8.textContent == "O" && B9.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B1.textContent != "" && B8.textContent != "" && B9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
	
	
};
B8.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
		//second condition
	if((this.textContent == "X" && B2.textContent == "X" && B5.textContent == "X")||(this.textContent == "X" && B7.textContent == "X" && B9.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B2.textContent == "O" && B5.textContent == "O")||(this.textContent == "O" && B7.textContent == "O" && B9.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B1.textContent != "" && B9.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};
B9.onclick = function(){
	"use strict";
	
	c=c+1;
	if(c % 2 == 0)
		{
			this.textContent = "O";
			this.style.textShadow = "2px 2px 2px #00F,-2px -2px 3px #00F";
		}
	else
		{
			this.textContent = "X";
			this.style.textShadow = "2px 2px 2px #F00,-2px -2px 3px #F00";
		}
		//second condition
	if((this.textContent == "X" && B6.textContent == "X" && B3.textContent == "X")||(this.textContent == "X" && B8.textContent == "X" && B7.textContent == "X")||(this.textContent == "X" && B5.textContent == "X" && B1.textContent == "X"))
			{
				$("#scoreP1").text(parseInt($("#scoreP1").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	else{
		if((this.textContent == "O" && B6.textContent == "O" && B3.textContent == "O")||(this.textContent == "O" && B8.textContent == "O" && B7.textContent == "O")||(this.textContent == "O" && B5.textContent == "O" && B1.textContent == "O"))
			{
				$("#scoreP2").text(parseInt($("#scoreP2").text())+1);
				myMsg.style.visibility = "visible";
		    	myimg.style.visibility = "visible";
			}
	}
	//3th condition
	if(B2.textContent != "" && B3.textContent != "" && B4.textContent != "" && B5.textContent != "" && B6.textContent != "" && B7.textContent != "" && B8.textContent != "" && B1.textContent != "" )
	   {
	     myimg.style.visibility = "visible";
		   myMsg2.style.visibility = "visible";
	   }
};

};