function getStyle(obj,attr){ 
	if(obj.currentStyle){ 
		return obj.currentStyle[attr];
	}
	else { 
		return getComputedStyle(obj,false)[attr];
	}
}  //任意样式

function startMove(obj,jason,fn){ 
	var flag = '';
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){ 
	for(var attr in jason){

	var icur = 0;
	if(attr == 'opacity'){ 
		icur = Math.round(parseFloat(getStyle(obj,attr))*100);
	}
	else{ 
		icur = parseInt(getStyle(obj,attr));
	}
	var speed = (jason[attr] - icur)/8;
	speed = speed>0?Math.ceil(speed):Math.floor(speed);
	//计时停止
	if(icur!=jason[attr]){ 
		flag = false;
	}
	
	if(attr == 'opacity') { 
		obj.style.filter = 'alpha:(opacity'+icur+speed+')';
		obj.style.opacity = (icur+speed)/100;
	} 
	else{
		obj.style[attr] =icur+speed+'px';
	}
      }//jason遍历
       if(flag){ 
       	clearInterval(obj.timer);
       	if(fn){ 
       		fu();
       	}
       }
    
    },30)

}

	




		
	