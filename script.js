const net = new brain.NeuralNetwork()

const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":0.618075910936678,"g":0.6175861048032945,"b":0.18900611263701794},"output":[0]},{"input":{"r":0.6439168502970476,"g":0.5685638213620055,"b":0.7611912449495823},"output":[1]},{"input":{"r":0.698918924544129,"g":0.5418181393863215,"b":0.39203922265093993},"output":[1]},{"input":{"r":0.648207937877904,"g":0.8130887828495825,"b":0.25378074735930056},"output":[0]},{"input":{"r":0.669690994374422,"g":0.3475734831263151,"b":0.6138867655201501},"output":[1]},{"input":{"r":0.6223727886364099,"g":0.7898186185738103,"b":0.04024605415160276},"output":[0]},{"input":{"r":0.9499758720883409,"g":0.2594500459220168,"b":0.9390386646814559},"output":[1]},{"input":{"r":0.2848371243540784,"g":0.2041282117390908,"b":0.836187680591947},"output":[1]},{"input":{"r":0.7716618961895356,"g":0.9510037754356881,"b":0.32187764560842425},"output":[0]},{"input":{"r":0.4843470877605265,"g":0.6248436823615062,"b":0.5945683104186514},"output":[0]},{"input":{"r":0.07318247365120434,"g":0.27568206754752134,"b":0.6951783773694193},"output":[1]},{"input":{"r":0.8031497276377857,"g":0.6372912969849693,"b":0.1633460854346125},"output":[1]},{"input":{"r":0.4461716379964975,"g":0.8807644520723832,"b":0.7623495237941549},"output":[0]},{"input":{"r":0.6833137929154973,"g":0.619008893008147,"b":0.6060000265573802},"output":[1]},{"input":{"r":0.15422739190214307,"g":0.1221247478868892,"b":0.6105897000368565},"output":[1]},{"input":{"r":0.052617735440553925,"g":0.6413882025618465,"b":0.21707359508978508},"output":[0]},{"input":{"r":0.16105193050275401,"g":0.38722711686897204,"b":0.09544936681885674},"output":[0]},{"input":{"r":0.5520583345160195,"g":0.8931229643623131,"b":0.5172142896773697},"output":[0]},{"input":{"r":0.7279510323739713,"g":0.2307550931000386,"b":0.2087627296441672},"output":[1]},{"input":{"r":0.9646646941982457,"g":0.4341002314548221,"b":0.3070963431544267},"output":[1]},{"input":{"r":0.2579460608326156,"g":0.3857203042926749,"b":0.6184570486174374},"output":[1]},{"input":{"r":0.29235454938750105,"g":0.9417543586209123,"b":0.9701921062654753},"output":[1]},{"input":{"r":0.9597066626429556,"g":0.032053354089780495,"b":0.7403546870272046},"output":[1]},{"input":{"r":0.05529245528438076,"g":0.2483286318354858,"b":0.31192356275268374},"output":[1]},{"input":{"r":0.7725314747311296,"g":0.43741618371202673,"b":0.03509481380333224},"output":[1]},{"input":{"r":0.1871513467784609,"g":0.014940398166672919,"b":0.11924388387131035},"output":[1]},{"input":{"r":0.44500975903383977,"g":0.7183159406001112,"b":0.05113897244285548},"output":[0]},{"input":{"r":0.16559075418247526,"g":0.5858882483664163,"b":0.020194498217811496},"output":[0]},{"input":{"r":0.05108149245705507,"g":0.48119562263216187,"b":0.035802661947685444},"output":[0]},{"input":{"r":0.4318293465941645,"g":0.44547701891310343,"b":0.04213632192098071},"output":[0]},{"input":{"r":0.3607770374954111,"g":0.7078022824721086,"b":0.5030191436759264},"output":[0]},{"input":{"r":0.44598725804002903,"g":0.21658155582644212,"b":0.645437941141739},"output":[1]},{"input":{"r":0.10795695051240495,"g":0.27519440321161714,"b":0.01542143436873733},"output":[0]},{"input":{"r":0.8438900250630801,"g":0.6988286269434425,"b":0.5619176501470766},"output":[1]},{"input":{"r":0.8069431724369895,"g":0.8087334103238506,"b":0.1723998997923839},"output":[1]},{"input":{"r":0.22797165506819828,"g":0.4756995959783552,"b":0.28990769836751906},"output":[0]},{"input":{"r":0.3779107720161896,"g":0.26805799365457395,"b":0.023660556499153662},"output":[1]},{"input":{"r":0.9122747979619881,"g":0.9423861646865164,"b":0.4764245009211545},"output":[0]},{"input":{"r":0.3259378502955388,"g":0.6235868582246786,"b":0.9300869865283148},"output":[0]},{"input":{"r":0.6333567889430356,"g":0.6176719452016388,"b":0.5423918622077175},"output":[0]},{"input":{"r":0.9167714111754566,"g":0.5351358543069813,"b":0.46909595762863243},"output":[0]},{"input":{"r":0.16370914550619076,"g":0.4986617780925766,"b":0.3186144865176803},"output":[0]},{"input":{"r":0.5957482712002942,"g":0.692640002938697,"b":0.5921480258332612},"output":[0]},{"input":{"r":0.9676992233293962,"g":0.1305053538032801,"b":0.5502622546891422},"output":[1]},{"input":{"r":0.7140358814475076,"g":0.16781557392659963,"b":0.10486179911560378},"output":[1]},{"input":{"r":0.943184465798131,"g":0.6947534505590753,"b":0.1272513122466956},"output":[1]},{"input":{"r":0.37784575761703265,"g":0.600674611480106,"b":0.5001142590639363},"output":[0]},{"input":{"r":0.29617468363839183,"g":0.929386037505977,"b":0.2726304400519839},"output":[0]},{"input":{"r":0.0554753123229883,"g":0.009739552404126606,"b":0.8800716311701686},"output":[1]},{"input":{"r":0.5212699651084884,"g":0.9896440028184095,"b":0.8328530402456702},"output":[1]},{"input":{"r":0.6157939088446582,"g":0.8580040425139506,"b":0.9897488036122157},"output":[0]}]

net.train(data)

const colorEl = document.getElementById('color')
const guessEl = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')
let color
setRandomColor()

whiteButton.addEventListener('click', () => {
  chooseColor(1)
})

blackButton.addEventListener('click', () => {
  chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value) {
  data.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

function print() {
  console.log(JSON.stringify(data))
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const guess = net.run(color)[0]
  guessEl.style.color = guess > .5 ? '#FFF' : '#000'
  colorEl.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}