					// confere o click ao botao 
					// e chama as funcoes que iniciam, param e reiniciam
					// o cronometro
					document.getElementById('botao1').addEventListener('click', () => {startchrono()}, true);
					document.getElementById('botao2').addEventListener('click', () => {
						stopchrono()
					}, true);
					document.getElementById('botao3').addEventListener('click', () => {
						restartchrono()
					}, true);
					document.getElementById('áudio').addEventListener('change', () => {
						playAudio()
					}, true);
					// declara as variaveis que checam se o input esta em branco
					// ou se o usuario pediu para parar o cronometro
					var is_audio = false;
					var is_stop = false;
					var is_blank = false;
					const timer_real_zero = 0;
					var faststarter_variable = false;
					var total_seconds = 0;
					// declara as funcoes que reiniciam, param e começam
					// o cronometro
					function playAudio(){
						if (is_audio===false) {
						 is_audio = true;	
						}
						else {
							is_audio = false;
						} 
					}
					 function restartchrono(){
					 	let timer = document.getElementById('input').value;
					 	if (timer === ''){
							document.location.reload(true);
						}
						if (is_stop === true){
							document.location.reload(true);
						}
					 	return is_blank = true;
					 }
					 function stopchrono (){
					 	is_stop = true;	
						return  is_stop;
					}
					function chrono_validation(){
						//valida o input do usuário
						//se 1 digito --> segundo
						// 2 digitos --> 2 digitos segundos
						// 3 digitos --> digito mais a esquerda minutos
						
						let timer_validation = document.getElementById('input').value;
						console.log(timer_validation);
						if (timer_validation.length < 8){ 
						let timer_XYZ = 'AB:CD:EF';
						let result = '00:00:00';
						let total_seconds_validation = timer_validation;
						var clock = {
							seconds : 0,
							minutes : 0,
							hours : 0,
						}
						if (timer_validation.length == 1) {
							timer_XYZ = '00:00:0F';
							result = timer_XYZ.replace("F", timer_validation)
						}
						if (timer_validation.length == 2) {
							timer_XYZ = '00:00:EF';
							result = timer_XYZ.replace("EF", timer_validation)
						}
						if (timer_validation.length == 3) {
							timer_XYZ = '00:0D:EF';
							clock.minutes = timer_validation.charAt(0); 
							clock.seconds = timer_validation.charAt(1) + timer_validation.charAt(2);
							result = timer_XYZ.replace("EF", clock.seconds);
							result = result.replace("D", clock.minutes);
													}
						if (timer_validation.length == 4) {
							 timer_XYZ = '00:CD:EF';
							clock.minutes = timer_validation.charAt(0) + timer_validation.charAt(1); 
							clock.seconds = timer_validation.charAt(2) + timer_validation.charAt(3);
							result = timer_XYZ.replace("EF", clock.seconds);
							result = result.replace("CD", clock.minutes);
						}
						if (timer_validation.length == 5) {
							timer_XYZ = '0B:CD:EF';
							clock.hours = timer_validation.charAt(0); 
							clock.minutes = timer_validation.charAt(1) + timer_validation.charAt(2);
							clock.seconds = timer_validation.charAt(3) + timer_validation.charAt(4);
							result = timer_XYZ.replace("EF", clock.seconds);
							result = result.replace("CD", clock.minutes);
							result = result.replace("B", clock.hours);
						}
						if (timer_validation.length == 6){
							timer_XYZ = 'AB:CD:EF';
							clock.hours = timer_validation.charAt(0) + timer_validation.charAt(1); 
							clock.minutes = timer_validation.charAt(2) + timer_validation.charAt(3);
							clock.seconds = timer_validation.charAt(4) + timer_validation.charAt(5);
							result = timer_XYZ.replace("EF", clock.seconds);
							result = result.replace("CD", clock.minutes);
							result = result.replace("AB", clock.hours);
						}
						//fazer para lenght 4, 5 e 6
						document.getElementById('input').value = result;
					}
				}
					function startchrono(){
						chrono_validation();
						// pega o valor do input
						let timer = document.getElementById('input').value;
						// seleciona o display do cronometro
					    let display_cronometro = document.getElementById('timer');
						var timer_funct = {
							seconds : 0,
							minutes : 0,
							hours : 0,
						};
						const define_input = {
							tamanho : timer.length,
							boolean : false,
							ajuste : 0,
						}
						// transforma o valor do input em um numero
						// correspondente a uma posicao da string
						// com o metodo substring
						//minimo: 5 maximo 8
						try{
						timer_funct.hours = parseInt(timer.substring(0,2), 10);
						timer_funct.minutes = parseInt(timer.substring(3,5), 10);
						timer_funct.seconds = parseInt(timer.substring(6,8), 10);
							if (define_input.tamanho != 8) {
								if (define_input.tamanho == 5){
									timer_funct.hours = parseInt(timer.substring(0,1), 10);
									timer_funct.minutes = parseInt(timer.substring(2,3), 10);
									timer_funct.seconds = parseInt( timer.substring(4,5), 10);
								}
								if (define_input.tamanho == 6){
									console.log(timer_funct);
									if(isNaN(timer_funct.minutes)){
										console.log('pass1')
										timer_funct.hours = parseInt(timer.substring(0,1), 10);
										timer_funct.minutes = parseInt(timer.substring(2,4), 10);
										timer_funct.seconds = parseInt( timer.substring(5,6), 10);
									}
									if (isNaN(timer_funct.seconds)) {
										console.log('pass2')
										console.log(timer_funct.seconds);
										while (timer[define_input.ajuste] != ':'){
											define_input.ajuste++
										}
										console.log(define_input.ajuste);
										if (define_input.ajuste == 2){
											define_input.boolean = true;
										}
										timer_funct.hours = parseInt(timer.substring(0,1), 10);
										timer_funct.minutes = parseInt(timer.substring(2,4), 10);
										timer_funct.seconds = parseInt( timer.substring(5,6), 10);
										console.log(timer_funct);
										if (define_input.boolean == true) {
											console.log('pass3')
											timer_funct.hours = parseInt(timer.substring(0,2), 10);
											timer_funct.minutes = parseInt(timer.substring(3,4), 10);
											timer_funct.seconds = parseInt(timer.substring(5,6), 10);
										}
									}
									
								}
								if (define_input.tamanho == 7) {
									if (isNaN(timer_funct.minutes) && isNaN(timer_funct.seconds)){
										timer_funct.hours = parseInt(timer.substring(0,1), 10);
										timer_funct.minutes = parseInt(timer.substring(2,4), 10);
										timer_funct.seconds = parseInt( timer.substring(5,7), 10);
									}
									if (isNaN(timer_funct.minutes) || isNaN(timer_funct.seconds)) {
										if (isNaN(timer_funct.minutes)){
											timer_funct.hours = parseInt(timer.substring(0,2), 10);
											timer_funct.minutes = parseInt(timer.substring(3,4), 10);
											timer_funct.seconds = parseInt( timer.substring(5,7), 10);
										}
										if (isNaN(timer_funct.seconds)) {
											timer_funct.hours = parseInt(timer.substring(0,2), 10);
											timer_funct.minutes = parseInt(timer.substring(3,5), 10);
											timer_funct.seconds = parseInt( timer.substring(6,7), 10);
										}
									}
								}
							}
					}
					catch(e){
						console.log(e);
					}
						// define o conteudo de display_cronometro
						// como o input do usuario
						display_cronometro.innerHTML = timer;
						// condiciona o input do usuario a nao ser em branco
						// se for, a variavel is_blank recebe true
						if (timer === ''){
							alert('Insira o valor do tipo HH:MM:SS');
							is_blank = true;
						}
						total_seconds = (timer_funct.hours * 3600) + (timer_funct.minutes * 60) + timer_funct.seconds;
						var interval = setInterval(function(){
							// se is_blank for true, para o cronometro
							// e recarrega a pagina
							if (is_blank === true){
								clearInterval(interval);
								document.location.reload(true);
							}
							if (total_seconds === 0){
								stopchrono();
								console.log(is_audio);
								if (is_audio === true){
									console.log('pass')
									function playAudio2(){
										document.getElementById('audio_id').play();
									}
									playAudio2();
								}

								setTimeout(function(){
									alert("Time's up");
									clearInterval(interval);
									document.location.reload(true);
								}, 5000);
							}
							// logica do cronometro
							total_seconds--;
							timer_funct.hours = Math.trunc(total_seconds / 3600);
							timer_funct.minutes = Math.trunc(total_seconds / 60);
							timer_funct.seconds = total_seconds % 60;
							if (timer_funct.minutes > 60) {
								timer_funct.minutes = timer_funct.minutes % 60;
								}
							if (timer_funct.minutes % 60 == 0){
							timer_funct.minutes = 0;
							}

							// formata o cronometro
							if (timer_funct.hours < 10 && timer_funct.minutes < 10 && timer_funct.seconds < 10){
								display_cronometro.innerHTML = '0' + timer_funct.hours+ ':' + '0' + timer_funct.minutes + ':' + '0' + timer_funct.seconds;
							}
							else if (timer_funct.hours < 10 && timer_funct.minutes < 10){
								display_cronometro.innerHTML = '0' + timer_funct.hours + ':' + '0'+ timer_funct.minutes + ':' + timer_funct.seconds;
							}
							else if (timer_funct.hours < 10 && timer_funct.seconds < 10){
								display_cronometro.innerHTML = '0' + timer_funct.hours + ':' + timer_funct.minutes + ':' + '0' + timer_funct.seconds;
							}
							else if (timer_funct.minutes < 10 && timer_funct.seconds< 10){
								display_cronometro.innerHTML =   timer_funct.hours + ':' + '0'+ timer_funct.minutes + ':' + '0' + timer_funct.seconds;
							}
							else if (timer_funct.hours < 10){
								display_cronometro.innerHTML =  '0'+ timer_funct.hours + ':' +  timer_funct.minutes + ':' + timer_funct.seconds;
							}
							else {
								display_cronometro.innerHTML =   timer_funct.hours + ':' +  timer_funct.minutes + ':' + timer_funct.seconds;
							}
							//para o cronometro
							if (is_stop === true){
								clearInterval(interval);
							}
						}, 1000);
						
					}