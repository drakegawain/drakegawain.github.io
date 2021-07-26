function startchrono(){
						var timer_funct = {
							'notdefined'== '0',
							seconds = 0,
							minutes = 0,
							hours = 0,
						};
						let timer = document.getElementById('input');
						timer_funct.hours = parseInt(timer.substring(0,2), 10);
						timer_funct.minutes = parseInt(timer.substring(3,5), 10);
						timer_funct.seconds = parseInt(timer.substring(6,8), 10);
						setInterval(function(){
							timer_funct.seconds--;
							if(timer_funct.seconds == 0){
								timer_funct.minutes--;
								timer_funct.seconds = 59;
								if (timer_funct.minutes == 0) {
									timer_funct.hours--;
									timer_funct.minutes = 59;
								}
							}
							if (timer_funct.seconds < 10){
								timer.innerHTML = timer_funct.hours + ':' + timer_funct.minutes + ':' + '0' + timer_funct.seconds;
								if (timer_funct.minutes < 10){
									timer.innerHTML = timer_funct.hours + ':' + '0' + timer_funct.minutes + ':' + '0' + timer_funct.seconds;
									if (timer_funct.hours < 10){
										timer.innerHTML = '0' + timer_funct.hours + ':' + '0' + timer_funct.minutes + ':' + '0' + timer_funct.seconds;
									}
								}
							}
						
						}, 1000);
					}