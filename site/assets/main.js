const port = 'https://limitless-citadel-34413.herokuapp.com';
// const port = 'http://localhost:1000';

const show = document.querySelector('.ul');
const body = document.body;
const form= document.querySelector('.aform')
const exit = document.querySelector('.block_exit')


function changeStatusBody(value){
	let bodyClass = document.body;
	bodyClass.style.overflow = value;
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
			inputForm: '',
			button: false,
			signup: {
				name: "",
				second_name: "",
				email: "",
				password: ""
			},
			signin: {
				password: "",
				email: ""
			},
			user: '',
			message: null,
			block_button: true,	
			date: new Date(),
			Applications: '',
			ID: {
				ID: null
			},
			curent_form: null,
			check_list: null,
			i : 0,
			animation: {
				key: null,
				name: null,
				exit: null,
				burger: "opacity: 1",
				statusBody: null
			},
			loadingBut: false
	},
	mounted(){
		this.load_localStorageData()
		this.getAllForms()
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
		nowData(){
			
			this.br = application
		},
		show(){
			this.toggle('list')
		},
		showWind(name){
			this.windows = name;
			changeStatusBody('hidden')
			if(name == 'form'){
				this.proverk()
			}
			this.class = true;
			formadd();
		},
		removeClass(){
			this.windows = '';
			changeStatusBody(null)
			this.class = false;
			remove();
			this.inputForm= '';
		},
		proverk(){
			if(this.inputForm.length>0 && this.user){
				this.block_button= false;
				this.button= true;
			}else{
				this.button = false;
				this.block_button= true;
			}
		},
		description(){ 
			if(this.i == 0){
				this.check_list = "ul";
				this.i++
			}else if(this.i > 0){
				this.check_list = "";
				this.i = 0;
			}
		},
		check_signin(){
			if(this.signup.name.length != 0 && this.signup.second_name.length != 0 && this.signup.password.length != 0 && this.signup.email.length != 0){
				this.button = true;
				this.block_button = false;
			}else{
				this.button = false;
				this.block_button = true;
			}		
		},
		check_signup(){
			if(this.signin.email.length != 0 && this.signin.password.length != 0){
					this.button = true;
					this.block_button = false;
				}else{
					this.button = false;
					this.block_button = true;
				}
		},
		clear_signup(){
			this.message;
			this.signup.name= "";
			this.signup.second_name= "";
			this.signup.email= "";
			this.signup.password= "";	
			this.button = false;
			this.block_button = true;
		},
		user_signup: function(){
			this.loadingBut = true
			this.windows = 'signin';
			fetch(port + '/api/auth/signup', {
				method: 'POST',
				headers: {
    				'Content-Type': 'application/json'
  				},
				body: JSON.stringify(this.signup)
			}).then(res=> {res.json()})
			.then(data => {
				this.loadingBut = false
			})
			.catch(err => console.log(err))
			this.clear_signup();
		},
		user_signin: function(){
			this.loadingBut = true
         fetch('/api/auth/signin', 
             {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify(this.signin)
         })
         .then(res => { 
             return res.json() })
          .then(data => {
        		this.user = data;
         		this.user_localStorage()
				this.removeClass()
				this.loadingBut = false
     		});  
         this.signin.email = '';
			this.signin.password = '';
			this.button = false;
			this.block_button = true;
			
        },
      exit(){
      	localStorage.clear();
      	this.user = null;
      },
		user_localStorage(){
			localStorage.setItem('user', JSON.stringify(this.user))
		},
		load_localStorageData(){
			this.user = JSON.parse(localStorage.getItem('user'));
		}, 
		user_form(){
			var application = {
				ID_user: this.user.id,
				Description: this.inputForm,
				Date: `${ new Date().getDate()}.${ new Date().getMonth()}.${ new Date().getFullYear()}, ${ new Date().getHours()}:${ new Date().getMinutes()}`
			}
			 fetch(port + '/api/form_add', 
             {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify(application)
         })
         .then(res => { 
             return res.json() })
          .then(data => { 
				this.removeClass()
     		});
         
		},
		getAllForms(){
			fetch(port + '/api/form')
         .then(res => { 
             return res.json() })
          .then(data => { 
        		this.Applications = data.values;
     		});
		},
		get_delete_element(element, index){
			this.ID.ID = element;	
			this.deleteForms();
			this.Applications.splice(index, 1)
			},
		deleteForms(){
			fetch(port + '/api/form_delete', 
             {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify(this.ID.ID)
         })
         .then(res => { 
             return res.json() })
          .then(data => { 
        		
     		});
		},
		read_description(element){
			this.showWind("form")
			this.curent_form = element;
		},
		shownav(){
			this.animation.key = 'navMobil'
			this.animation.burger = 'opacity: 0';
			
			this.animation.name = `animation: ${this.animation.key} 0.5s ease forwards;`
			setTimeout(()=>{
				this.animation.exit = 'opacity: 1 !important;   animation: close 0.5s ease forwards;'
			}, 500)
		}, 
		hideNav (){
			changeStatusBody(null)
			this.animation.name = 'animation: navMobil_buck 0.5s ease forwards;'
			setTimeout(()=>{
				this.animation.burger = 'opacity: 1';
			}, 500)
			this.animation.exit = null
		}

	}

	
})













