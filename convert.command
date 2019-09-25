#!/bin/sh
export PATH=$PATH:public/usdpython_0/usdzconvert
export PYTHONPATH=$PYTHONPATH:public/usdpython_0/USD/lib/python
./public/usdpython_0/usdzconvert/usdzconvert island.usda gugu.usdz

$SHELL