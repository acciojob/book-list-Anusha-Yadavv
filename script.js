//your JS code here. If required.
let subimtElement=document.getElementById("submit");
subimtElement.addEventListener("click",(event)=>{
	event.preventDefault();
	let titleValue=document.getElementById("title").value;
		let authorValue=document.getElementById("author").value;
	let isbnValue=document.getElementById("isbn").value;

	let tbodyElement=document.getElementById("book-list");
	let newRow=tbodyElement.insertRow();
	newRow.innerHTML=`<td>${titleValue}</td><td>${authorValue}</td><td>${isbnValue}</td><td><button class="delete">clear</button></td>`
document.getElementById("title").value="";
document.getElementById("author").value="";
document.getElementById("isbn").value="";

	let deleteButton=newRow.querySelector('.delete');
	deleteButton.addEventListener("click",function(){
		tbodyElement.deleteRow(newRow.rowIndex);
	})

	
})