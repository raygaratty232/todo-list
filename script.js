//класс : create создает образец div с тегом p для вывода записа инпута и радио бтн для подсвечивания важности дела 
// или альтернатива


var fild = document.querySelector("#fild");
var write = document.querySelector("#write");
var out = document.querySelector(".out");

write.addEventListener('click' , createElement);

function createElement(){
	var todoBox = document.createElement('div');
	var clear = document.createElement('input');
	clear.setAttribute('type' , 'checkbox');
	todoBox.className = 'todo-box';
	todoBox.appendChild(clear)
	out.appendChild(todoBox)
	writeTodo(todoBox)
	clearBox(clear , todoBox)
}

function clearBox(elem , todoBox){
	elem.addEventListener('input' , function(){
		if(elem.checked){
			todoBox.hidden = true;
		}
	})
}

function writeTodo(todoBox){
	var outTodo = document.createElement('p');
	outTodo.className = 'txt';
	outTodo.innerHTML += fild.value;
	todoBox.appendChild(outTodo);
}

function createRadio(){
	
}



















































// function writeVal(){
// 	var newLi = document.createElement('li')
// 	var newCheck = document.createElement('input')
// 	newCheck.setAttribute('type' , 'checkbox')
// 	newLi.innerHTML += fild.value;
// 	newLi.appendChild(newCheck);
// 	out.appendChild(newLi);
// 	getCheck(newCheck , newLi)
// }

// function getCheck(elemCheck , elemLi){
// 	elemCheck.addEventListener('input' , function(){
// 		if(elemCheck.checked){
// 			elemLi.hidden = true;
// 		}
// 	})
// }





















// var todoArr = []
// var todoObj = {}




// function writeVal(){
// 	var newCheck = document.createElement('input');
// 	var newLi = document.createElement('li');
// 	todoObj.fild = fild.value;
// 	todoArr.push(todoObj.fild);
// 	newCheck.setAttribute('type' , 'checkbox');
// 	newLi.innerHTML += todoObj.fild;
// 	newLi.className = 'list'
// 	newLi.appendChild(newCheck);
// 	out.appendChild(newLi);

// }
