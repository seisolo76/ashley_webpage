https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js
https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/GSDevTools3.min.js
https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText3.min.js

gsap.registerPlugin(GSDevTools, SplitText)
let split
let animation = gsap.timeline({})

function init() {
	gsap.set(".wrapper", {autoAlpha:1})
	split = new SplitText("h1", {type:"chars"})
	animation.from(split.chars, {opacity:0, y:50, ease:"back(8)", stagger:{
		from:"front",
		each:0.2
	}})
	GSDevTools.create({animation:animation})
}

window.addEventListener("load", init)
