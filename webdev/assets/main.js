

const show = document.querySelector('.ul');
const body = document.body;
const form= document.querySelector('.aform')
const exit = document.querySelector('.block_exit')

function showDesctipion(){
	show.classList.toggle('list')	
	show.classList.toggle('move')	
}

function formadd(){
	body.classList.add('body')
}

function remove(){
	body.classList.remove('body')
}

const app = new Vue({
	el: '#app',
	data: {
		range: null,
		numberCheckbox: null,
		checkboxMass: [{
			number: 0,
			check:false},
			{
			number: 1,
			check:false},
			{
			number: 2,
			check:false},
			{
			number: 3,
			check:false},
			{
			number: 4,
			check:false}
			],
			see: null,
			windows: null,
			class: 'bak',
			inputForm: null,
			button: null,
	},
	methods: {
		checkbox(number){
			this.numberCheckbox = number;
			for( element of this.checkboxMass){
				if(element.number != this.numberCheckbox){
					element.check = false;
				}
			}
		},
		show(){
			this.toggle('list')
		},
		showWind(name){
		this.windows = name;
		this.class = true;
		formadd();
		},
		removeClass(name){
			this.windows = name;
			this.class = false;
			remove();
			this.inputForm= '';
		},
		proverk(){
			if(this.inputForm.length<=0){
				this.button= false;
			}else{
				this.button= true;
			}
		},
		description(){ // Метод который вызывает функцию для показа спектра улуг
			showDesctipion();
		}
	}
	
})








