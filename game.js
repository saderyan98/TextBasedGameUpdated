import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.red('\nWELCOME TO YOUR DOOM ONLY ONE ROUTE LEADS TO VICTORY!!!!!  '));



function startGame() { 
  inquirer
    .prompt([
      {
        name: 'NAME',
        type: 'input',
        message: 'ENTER YOUR NAME:',
        
      },
      
      {
        name: 'Weapon',
        message: 'PICK A WEAPON?',
        type: 'rawlist',
        choices: ['SHOTGUN', 'SNIPER', 'HANDGUN', 'MACHINE GUN'],
      },
      {
        name: 'location',
        message: 'CHOOSE LOCATION',
        type: 'list',
        choices: ['City', 'Hospital', 'Abandoned building'],
      },
      {
        name: 'Happy',
        message: 'ARE YOU HAPPY WITH YOUR CHOICE?',
        type: 'checkbox',
        choices: ['YES', 'YES', 'YES'],
      },
      {
        type: 'message1',
        name: 'separator',
        message: 'AS YOU GEAR UP YOU HEAR SOME RUSTLING NEARBY, YOU LOOK OUTSIDE AND SEE A ZOMBIE APPROACHING YOU ( PRESS ENTER TO CONTINUE) ',
      },
      {
        name: 'Action1',
        message: 'DO YOU ATTACK OR FLEE?',
        type: 'list',
        choices: ['Attack?', 'Flee?'],
      },
    ])
    
    
    .then(function (answers) {
      const action1 = answers.Action1;

      if (action1 === 'Attack?') {
        console.log(chalk.red('YOU CHOOSE TO ATTACK! \n Which leads to you using ammo and because of the sound, more zombies are coming YOUR WAY!!!\n You Start Running Faster than Usain Bolt and find a shed.'));
        continueGame();
      } else if (action1 === 'Flee?') {
        console.log(chalk.blue('\nYOU CHOOSE TO FLEE! While running, you fell down and lost a shoe \n You are not Cinderella so you get no help but a Bite from the zombies \n GAME OVER'));
        process.exit();
      }
    });
}

function continueGame() { 
  inquirer
    .prompt([
      {
        name: 'Action2',
        message: 'You hide in a shed and find another person, but he is starting to display weird behavior', 
        type: 'list',
        choices: ['Do you shoot him?', 'help Him?', 'Give Him the Gun', 'Give him to the zombies as a present'],
      },
    ])
    .then(function (answers) {
      const action2 = answers.Action2;

      if (action2 === 'Do you shoot him?') {
        console.log(chalk.green('YOU CHOOSE TO SHOOT HIM and find out he was Infected! '));
        console.log(chalk.green('Oh yeah, forgot to mention, as YOU FIRED A SHOT, A LOT OF ZOMBIES ARE COMING!!!! '));
        console.log(chalk.green('As you escape the shed, you see a light from above!!! '));
        console.log(chalk.green('A helicopter is throwing a rope to you '));
        console.log(chalk.green('YOU JUMP TO IT LIKE JOHN WICK AND FLY TO SAFETY" '));
        console.log(chalk.green('"GOOD JOB, YOU SURVIVED!!! '));
        
      } else if (action2 === 'help Him?') {
        console.log(chalk.red('HE TURNS OUT TO BE INFECTED AND BITES YOU ? \n GAME OVER!!!!!!'));
        process.exit();
      } else if (action2 === 'Give Him the Gun') {
        console.log(chalk.red('WHY WOULD YOU GIVE HIM THE GUN???? \n GAME OVER!!!'));
        process.exit();
      } else if (action2 === 'Give him to the zombies as a present') {
        console.log(chalk.red('You Felt very guilty about it and didnt see the zombie behind you and got bitten \n GAME OVER!!!'));
        process.exit();
      }
      
    });
}

startGame();
