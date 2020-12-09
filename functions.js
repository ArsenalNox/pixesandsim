function createMatrix(width, height){
	//Создаёт матрицу с размерами x:width / y:height, заполнунную нулями
	let matrix = []
	for(let x=0; x<width; x++){
		matrix[x] = new Array(height)
	 	matrix[x].fill(0)
	}
	return matrix
}

function update(){
	//Обновление
	calculatePixels()
	drawWorld()
}

function calculatePixels(){
	//Расчитывает взаимодейсвтия пикселей
	for(let i=0; i<pixels.length; i++){
		if( !(pixels[i].y == 1) ){
			if(!checkForCollision(pixels[i].x, pixels[i].y-1)){
				pixels[i].y = pixels[i].y-1
			} else {
			if(Math.round(Math.random())){
				if(!checkForCollision(pixels[i].x-1, pixels[i].y-1)){
					pixels[i].x = pixels[i].x-1
					pixels[i].y = pixels[i].y-1
				}
			} else {
				if(!checkForCollision(pixels[i].x+1, pixels[i].y-1)){
					pixels[i].x = pixels[i].x+1 
					pixels[i].y = pixels[i].y+1 
				}	
			}
			} 
		}

	}
}

function drawWorld(){
	ctx.clearRect(0,0,width,height)
	for(let i=0; i<pixels.length; i++){
		ctx.fillStyle = pixels[i].color 
		ctx.fillRect(pixels[i].x, (pixels[i].y), 3, 3)	
	}
}

function checkForCollision(cx,cy){
	for(let q=0; q<pixels.length; q++){
		if( (pixels[q].x == cx) && (pixels[q].y == cy) ){
			return true
		}
	}
	return false
}

function getMousePos(canvas, evt) {
  //Получает позицию мыши
  var rect = canvas.getBoundingClientRect();
  return {
    x: Math.round(evt.clientX - rect.left),
    y: Math.round(evt.clientY - rect.top)
  };
}

//Классы 

class Pixel {
	constructor (x,y,type){
	this.x = x;
	this.y = y;
	this.type = type;
	this.color = 'black'
	}
}

