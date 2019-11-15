function show(){
var knopka = document.getElementById('button1');
	var obx = document.getElementById('outbox');
	var tri = document.getElementById('triangle');
	if (obx.style.display=="none"){
		obx.style.display = 'block';
		tri.style.display = 'block';
	}
	else{
		obx.style.display = 'none';
		tri.style.display = 'none';
	}
}