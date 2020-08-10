var cardColorMap = [
		{id:"card1", color:'#6F98A8'},
		{id:"card2", color:'#2B8EAD'},
		{id:"card3", color:'#2F454E'},
		{id:"card4", color:'#2B8EAD'},
		{id:"card5", color:'#2F454E'},
		{id:"card6", color:'#BFBFBF'},
		{id:"card7", color:'#BFBFBF'},
		{id:"card8", color:'#6F98A8'},
		{id:"card9", color:'#2F454E'}
	];

var length = cardColorMap.length;

function suffleOrSort(value){
	if(value=='suffle'){
		var newArr = [],
			randomNumber = '',
			element = '';

		for(var i=0; i<length;){
			randomNumber = Math.ceil(Math.random() * 9);
			element = document.getElementById(cardColorMap[i].id);

			if(newArr.indexOf(randomNumber) === -1 ){
				newArr.push(randomNumber);
				element.innerHTML = cardColorMap[newArr[i]-1].id.split('card')[1];
				if(screen.width >= 960){
					element.style.background = cardColorMap[newArr[i]-1].color;
				}else{
					element.style.borderLeft = "10px solid " + cardColorMap[newArr[i]-1].color;
					element.style.background = "#EFEFEF";
				}
				i++;
			}else{
				continue;
			}
			
		}
	}else if(value='sort'){
		for(var i=0; i<length; i++){
			element = document.getElementById(cardColorMap[i].id);
			element.innerHTML = cardColorMap[i].id.split('card')[1];
			if(screen.width >= 960){
				element.style.background = cardColorMap[i].color;
			}else{
				element.style.borderLeft = "10px solid " + cardColorMap[i].color;
				element.style.background = "#EFEFEF";
			}
		}
	}
	
}