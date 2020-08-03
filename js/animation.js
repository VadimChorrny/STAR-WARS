((c)=>{
	let $ = c.getContext('2d'),
			w = c.width = window.innerWidth,
			h = c.height = window.innerHeight,
			pi2 = Math.PI*2,
			random = t=>Math.random()*t,
			binRandom = (f)=>Math.random()<f,
			arr = new Array(500).fill().map((p)=>{
				return {
					p: {x: random(w), y: random(h)},
					v: {x: random(.5) * (binRandom(.5)?1:-1), y: random(.5) * (binRandom(.5)?1:-1)},
					s: random(1)+2, 
					o: random(1)+.3
				}
			});
	function draw(){
		(h !== innerHeight || w!==innerWidth) && (w=c.width=innerWidth,h=c.height=innerHeight);
		$.fillStyle="#222";
		$.fillRect(0,0,w,h);
		arr.forEach(p=>{
			p.p.x+=p.v.x;
			p.p.y+=p.v.y;
			if(p.p.x > w || p.p.x < 0) p.v.x *=-1;
			if(p.p.y > h || p.p.y < 0) p.v.y *=-1;
			$.beginPath();
			$.arc(p.p.x,p.p.y,p.s,0,pi2);
			$.closePath();
			$.fillStyle = "rgba(255,255,255,"+p.o+")";
			$.fill();
		})
		requestAnimationFrame(draw)
	}
	draw();
})(c)