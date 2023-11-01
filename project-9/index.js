#! /usr/bin/env node
const date = new Date();
let day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`${year}-${month}-${day} ${hour}:${minutes}:${seconds}`);
const timestamp = Date.now();
const date1 = new Date(timestamp);
console.log(date1);
const date2 = new Date();
const formattedDate = date2.toLocaleDateString();
const formattedTime = date2.toLocaleTimeString();
console.log(`${formattedDate} ${formattedTime}`);
export {};
