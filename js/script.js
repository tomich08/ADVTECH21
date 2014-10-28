// JavaScript Document

/**
* The Coin class is a blueprint for a typical coin
* @author 	Matt Tomich
* @version	1.0 Oct 28, 2014
*/


function Coin(){
	this.item_on_page//represent coins visual presence on the page
	
	this.x;//keep track of each individual coin's left and right position.
	this.y;//keep track of each individual coin's top and bottom position.
	/**
	* The create method puts the graphic on page and formats it
	*/
	this.create=function(){
		//make an <img> tag, set its src to the image in the img folder
		this.item_on_page = document.createElement("img");
		this.item_on_page.src = "img/coin.png";
		this.item_on_page.style.position = "absolute";
		//store a randon X and Y value that is between 0 and the edge of the playing area.(500X300)  This will result in a different number for each coin.
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*300);
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		//actually put the img tag onto the page:
		document.body.appendChild(this.item_on_page);
	}
	
	/**
	* The destroy method puts the graphic on the page and formats it.
	*/
	this.destroy=function(){
		
	}
}

onload = init;

function init(){
var coin1=new Coin();
coin1.create();
var coin2=new Coin();
coin2.create();
var coin3=new Coin();
coin1.create();
var coin4=new Coin();
coin2.create();
}