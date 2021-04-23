
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
			windows: false,
			class: null,
			inputForm: null,
			button: null
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
		showWind(){
		this.windows = true;
		},
		removeClass(){
			this.windows = false;
			this.inputForm= '';
		},
		proverk(){
			if(this.inputForm.length<=0){
				this.button= false;
			}else{
				this.button= true;
			}
		}
	}
	
})

const show = document.querySelector('.ul');
const button = document.querySelector('.wind')
const body = document.body;
const form= document.querySelector('.aform')
const exit = document.querySelector('.block_exit')

button.onclick = function(){
	show.classList.toggle('list')	
	show.classList.toggle('move')	
}

// form.onclick = function(){
// 	body.classList.add('body')
// }

// exit.onclick = function(){
// 	body.classList.removeClass('body')
// }







