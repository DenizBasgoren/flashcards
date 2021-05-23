import './style'
import { useState, useEffect } from 'preact/hooks'
import dataStr from './data.js'

// notes:
// - after building, go to index.html, change all "/ to "
// - the data, for now, is part of the final bundle. we'll later disintegrate into /data folder


let data = dataStr.trim().split(/(?:\n\r?)+/m).map(l => l.split(/\t+/).map(w => w.replace('\\n','\n')))

if(typeof window !== 'undefined')
window._d = data

Array.prototype.pickOne = function pickOne() {
	return this[Math.floor(Math.random()*this.length)]
}

let l = console.log


export default function App() {

	let [y,yy] = useState( data.pickOne() )
	let [f,ff] = useState( {V:true,N:true,A:true,M:true,P:true} ) // V, N, A, M, P
	let [c1,sc1] = useState(false)
	let [c2,sc2] = useState(false)
	let [c3,sc3] = useState(false)

	function handleSwitch(n) {
		let newF = { ...f }
		newF[n] = !newF[n]
		ff(newF)
	}

	useEffect(() => {
		document.onkeypress = e => {
			if (e.key=='a'||e.key=='A') sc1(!c1)
			else if (e.key=='s'||e.key=='S') sc2(!c2)
			else if (e.key=='d'||e.key=='D') sc3(!c3)
			else if (e.key=='f'||e.key=='F') newCard()
		}
	})

	useEffect(()=>{

		// https://github.com/patrickhlauke/touch/blob/gh-pages/swipe/pointerevents.html
		var start = {};
		var end = {};
		var tracking = false;
		var thresholdTime = 500;
		var thresholdDistance = 10;
		var o = document.body
		let gestureStart = function(e) {
			tracking = true;
			/* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
			start.t = new Date().getTime();
			start.x = e.clientX;
			start.y = e.clientY;
		};
		let gestureMove = function(e) {
			if (tracking) {
				e.preventDefault();
				end.x = e.clientX;
				end.y = e.clientY;
			}
		}
		let gestureEnd = function(e) {
			if (tracking) {
				tracking = false;
				var now = new Date().getTime();
				var deltaTime = now - start.t;
				var deltaX = end.x - start.x;
				var deltaY = end.y - start.y;
				/* work out what the movement was */
				if (deltaTime > thresholdTime) {
					/* gesture too slow */
					return;
				} else {
					if ((deltaX > thresholdDistance)&&(Math.abs(deltaY) < thresholdDistance)) {
						// o.innerHTML = 'swipe right';
						newCard()
					}
					else if ((-deltaX > thresholdDistance)&&(Math.abs(deltaY) < thresholdDistance)) {
					// 	o.innerHTML = 'swipe left';
						newCard()
					}
					//else if ((deltaY > thresholdDistance)&&(Math.abs(deltaX) < thresholdDistance)) {
					// 	o.innerHTML = 'swipe down';
					// } else if ((-deltaY > thresholdDistance)&&(Math.abs(deltaX) < thresholdDistance)) {
					// 	o.innerHTML = 'swipe up';
					// } else {
					// 	o.innerHTML = '';
					// }
				}
			}
		}

		if (typeof window !== "undefined") {
			window.addEventListener('pointerdown', gestureStart, false);
			window.addEventListener('pointermove', gestureMove, false);
			window.addEventListener('pointerup', gestureEnd, false);
			window.addEventListener('pointerleave', gestureEnd, false);
			window.addEventListener('pointercancel', gestureEnd, false)
		}

	},[])

	function newCard() {
		let picked = ['','','','']
		for (let i = 0; i<100; i++) {
			picked = data.pickOne()
			if ( f[ picked[2] ] ) {
				break
			}
		}
		yy(picked)
		sc1(false)
		sc2(false)
		sc3(false)
	}

	useEffect(() => {
		newCard()
	}, [f] )

	return (
		<div class='App'>
			<div class='Hanzi'>{y[0]}</div>
			<div class='Cards'>
				<div class='left1rightX'>
					<pre class='Card' onClick={()=>sc1(!c1)}>
						{c1?y[2]:''}
					</pre>
					<pre class='Card' onClick={()=>sc2(!c2)}>
						{c2?y[1]:''}
					</pre>
				</div>
				<pre class='Card' onClick={()=>sc3(!c3)}>
					{c3?y[3]:''}
				</pre>
				<div class='left1rightX'>
					<div>
						<a href={`https://en.wiktionary.org/wiki/${y[0]}`} target='_blank'>Wiki</a>
					</div>
					<div class='Filters'>
						{
							'VNAMP'.split('').map(l => <div class={f[l]?'swTrue':null} onClick={() => handleSwitch(l)}>
								{l}
							</div> )
						}
					</div>
				</div>
			</div>
		</div>
	)
}
