#!/usr/bin/env node

const path = require('path');
const serve = require('serve');
const dist = path.resolve(__dirname, '../dist');

serve(dist);
