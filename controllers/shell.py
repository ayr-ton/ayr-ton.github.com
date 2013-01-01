import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.out.write("""
<!DOCTYPE HTML><html><head><title>ayrtonaraujo.net - v0.4.0 Alpha</title>
<link href="css/style.css" rel="stylesheet"/>
<script type="text/javascript" src="js/libs-0001.js" async="async"></script>
<script type="text/javascript" src="js/app-0002.js" async="async"></script>
</head><body></body></html>""")





