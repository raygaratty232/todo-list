//класс : create создает образец div с тегом p для вывода записа инпута и радио бтн для подсвечивания важности дела 
// или альтернатива


var fild = document.querySelector("#fild");
var write = document.querySelector("#write");
var out = document.querySelector(".out");

write.addEventListener('click' , createElement);


function createElement(){
	var box = document.createElement('div');
	box.className = 'box';
	out.appendChild(box);
	boxItem(box)
	checkDelete(box)
}

function boxItem(parentElement){
	var txt = document.createElement('p');
	txt.className = 'txt';
	txt.innerHTML = fild.value;
	parentElement.appendChild(txt)
}

function checkDelete(parentElement){
	var check = document.createElement('input');
	check.setAttribute('type' , 'checkbox');
	parentElement.appendChild(check);
	clearBox(check , parentElement)
}

function clearBox(checkBox , parentElement){
	checkBox.addEventListener('input' , function(){
		if(checkBox.check !== false){
			parentElement.hidden = true
		}
	})
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
