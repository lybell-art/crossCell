var max_X, max_Y;
var onoff_Arr=new Array(100);
function setup()
{
	createCanvas(windowWidth, windowHeight);
	max_X=10;
	max_Y=ceil(max_X*1.0/width*height);
	for(var i=0;i<100;i++) onoff_Arr[i]=new Array(100);
	noFill();
	cellReset();
}
function draw()
{
	background(255);
	max_X=int(map(mouseX,0,width,1,50));
	max_Y=ceil(max_X*1.0/width*height);
	cellDraw();
}
function mousePressed()
{
	cellReset();
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function cellDraw()
{
	stroke(0);
	strokeWeight(1);
	var len=width/(max_X*1.0);
	var i,j;
	for(i=0;i<max_X;i++)
	{
		for(j=0;j<max_Y;j++)
		{
			if((onoff_Arr[i][j]&1)==1)
			{
				line(len*(i+1),len*j,len*i,len*(j+1));
			}
		}
	}
	stroke(221,66,255);
	strokeWeight(map(mouseY,0,height,0,20));
	for(i=0;i<max_X;i++)
	{
		for(j=0;j<max_Y;j++)
		{
			if((onoff_Arr[i][j]&2)==2)
			{
				line(len*i,len*j,len*(i+1),len*(j+1));
			}
		}
	}
}
function cellReset()
{
	for(var i=0;i<100;i++)
	{
		for(var j=0;j<100;j++)
		{
			onoff_Arr[i][j]=int(random(4));
		}
	}
}
