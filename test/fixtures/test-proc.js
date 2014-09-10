#!/usr/bin/env node

function myHandle() {
  console.log('myHandle called');
}

setTimeout(myHandle, 1000);
