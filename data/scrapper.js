





let a, d, d2, d3

a = temp0

d = []

for (let i = 2; i<a.childElementCount; i++) {
	d.push( a.children[i] )
}

d2 = d.map(r => {
  let ar = []

	for (let i = 0; i<12; i++) {
		ar.push( r.children[i] )
}
return ar
})


d3 = []
for (let i = 0; i<d2.length; i++) {
	let newar = []
	for (let j = 1; j<11; j++) {
try {
if (d2[i][j].childElementCount) { // has div
		newar.push( d2[i][j].children[0].childNodes[0].data )
}
else {
		newar.push( d2[i][j].childNodes[0].data )
}
}
catch(er) {
newar.push( d2[i][j].innerText || '-' )
}
	
}
d3.push(newar)
}


// https://docs.google.com/spreadsheets/d/e/2PACX-1vSmm2ppKvVo93mPs2gkKJGgz88zYjCeQHxjLrrupKI0B2Kr2giuXXq6D6o6VtG7oWLE-nlVUEXmK4CJ/pubhtml?gid=2015324540&single=true&widget=true&headers=false

{
  "Verb": 179,
  "Noun/Verb": 28,
  "Noun": 325,
  "Phrase": 41,
  "Pronoun": 12,
  "Adj": 106,
  "Measure word": 27,
  "Conj": 11,
  "Numeral": 13,
  "Adv": 38,
  "Verb Object": 62,
  "Verb Object ": 5,
  "Measure word ": 3,
  "Prep": 7,
  "Adv ": 4,
  "Noun ": 49,
  "Adj/Adv": 14,
  "Question Particle": 2,
  "Question pronoun": 1,
  "Noun/Adj": 12,
  "Adj\n": 1,
  " Pronoun": 2,
  "Grammar": 2,
  "Time Word": 4,
  "Verb/Adj": 2,
  "Verb ": 31,
  "Adj ": 15,
  "Phrase ": 1,
  "Noun/Verb ": 1,
  "Prep ": 1,
  "Noun/Adj ": 1
}

{
  "1": 554,
  "2": 1246,
  "3": 166,
  "4": 24,
  "6": 6,
  "8": 2,
  "10": 2
}

{ // updated
  "Verb": 210,
  "Noun/Verb": 29,
  "Noun": 374,
  "Phrase": 42,
  "Pronoun": 14,
  "Adj": 122,
  "Measure word": 30,
  "Conj": 11,
  "Numeral": 13,
  "Adv": 42,
  "Verb Object": 67,
  "Prep": 8,
  "Adj/Adv": 14,
  "Question Particle": 2,
  "Question pronoun": 1,
  "Noun/Adj": 13,
  "Grammar": 2,
  "Time Word": 4,
  "Verb/Adj": 2
}


/*
59 8 
59 9 
59 10 
197 4 
278 2 
341 4 
342 8 
342 9 
342 10 
365 8 
365 9 
365 10 
671 8 
671 9 
671 10 
706 8 
706 9 
706 10 
708 8 
708 9 
708 10 
731 8 
731 9 
731 10 
738 8 
738 9 
738 10 
828 8 
828 9 
828 10 
829 8 
829 9 
829 10 
830 8 
830 9 
830 10 
831 8 
831 9 
831 10 
832 8 
832 9 
832 10 
833 8 
833 9 
833 10
*/