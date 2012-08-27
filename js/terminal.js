jQuery(document).ready(function($) {
    var id = 1;
    $('body').terminal(function(command, term) {
        if (command == 'help') {
			term.echo('List of available commands:');
			term.echo('[[b;#FFF;]blog] [[;#A40;]=>] [[;#73d216;]Ayrton\'s blog.]')
			term.echo('[[b;#FFF;]clear] [[;#A40;]=>] [[;#73d216;]Clear screen.]')
			term.echo('[[b;#FFF;]contact] [[;#A40;]=>] [[;#73d216;]Contact info.]')
			//term.echo('<span class="commandhelp"><b>copy</b></span>Copyright info.')
			term.echo('[[b;#FFF;]date] [[;#A40;]=>] [[;#73d216;]Displays the current date.]');
			term.echo('[[b;#FFF;]goto] [[;#A40;]=>] [[;#73d216;]Jump to other pages.]');
			term.echo('[[b;#FFF;]help] [[;#A40;]=>] [[;#73d216;]help Displays this list.]');
			term.echo('[[b;#FFF;]press] [[;#A40;]=>] [[;#73d216;]Press related links.]');
			term.echo('[[b;#FFF;]projects] [[;#A40;]=>]  [[;#73d216;]List of projects Ayrton is involved on.]');
			//term.echo('<span class="commandhelp">svn</span>SVN repository address.')
			term.echo('[[b;#FFF;]resume] [[;#A40;]=>] [[;#73d216;]Displays a compact resume.]');
			term.echo('[[b;#FFF;]skills] [[;#A40;]=>] [[;#73d216;]Professional skills.]');
			term.echo('[[b;#FFF;]whois] [[;#A40;]=>] [[;#73d216;]Who is Ayrton Araujo?]');
            term.echo('\n There\'s some other available commands. Use your imagination :-)');
        } else if (command == 'blog'){
            window.location="http://blog.ayrtonaraujo.net/";
        } else if (command == 'contact'){
            window.location.href = "mailto:root@ayrtonaraujo.net";
        }  else if (command == 'date'){
            term.echo('[[;#73d216;]In a relationship with] [[b;#FFF;]Madoka Ito] [[;#A40;]x3]');
        } else if (command == 'goto'){
            term.echo('To be re-implemented soon');
        } else if (command == 'help'){
            term.echo('To be re-implemented soon');
        } else if (command == 'press'){
            term.echo('To be re-implemented soon');
        } else if (command == 'projects'){
            term.echo('To be re-implemented soon');
        } else if (command == 'resume'){
            term.echo('To be re-implemented soon');
        } else if (command == 'skills'){
            term.echo('To be re-implemented soon');
        } else if (command == 'whois'){
            term.echo('[[b;#FFF;]Ayrton Araújo] [[;#73d216;]is a software enginner with more than five years of experience in development,\r\n              desktop and server software focused on unix.\r\n\n             "I am a software engineer who likes efficiency and security.\r\n              I love debugging and digging into the code, finding out how things work and\r\n              performing client side and server side hardening.\r\n              I have also been in contact with web development, both front and back end,\r\n              learning from the latest technologies and putting them in practice in multiple projects."]');
        } else if (command == 'ping') {
                    term.echo('pong');
        } else if (command == 'apt-get') {
                    term.echo('[[;#73d216;]This APT has Super Cow Powers.]');
        } else if (command == 'apt-get moo') {
                    term.echo('[[;#73d216;]         (__)\r\n         (oo)\r\n   /------\\/\r\n  / |    ||\r\n *  /\\---/\\\r\n    \r\n~~   ~~\r\n...."Have you mooed today?"...]');
        } else if (command == 'aptitude') {
                    term.echo('[[;#73d216;]This aptitude does not have Super Cow Powers.]');
        } else if (command == 'aptitude moo') {
                    term.echo('[[;#73d216;]There are no Easter Eggs in this program.]');
        } else if (command == 'aptitude -v moo') {
                    term.echo('[[;#73d216;]There really are no Easter Eggs in this program.]');
        } else if (command == 'aptitude -vv moo') {
                    term.echo('[[;#73d216;]Didn\'t I already tell you that there are no Easter Eggs in this program?]');
        } else if (command == 'aptitude -vvv moo') {
                    term.echo('[[;#73d216;]Stop it!]');
        } else if (command == 'aptitude -vvvv moo') {
                    term.echo('[[;#73d216;]Okay, okay, if I give you an Easter Egg, will you go away?]');
        } else if (command == 'aptitude -vvvvv moo') {
                    term.echo('[[;#73d216;]All right, you win.\r\n\n                               /----\\\r\n                       -------/      \\\r\n                      /               \\\r\n                     /                |\r\n   -----------------/                  --------\\\r\n   ----------------------------------------------]');
        } else if (command == 'aptitude -vvvvvv moo') {
                    term.echo('[[;#73d216;]What is it? It\'s an elephant being eaten by a snake, of course.]');
        } else if (command == "js") {
            term.push(function(command, term) {
                var result = window.eval(command);
                if (result != undefined) {
                    term.echo(String(result));
                }
            }, {
                name: 'js',
                prompt: 'js>'});
        } else if (command == 'mysql') {
            term.push(function(command, term) {
                term.pause();
                $.jrpc("mysql-rpc-demo.php", 
                       id++, 
                       "query", 
                       [command], 
                       function(data) {
                           term.resume();
                           if (data.error) {
                               term.error(data.error.message);
                           } else {
                               if (typeof data.result == 'boolean') {
                                   term.echo(data.result ? 'success' : 'fail');
                               } else {
                                   var len = data.result.length;
                                   for(var i=0;i<len; ++i) {
                                       term.echo(data.result[i].join(' | '));
                                   }
                               }
                           }
                       },
                       function(xhr, status, error) {
                           term.error('[AJAX] ' + status + 
                                      ' - Server reponse is: \n' + 
                                      xhr.responseText);
                           term.resume();
                       });
            }, {
                greetings: "This is example of using mysql from terminal\n\
you are allowed to execute: select, insert, update and delete from/to table:\n\
    table test(integer_value integer, varchar_value varchar(255))",
                prompt: "mysql>"});
        } else {
            term.echo("unknow command " + command);
        }
    }, {
        greetings: 'Welcome to ayrtonaraujo.net. - Under Development (v0.3.0 Alpha) \r\n Type \'[[b;#FFF;]help]\' for a list of available commands.', tabcompletion: true
    });
});
