import webapp2

from controllers import shell

app = webapp2.WSGIApplication([('/', shell.MainPage)],
                              debug=True)
