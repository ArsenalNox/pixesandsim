//Канвас
var canvas = document.getElementById('canvas');
canvas.width = document.getElementById('body1').clientWidth -50;
canvas.height = document.getElementById('body1').clientHeight -50;

//x
var width = 100 
//canvas.width

//y
var height = 100 
//canvas.height

ctx = canvas.getContext('2d')

var isDrawing = false

var world = createMatrix(20,20)
var types = [
	{
		type: 'earth',
		color: 'brown',
		isMovable: true
	},
	{
		type: 'air',
		color: 'white',
		isMovable: false
	}
]


var pixels = []

for(let i=0; i<10; i++){
	pixelHolder = new Pixel(i, 600, 'air')
	pixels.push(pixelHolder)
}



canvas.addEventListener('mousemove', function(evt) {
	if(isDrawing){
		let mouseCoordinates = getMousePos(canvas, evt)
		console.log('Drawing on x:'+mouseCoordinates.x+' y:'+mouseCoordinates.y)		
		let mousePixel = new Pixel(mouseCoordinates.x, width-mouseCoordinates.y, 'air')
		pixels.push(mousePixel)
	}

})

canvas.addEventListener('mousedown', function() {
	isDrawing = true
})

canvas.addEventListener('mouseup', function(){
	isDrawing = false
})

var updateInterval = setInterval(update, 10)
