from setuptools import setup
VERSION = '0.0.1'
DESCRIPTION = 'mapfun'
LONG_DESCRIPTION = 'A function that applies a mapping function to an infinite number of input elements, with options to skip certain elements and selectively apply the mapping to keys and/or values of objects.'
# Setting up
setup(
    name="mapfun",
    version=VERSION,
    author="Zakaria Elalaoui",
    description=DESCRIPTION,
    long_description_content_type="text/markdown",
    long_description=LONG_DESCRIPTION,
    packages = ['mapfun'],
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
