from setuptools import setup
from pathlib import Path
VERSION = '0.0.5'
setup(
    name="mapfun",
    version=VERSION,
    author="Zakaria Elalaoui",
    description="mapfun",
    long_description_content_type="text/markdown",
    long_description=(Path(__file__).resolve().parent / "README.md").read_text(encoding='utf-8'),
    packages = ['mapfun'],
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
