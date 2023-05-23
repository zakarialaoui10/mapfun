from setuptools import setup
from pathlib import Path
VERSION = '0.0.2'
DESCRIPTION = 'mapfun'
this_directory = Path(__file__).parent
LONG_DESCRIPTION = (this_directory / "README.md").read_text()
setup(
    name="mapfun",
    version=VERSION,
    author="Zakaria Elalaoui",
    description=DESCRIPTION,
    long_description_content_type="text/markdown",
    long_description=LONG_DESCRIPTION,
    packages = ['src.mapfun'],
    keywords=['python', 'map'],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: Unix",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
    ]
)
