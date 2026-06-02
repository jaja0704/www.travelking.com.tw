function chk_KwSrh_zhtw(){
	var theForm = document.fkw;
	if (theForm.SrhKeyWord.value == "") {
		alert("請填寫關鍵字!!"); 
		return false;  
	}
	showBlockUI();
	theForm.submit();
}
function chk_KwSrh_zhcn(){
	var theForm = document.fkw;
	if (theForm.SrhKeyWord.value == "") {
		alert("请填写关键词!!"); 
		return false;  
	}
	showBlockUI();
	theForm.submit();
}
function chk_KwSrh_en(){
	var theForm = document.fkw;
	if (theForm.SrhKeyWord.value == "") {
		alert("Keyword Required field."); 
		return false;  
	}else{
		if(theForm.SrhKeyWord.value.length < 3 ){
			alert("Keyword should be more than 2 letters."); 
			return false;
		}
	}
	showBlockUI();
	theForm.submit();
}
function showBlockUI(){
	$.blockUI({ 
		message:$('<div class="loading"><img src="/_inc/images/loading/loading2.png" alt="loading" style="width:100px;animation: loading 2s infinite linear;"><br />Loading</div><style>@keyframes loading{from{-webkit-transform: rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}</style>'), 
		css:{ 
			border: 'none', 
			padding: '15px', 
			width: '140px', 
			textAlign: 'center', 
			font: "13px/1.5 'Segoe UI'", 
			backgroundColor: '#000', 
			'-webkit-border-radius': '10px', 
			'-moz-border-radius': '10px', 
			opacity: .5, 
			margin: 'auto', 
			color: '#fff' 
		} 
	}); 
}