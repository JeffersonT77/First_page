var posicion = 0;
var img_x=1;
var cantUsers;
var i;
var j;
var table = document.getElementById("table");
var tr = table.rows;
var cantTr = tr.length-1;
var img = true;
var mou = true;
var war = true;
var abo = true;
//================================================================================//
buttonsave.onclick = register;
buttonload.onclick = showUserNames;
buttondelete.onclick = deleteUsers;
especialCB.onclick = selectAll;
logos.onclick = image;
images.onclick = showImage;
mouse.onclick = showMouse;
warning.onclick = showWarning;
about.onclick = showAbout;
//================================================================================//
calculateUsers();
//================================================================================//
function register()
{
	calculateUsers();
	posicion = cantUsers;
	var firstLetter
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var username = document.getElementById("user").value;
	var password = document.getElementById("password").value;
	password = password.toLowerCase()

	if(name[0]==" " || name=="" || age=="" || username[0]==" " || username=="" || password[0]==" " || password=="")
	{
		alert("Complete todos los espacios vacios, sin espacios al inicio");
	}
	else
	{
		if(cantUsers==0)
		{
			localStorage.setItem("name_"+posicion, name);
			localStorage.setItem("age_"+posicion, age);
			localStorage.setItem("username_"+posicion, username);
			localStorage.setItem("password_"+posicion, password);
			localStorage.setItem("ID_"+posicion, posicion+1);

			document.getElementById("name").value = "";
			document.getElementById("age").value = "";
			document.getElementById("user").value = "";
			document.getElementById("password").value = "";
		}
		else
		{
			var anotherVar;
			var contenedor_2=0;
			for(anotherVar=0; anotherVar<posicion; anotherVar++)
			{
				var idTemp = localStorage.getItem("ID_"+anotherVar);
				var nameTemp = localStorage.getItem("name_"+anotherVar);
				var ageTemp = localStorage.getItem("age_"+anotherVar);
				var usernameTemp = localStorage.getItem("username_"+anotherVar);
				var passwordTemp = localStorage.getItem("password_"+anotherVar);
				if(idTemp==null && nameTemp==null && ageTemp==null && usernameTemp==null && passwordTemp==null)
				{
					posicion+=1;
					contenedor_2+=1;
				}
			}
			localStorage.setItem("name_"+posicion, name);
			localStorage.setItem("age_"+posicion, age);
			localStorage.setItem("username_"+posicion, username);
			localStorage.setItem("password_"+posicion, password);
			localStorage.setItem("ID_"+posicion, posicion+1);

			document.getElementById("name").value = "";
			document.getElementById("age").value = "";
			document.getElementById("user").value = "";
			document.getElementById("password").value = "";
		}
		
	}
	calculateUsers();
}

function calculateUsers()
{
	cantUsers = 0;
	cantLocalS = localStorage.length;
	cantUsers = cantLocalS/5;

	document.getElementById("show_1_id").innerHTML =
	"<small>Catidad de usuarios: "+ cantUsers +"</small>";

	document.getElementById("show_2_id").innerHTML =
	"<small>Cantidad de Usuarios en tabla: "+ cantTr +"</small>";
}

