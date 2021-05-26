import './style'
import { useState, useEffect } from 'preact/hooks'
import data from './datatrimmed.js'

// notes:
// - after building, go to index.html, change all "/ to "
// - the data, for now, is part of the final bundle. we'll later disintegrate into /data folder


// let data = dataStr.trim().split(/(?:\n\r?)+/m).map(l => l.split(/\t+/).map(w => w.replace('\\n','\n')))

if(typeof window !== 'undefined')
window._d = data

Array.prototype.pickOne = function pickOne() {
	return this[Math.floor(Math.random()*this.length)]
}

let l = console.log

let categories = { // updated
	"All": "ALL",
	"Verb": "V",
	"Noun/Verb": "NV",
	"Noun": "N",
	"Phrase": "PHR",
	"Pronoun": "PRO",
	"Adj": "ADJ",
	"Measure word": "MW",
	"Conj": "CNJ",
	"Numeral": "NUM",
	"Adv": "ADV",
	"Verb Object": "VO",
	"Prep": "PRE",
	"Adj/Adv": "AJV",
	"Question Particle": "Q",
	"Question pronoun": "QP",
	"Noun/Adj": "NAJ",
	"Grammar": "GRA",
	"Time Word": "TIM",
	"Verb/Adj": "VAJ"
}

export default function App() {

	let [y,yy] = useState( data.pickOne() )
	let [c1,sc1] = useState(false)
	let [c2,sc2] = useState(false)
	let [c3,sc3] = useState(false)
	let [cat,scat] = useState('All')

	function handleSwitch(ev) {
		console.log(ev.target.value)
		ev.target.blur()
		// let newF = { ...f }
		// newF[n] = !newF[n]
		// ff(newF)
		for (let i in categories) {
			if (categories[i] == ev.target.value) {
				// console.log('chosen:')
				scat(i)
				return
			}
		}
		scat('All')
	}

	useEffect(() => {
		document.onkeypress = e => {
			if (e.key=='a'||e.key=='A') sc1(!c1)
			else if (e.key=='s'||e.key=='S') sc2(!c2)
			else if (e.key=='d'||e.key=='D') sc3(!c3)
			else if (e.key=='f'||e.key=='F') newCard()
		}
	})

	// gesture stuff
	useEffect(()=>{

		// https://github.com/patrickhlauke/touch/blob/gh-pages/swipe/pointerevents.html
		let start = {};
		let end = {};
		let tracking = false;
		let thresholdTime = 500;
		let thresholdDistance = 30;
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
				let now = new Date().getTime();
				let deltaTime = now - start.t;
				let deltaX = end.x - start.x;
				let deltaY = end.y - start.y;
				/* work out what the movement was */
				if (deltaTime > thresholdTime) {
					/* gesture too slow */
					return;
				}
				else if (start.y > document.body.clientHeight/3 ) {
					// don't track at the scrolling zone
					return
				}
				
				else {
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
			// window.addEventListener('pointerdown', gestureStart, false);
			// window.addEventListener('pointermove', gestureMove, false);
			// window.addEventListener('pointerup', gestureEnd, false);
			// window.addEventListener('pointerleave', gestureEnd, false);
			// window.addEventListener('pointercancel', gestureEnd, false)
			window.onpointerdown = gestureStart
			window.onpointermove = gestureMove
			window.onpointerup = gestureEnd
			window.onpointerleave = gestureEnd
			window.onpointercancel = gestureEnd
		}

	})

	function newCard() {
		// let picked = ['','','','']
		// for (let i = 0; i<100; i++) {
		// 	picked = data.pickOne()
		// 	if ( f[ picked[2] ] ) {
		// 		break
		// 	}
		// }
		if (cat == 'All') {
			yy( data.pickOne() )
		}
		else {
			yy( data.filter(a => a[2]===cat).pickOne() )
		}
		// yy(picked)
		sc1(false)
		sc2(false)
		sc3(false)
	}

	useEffect(() => {
		newCard()
	}, [cat] )

	return (
		<div class='App'>
			<div class='Hanzi'>{y[0]}</div>
			<div class='Cards'>
				<div class='left1rightX'>
					<pre class='Card' onClick={()=>sc1(!c1)}>
						{c1?categories[y[2]]:''}
					</pre>
					<pre class='Card' onClick={()=>sc2(!c2)}>
						{c2?y[1]:''}
					</pre>
				</div>
				<pre class='Card' onClick={()=>sc3(!c3)}>
					{c3 ? (y[3]+'\n\n'+y[4]+'\n'+y[5]+'\n'+y[6]+'\n\n'+y[7]+'\n'+y[8]+'\n'+y[9]) :''}
				</pre>
				<div class='left1rightX'>
					<div>
						<a href={`https://en.wiktionary.org/wiki/${y[0]}`} target='_blank'>Wiki </a>
						{/* <span onClick={()=>{newCard()}}>{cat} </span> */}
					</div>
					<div class='Filters'>
						{/* {
							'VNAMP'.split('').map(l => <div class={f[l]?'swTrue':null} onClick={() => handleSwitch(l)}>
								{l}
							</div> )
						} */}
						<select onInput={handleSwitch}>
							{
								Object.entries(categories).map(e => <option value={e[1]}>
									{e[0]}
								</option>)
							}
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}
