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
            term.echo('To be re-implemented soon');
        }  else if (command == 'date'){
            term.echo('To be re-implemented soon');
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
            term.echo('To be re-implemented soon');
        } else if (command == 'test'){
            term.push(function(command, term) {
                if (command == 'help') {
                    term.echo('if you type ping it will display pong');
                } else if (command == 'ping') {
                    term.echo('pong');
                } else {
                    term.echo('unknown command ' + command);
                }
            }, {
                prompt: 'test>',
                name: 'test'});
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
        greetings: 'Welcome to ayrtonaraujo.net. - Under Development (v0.2.1 Alpha) \r\n Type \'[[b;#FFF;]help]\' for a list of available commands.'
    });
});