function showUserNames()
{
	calculateUsers();
	var cantTr = tr.length-1;
	if(cantUsers<0)
	{
		alert("Error, revisar el localStorage o la cantidad de usuarios");
	}
	if(cantUsers==0 && cantTr==0)
	{
		alert("No hay usuarios que cargar.");
	}
	if (cantUsers>=0)
	{
		if(cantUsers>cantTr && cantTr==0)
		{
			var cont_1;
			var contenedor=0;
			var cantUsers_2 = cantUsers;
			for(cont_1=0; cont_1<cantUsers_2; cont_1++)
			{
				var idTemp = localStorage.getItem("ID_"+cont_1);
				var nameTemp = localStorage.getItem("name_"+cont_1);
				var ageTemp = localStorage.getItem("age_"+cont_1);
				var usernameTemp = localStorage.getItem("username_"+cont_1);
				var passwordTemp = localStorage.getItem("password_"+cont_1);
				if(idTemp==null || nameTemp==null || ageTemp==null || usernameTemp==null || passwordTemp==null)
				{
					cantUsers_2+=1;
					contenedor+=1;
				}
				else
				{
					var cont_2 = cont_1 + 1;
					var anotherCont = cont_2-contenedor;
					var addRow = table.insertRow(anotherCont);
					var cell1 = addRow.insertCell(0);
					var cell2 = addRow.insertCell(1);
					var cell3 = addRow.insertCell(2);
					var cell4 = addRow.insertCell(3);
					var cell5 = addRow.insertCell(4);
					var cell6 = addRow.insertCell(5);
					cell1.innerHTML = localStorage.getItem("ID_"+cont_1);
					cell2.innerHTML = localStorage.getItem("name_"+cont_1);
					cell3.innerHTML = localStorage.getItem("age_"+cont_1);
					cell4.innerHTML = localStorage.getItem("username_"+cont_1);
					cell5.innerHTML = localStorage.getItem("password_"+cont_1);
					cell6.innerHTML = "<input type='checkbox' onclick='colorTr()' id='ID_"+anotherCont+"'>";
				}
			}
		}
		if(cantUsers>=cantTr && cantTr>0)
		{
			var cont_3;
			var contenedor=0;
			var cantUsers_2=cantUsers;
			var cantTr_2 = cantTr;
			for(cont_3=0; cont_3<cantTr_2; cont_3++)
			{
				var idTemp = localStorage.getItem("ID_"+cont_3);
				var nameTemp = localStorage.getItem("name_"+cont_3);
				var ageTemp = localStorage.getItem("age_"+cont_3);
				var usernameTemp = localStorage.getItem("username_"+cont_3);
				var passwordTemp = localStorage.getItem("password_"+cont_3);
				if(idTemp==null || nameTemp==null || ageTemp==null || usernameTemp==null || passwordTemp==null)
				{
					cantTr_2+=1;
					cantUsers_2+=1;
					contenedor+=1;
				}
				else
				{
					var cont_4=cont_3+1;
					var anotherCont = cont_4-contenedor;
					var td = tr[anotherCont].cells;
					td[0].innerHTML = idTemp;
					td[1].innerHTML = nameTemp;
					td[2].innerHTML = ageTemp;
					td[3].innerHTML = usernameTemp;
					td[4].innerHTML = passwordTemp;
					td[5].innerHTML = "<input type='checkbox' onclick='colorTr()' id='ID_"+anotherCont+"'>";
				}
			}
			var cont_5;
			var cont_10;
			for(cont_5=cantTr_2+1; cont_5<=cantUsers_2; cont_5++)
			{
				cont_10=cont_5-1;
				var idTemp = localStorage.getItem("ID_"+cont_10);
				var nameTemp = localStorage.getItem("name_"+cont_10);
				var ageTemp = localStorage.getItem("age_"+cont_10);
				var usernameTemp = localStorage.getItem("username_"+cont_10);
				var passwordTemp = localStorage.getItem("password_"+cont_10);
				if(idTemp==null || nameTemp==null || ageTemp==null || usernameTemp==null || passwordTemp==null)
				{
					cantUsers_2+=1;
					contenedor+=1;
				}
				else
				{
					var anotherCont = cont_5-contenedor;
					var addRow = table.insertRow(anotherCont);
					var cell1 = addRow.insertCell(0);
					var cell2 = addRow.insertCell(1);
					var cell3 = addRow.insertCell(2);
					var cell4 = addRow.insertCell(3);
					var cell5 = addRow.insertCell(4);
					var cell6 = addRow.insertCell(5);
					cell1.innerHTML = localStorage.getItem("ID_"+cont_10);
					cell2.innerHTML = localStorage.getItem("name_"+cont_10);
					cell3.innerHTML = localStorage.getItem("age_"+cont_10);
					cell4.innerHTML = localStorage.getItem("username_"+cont_10);
					cell5.innerHTML = localStorage.getItem("password_"+cont_10);
					cell6.innerHTML = "<input type='checkbox' onclick='colorTr()' id='ID_"+anotherCont+"'>";
				}
			}
		}
		if(cantUsers<cantTr)
		{
			var cont_7;
			var cantUsers_2 = cantUsers;
			var contenedor = 0;
			for(cont_7=1; cont_7<=cantUsers_2; cont_7++)
			{
				var cont_8=cont_7-1;
				var idTemp = localStorage.getItem("ID_"+cont_8);
				var nameTemp = localStorage.getItem("name_"+cont_8);
				var ageTemp = localStorage.getItem("age_"+cont_8);
				var usernameTemp = localStorage.getItem("username_"+cont_8);
				var passwordTemp = localStorage.getItem("password_"+cont_8);
				if(idTemp==null || nameTemp==null || ageTemp==null || usernameTemp==null || passwordTemp==null)
				{
					cantUsers_2+=1;
					contenedor+=1;
				}
				else
				{
					var anotherCont = cont_7-contenedor;
					var td = tr[anotherCont].cells;
					td[0].innerHTML = idTemp;
					td[1].innerHTML = nameTemp;
					td[2].innerHTML = ageTemp;
					td[3].innerHTML = usernameTemp;
					td[4].innerHTML = passwordTemp;
					td[5].innerHTML = "<input type='checkbox' onclick='colorTr()' id='ID_"+anotherCont+"'>";
				}
			}
			calculateUsers();
			var cantTr = tr.length-1;
			var cont_9;
			for(cont_9=cantTr; cont_9>cantUsers; cont_9--)
			{
				table.deleteRow(cont_9);
			}
		}
	}
	showUserNumbers();
	colorTr();
	document.getElementById("especialCB").checked=false;
	calculateUsers();
}
function showUserNumbers()
{
	cantTr = tr.length-1;
	document.getElementById("title_user").innerHTML = "Usuarios (" + cantUsers + ")";

	document.getElementById("show_1_id").innerHTML =
	"<small>Catidad de usuarios: "+ cantUsers +"</small>";

	document.getElementById("show_2_id").innerHTML =
	"<small>Cantidad de Usuarios en tabla: "+ cantTr +"</small>";
}

