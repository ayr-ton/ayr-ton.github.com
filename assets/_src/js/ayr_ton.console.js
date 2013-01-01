function Console() {
    var notimplemented = 'To be implemented soon. (or not)';
    this.init = function () {
        $(document).ready(function($) {
            // Creating the console.
            var header = "Welcome to ayrtonaraujo.net. - Under Development (v0.4.0 Alpha)\n" +
                     "    Type '\033[1mhelp\033[0m' for a list of available commands.\n";
            window.jqconsole = $('body').jqconsole(header, '$ -> ');

            // Abort prompt on Ctrl+Z.
            jqconsole.RegisterShortcut('Z', function() {
            jqconsole.AbortPrompt();
            handler();
            });

            // Move to line start Ctrl+A.
            jqconsole.RegisterShortcut('A', function() {
            jqconsole.MoveToStart();
            handler();
            });

            // Move to line end Ctrl+E.
            jqconsole.RegisterShortcut('E', function() {
            jqconsole.MoveToEnd();
                handler();
            });

            jqconsole.RegisterMatching('{', '}', 'brace');
            jqconsole.RegisterMatching('(', ')', 'paran');
            jqconsole.RegisterMatching('[', ']', 'bracket');
            // Handle a command.
            var handler = function(command) {
            if (command) {
                try {
                  Console[command]();
                } catch (e) {
                  jqconsole.Write(command + ': command not found\n');
                }
            }
            jqconsole.Prompt(true, handler, function(command) {
                // Continue line if can't compile the command.
                try {
                Function(command);
                } catch (e) {
                if (/[\[\{\(]$/.test(command)) {
                    return 1;
                } else {
                    return 0;
                }
                }
                return false;
            });
            };

            // Initiate the first prompt.
            handler();
        });
    }
    this.help = function () {
        var help =
        '\033[1mList of available commands:\033[0m\n' +
        '\033[33mblog\033[0m ==> \033[36mAyrton\'s blog.\n' +
        '\033[33mclear\033[0m ==> \033[36mClear screen.\n' +
        '\033[33mcontact\033[0m ==> \033[36mContact info.\n' +
        '\033[33mdate\033[0m ==> \033[36mDisplays the current date.\n' +
        '\033[33mgoto\033[0m ==> \033[36mJump to other pages.\n' +
        '\033[33mhelp\033[0m ==> \033[36mhelp Displays this list.\n' +
        '\033[33missues\033[0m ==> \033[36mFound bugs or have suggestions for this site?\n' +
        '\033[33mpress\033[0m ==> \033[36mPress related links.\n' +
        //term.echo('[[b;#FFF;]projects] [[;#A40;]=>]  [[;#73d216;]List of projects Ayrton is involved on.]');
        '\033[33mresume\033[0m ==> \033[36mDisplays a compact resume.\n' +
        '\033[33mskills\033[0m ==> \033[36mProfessional skills.\n' +
        '\033[33mwhois\033[0m ==> \033[36mWho is Ayrton Araujo?\033[0m\n' +
        '\nThere\'s some other available commands. Use your imagination :-)\n';
        jqconsole.Write(help);
    }
    //#TODO: Implement clear (issue 33)
    this.blog = function () {
        window.location="http://blog.ayrtonaraujo.net/";
    }
    this.contact = function () {
        window.location.href = "mailto:root@ayrtonaraujo.net";
    }
    this.date = function () {
        var date = '[[;#73d216;]In a relationship with] [[b;#FFF;]Madoka Ito] [[;#A40;]x3]';
        jqconsole.Write(notimplemented);
        //#FIXME: Format the old syntax of date command (issue 30)
    }
    /*
    this.go = function () {
        jqconsole.Write(notimplemented);
        //#TODO: Implement goto (issue 4)
    }*/
    this.issues = function () {
        window.location="http://github.com/ayr-ton/ayrtonaraujo.net/issues";
    }
    this.press = function () {
        jqconsole.Write(notimplemented);
        //#TODO: Implement press (issue 5)
    }
    this.projects = function () {
        jqconsole.Write(notimplemented);
        //#TODO: Implement projects (issue 20)
    }
    this.resume = function () {
        jqconsole.Write(notimplemented);
        //#TODO: Implement resume (issue 7)
    }
    this.skills = function () {
        jqconsole.Write(notimplemented);
        //#TODO: Implement skills (issue 8)
    }
    this.whois = function () {
        var whois = '[[b;#FFF;]Ayrton Araújo] [[;#73d216;]is a software enginner with more than five years of experience in development,\r\n              desktop and server software focused on unix.\r\n\n             "I am a software engineer who likes efficiency and security.\r\n              I love debugging and digging into the code, finding out how things work and\r\n              performing client side and server side hardening.\r\n              I have also been in contact with web development, both front and back end,\r\n              learning from the latest technologies and putting them in practice in multiple projects."]';
        jqconsole.Write(notimplemented);
        //#FIXME: Format whois to the new format (issue 31)
    }
    //#FIXME: Port easter eggs (issue 32)
};
var Console = new Console();
Console.init();
