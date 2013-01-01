import unittest

from controllers import shell


class Main(unittest.TestCase):
    def testImportSuccessful(self):
        self.assertTrue(shell.MainPage)
