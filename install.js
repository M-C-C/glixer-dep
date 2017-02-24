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

function installDefault() {
   var commands = [
      'npm install -g gulp',
      'gem install bundler jekyll',
      'bundler install'
   ]

   if (os.platform == 'linux') {
      commands[1] = 'sudo gem install bundler jekyll'
   }

   var results = [];

   commands.forEach(function(command, index) {
      print('running \"' + command + "\"...")
      try {
         results[index] = cp.execSync(command, {stdio: 'ignore'});
         println('success!');
      } catch(err) {
         println('Error\nCommand \"' + command + "\" did not complete successfully...");
         println("Diagnostics:\n" + err);
         println("Exiting...")
         process.exit(1);
      }
   });
   println('All is well!');
   console.log(
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

function installMac() {
   installDefault();
}

function installWindows() {
   installDefault();
}

function installLinux() {
   installDefault();
}
