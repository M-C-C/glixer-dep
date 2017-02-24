var cp = require('child_process')
var os = require('os');
var fs = require('fs');

install();

function print(string) {
   'use strict';
   process.stdout.write(string);
}

function println(string) {
   'use strict';
   process.stdout.write(string + '\n');
}

function install() {
   switch(os.platform) {
      case 'darwin':
         installMac();
         break;
      case 'linux':
         installLinux();
         break;
      case 'win32':
         installWindows();
         break;
      default:
         installDefault();
         break;
   }
}

function runCommands(commands) {
   var results = [];
   var error;

   commands.forEach(function(command, index) {
      print('running \"' + command + "\"...")
      try {
         results[index] = cp.execSync(command, {stdio: ['ignore', 'ignore', error});
         println('success!');
      } catch(err) {
         println('Error\nCommand \"' + command + "\" did not complete successfully...");
         println("Diagnostics:\n" + err + "\n" + error);
         println("Exiting...")
         process.exit(1);
      }
   });
}

function installMac() {
}

function installWindows() {
}

function installLinux() {
   var commands = [
      'sudo apt-get update',
      'sudo apt-get install zlib1g-dev ruby ruby-dev build-essential',
      'npm install -g gulp',
      'sudo gem install bundler jekyll',
      'bundler install'
   ]
   runCommands(commands);

   println('All is well!');
   println(
      '★░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░███░██░░░░░░░░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░██░░░█░░░░░░░░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░██░░░██░░░░░░░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░░██░░░███░░░░░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░░░██░░░░██░░░░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░░░██░░░░░███░░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░░░░██░░░░░░██░░░░░░░░░░░░░★\n' +
      '★░░░░░░░███████░░░░░░░██░░░░░░░░░░░░★\n' +
      '★░░░░█████░░░░░░░░░░░░░░███░██░░░░░░★\n' +
      '★░░░██░░░░░████░░░░░░░░░░██████░░░░░★\n' +
      '★░░░██░░████░░███░░░░░░░░░░░░░██░░░░★\n' +
      '★░░░██░░░░░░░░███░░░░░░░░░░░░░██░░░░★\n' +
      '★░░░░██████████░███░░░░░░░░░░░██░░░░★\n' +
      '★░░░░██░░░░░░░░████░░░░░░░░░░░██░░░░★\n' +
      '★░░░░███████████░░██░░░░░░░░░░██░░░░★\n' +
      '★░░░░░░██░░░░░░░████░░░░░██████░░░░░★\n' +
      '★░░░░░░██████████░██░░░░███░██░░░░░░★\n' +
      '★░░░░░░░░░██░░░░░████░███░░░░░░░░░░░★\n' +
      '★░░░░░░░░░█████████████░░░░░░░░░░░░░★\n' +
      '★░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░★'
   );
}