function selectAll()
{
	var contador_2=1;
	if(document.getElementById("especialCB").checked == true)
	{
		for(contador_2=1; contador_2<=cantTr; contador_2++)
		{
			document.getElementById("ID_"+contador_2).checked = true;
		}
	}
	else if(document.getElementById("especialCB").checked == false)
	{
		for(contador_2=1; contador_2<=cantTr; contador_2++)
		{
			document.getElementById("ID_"+contador_2).checked = false;
		}
	}
	colorTr();
}
function deleteUsers()
{
	calculateUsers();
	var cantTr = tr.length-1;
	var delUsers;
	var otraVariable;
	var cantDel=0;
	for(otraVariable=1; otraVariable<=cantTr; otraVariable++)
	{
		if(document.getElementById("ID_"+otraVariable).checked==true)
		{
			cantDel+=1;
		}
	}
	var sureMan = confirm("Esta seguro que desea eliminar "+cantDel+" Usuarios?");
	if(sureMan==true)
	{
		document.getElementById("especialCB").checked=false;
		for(delUsers=cantTr; delUsers>=1; delUsers--)
		{
			if(document.getElementById("ID_"+delUsers).checked==true)
			{
				var delUserLess = delUsers - 1;
				var td = tr[delUsers].cells;

				table.deleteRow(delUsers);

				var thisValue = td[0].innerText;
				var thisValue_2 = thisValue-1;
				localStorage.removeItem("ID_"+thisValue_2);
				localStorage.removeItem("name_"+thisValue_2);
				localStorage.removeItem("age_"+thisValue_2);
				localStorage.removeItem("username_"+thisValue_2);
				localStorage.removeItem("password_"+thisValue_2);
				var delUsers_2;
				var cantTr = tr.length-1;
				for(delUsers_2=delUsers; delUsers_2<=cantTr; delUsers_2++)
				{
					var td = tr[delUsers_2].cells;
					td[5].innerHTML = "<input type='checkbox' onclick='colorTr()' id='ID_"+delUsers_2+"'>";
				}
			}
		}
	}
	calculateUsers();
	showUserNumbers();
}

function colorTr()
{
	var color;
	for(color=1; color<=cantTr; color++)
	{
		if(document.getElementById("ID_"+color).checked==true)
		{
			tr[color].style.backgroundColor = "rgb(240,240,240)";
		}
		else if(document.getElementById("ID_"+color).checked==false)
		{
			tr[color].style.backgroundColor = "rgb(255,255,255)";
		}
	}
}
//================================BOTTONS=========================================//
function showImage()
{
	if(img == true)
	{
		document.getElementById("image_id").style.display="block";
		img = false;
	}
	else if(img == false)
	{
		document.getElementById("image_id").style.display="none";
		img = true;
	}
}
function image()
{
	var seleccion = Array("skater_1.png", "skater_2.png", "skater_3.png", "skater_4.png", "skate.jpg");
	var img = document.getElementById("logos");
	if(img_x==1)
	{
		img.src = seleccion[0];
		img_x=2;
	}
	else if(img_x==2)
	{
		img.src = seleccion[1];
		img_x=3;
	}
	else if(img_x==3)
	{
		img.src = seleccion[2];
		img_x=4;
	}
	else if(img_x==4)
	{
		img.src = seleccion[3];
		img_x=5;
	}
	else if(img_x==5)
	{
		img.src = seleccion[4];
		img_x=1;
	}
}
//================================================================================//
function showMouse()
{
	if(mou == true)
	{
		document.getElementById("mouse_id").style.display="block";
		mou = false;
	}
	else if(mou == false)
	{
		document.getElementById("mouse_id").style.display="none";
		mou = true;
	}
}
//================================================================================//
function showWarning()
{
	if(war == true)
	{
		document.getElementById("warning_id").style.display="block";
		war = false;
	}
	else if(war == false)
	{
		document.getElementById("warning_id").style.display="none";
		war = true;
	}
}
onclicks.onclick = fun_1;
ondblclicks.ondblclick = fun_2;
onauxclicks.onauxclick = fun_3;
function fun_1()
{
	alert("Has clickeado");
}
function fun_2()
{
	alert("Has hecho doble click");
}
function fun_3()
{
	alert("has clickeado con el botos derecho");
}
//================================================================================//
function showAbout()
{
	if(abo == true)
	{
		document.getElementById("about_id").style.display="block";
		abo = false;
	}
	else if(abo == false)
	{
		document.getElementById("about_id").style.display="none";
		abo = true;
	}
}
//================================================================================//