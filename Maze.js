//Team Members: Lincoln Hess & Lucas Winfrey
//Date: 1.24.2025
//Program: Maze
//Hardware: Bolt #SB-B2F8

//beginProgram
async function startProgram() {

//Start & Say Start
//Bolt will say Start acrossed the LED's & Say it out loud
//Driver: Lucas Winfrey
//Navigator: Lincoln Hess

await speak("Start", true);
	await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true);


//Green Checkpoint
//LED's turn Green
//Driver: Lincoln Hess
//Navigator: Lucas Winfrey

await setSpeed(30);
	await delay(5.4);
	await setSpeed(0);
	await delay(1);
	await setMainLed({ r: 0, g: 255, b: 0 });



//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Lucas Winfrey
//Navigator: Lincoln Hess

	await spin(90,1);
	await roll(90,50,1.89);
	await delay(1);
	await spin(90,1);
	await roll(180,30,1.5);
	await Sound.Animal.Monkey.play(true);


//Red Checkpoint
//LED's turn Red
//Driver: Lincoln Hess
//Navigator: Lucas Winfrey

	await spin(40,1);
	await roll(220,30,2);
	await setMainLed({ r: 255, g: 0, b: 0 });



//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Lucas Winfrey
//Navigator: Lincoln Hess

	await spin(-89,1);
	await roll(131,30,1.36);
	await spin(-90,1);
	await roll(41,30,2);
	await Sound.Animal.Donkey.play(true);



//Purple Checkpoint
//LED's turn Purple
//Driver: Lincoln Hess
//Navigator: Lucas Winfrey




//Sound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Lucas Winfrey
//Navigator: Lincoln Hess




//Blue Checkpoint
//LED's turn Blue
//Driver: Lincoln Hess
//Navigator: Lucas Winfrey




//Finished & Say Finished
//Bolt will say Finished acrossed the LED's & Say it out loud
//Driver: Lucas Winfrey
//Navigator: Lincoln Hess




//endProgram
}
