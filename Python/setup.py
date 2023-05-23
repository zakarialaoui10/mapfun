from setuptools import setup
from pathlib import Path
VERSION = '0.0.2'
parent = Path(__file__).parent
setup(
    name="mapfun",
    version=VERSION,
    author="Zakaria Elalaoui",
    description="mapfun",
    long_description_content_type="text/markdown",
    long_description=(parent / "README.md").read_text(),
    packages = ['src'],
    keywords=['zikojs','python', 'map'],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: Unix",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
    ]
)
