#!/bin/bash
ps aux | grep serve | kill `awk '{ print $2; exit '}`
