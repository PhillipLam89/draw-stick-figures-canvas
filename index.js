const canvas = document.getElementById('game')
canvas.style.border = '12px inset royalblue'
canvas.height = innerHeight * .95
canvas.width = innerWidth * .9
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'aqua'
ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.lineWidth = 3

//people

const gap = 10
const personWidth = 50
const bodyY = (5 / 6) * personWidth
const armLength = personWidth * .3
const legLength = personWidth * .5
const torsoHeight = personWidth * 2
const faceRadius = personWidth / 3
ctx.translate(0,canvas.height)
ctx.scale(1,-1)


const maxPeople = ~~(canvas.width / (personWidth + gap)) 
for (let i = 0; i < maxPeople; i++) {
  ctx.strokeStyle = 'black'
ctx.translate(gap + personWidth, 0)

//torso + 2 arms
ctx.beginPath()
ctx.moveTo(0,bodyY)
ctx.lineTo(0,torsoHeight)
ctx.lineTo(-armLength,torsoHeight * .75)
ctx.moveTo(0,torsoHeight)
ctx.lineTo(armLength,torsoHeight * .75)
ctx.stroke()

//face 
ctx.beginPath()
ctx.arc(0,torsoHeight + faceRadius + 2, faceRadius, 0, Math.PI*2)
ctx.stroke()

//eyes 
ctx.beginPath()
ctx.arc(-armLength / 2,torsoHeight + faceRadius , faceRadius * .12, 0, Math.PI*2)
ctx.strokeStyle = 'orange'
ctx.stroke()

ctx.beginPath()
ctx.arc(armLength / 2,torsoHeight + faceRadius , faceRadius * .12, 0, Math.PI*2)
ctx.strokeStyle = 'orange'
ctx.stroke()

//mouth smiling
ctx.beginPath()
ctx.arc(0,torsoHeight + faceRadius * .6 , faceRadius * .25, 0, Math.PI,true)
ctx.strokeStyle = 'red'
ctx.stroke()

//legs
ctx.strokeStyle = 'brown'
ctx.beginPath()
ctx.moveTo(0,bodyY)
ctx.lineTo(-legLength, 0 )
ctx.moveTo(0,bodyY)
ctx.lineTo(legLength,0 )
ctx.stroke()
ctx.translate(0, 0)
}
