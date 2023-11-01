#! /usr/bin/env node

const date = new Date();


let day = date.getDay();


const month = date.getMonth();


const year = date.getFullYear();


const hour = date.getHours();


const minutes = date.getMinutes();


const seconds = date.getSeconds();


console.log(`${year}-${month }-${day} ${hour}:${minutes}:${seconds}`);


const timestamp: number = Date.now();


const date1: Date = new Date(timestamp);


console.log(date1);


const date2: Date = new Date();


const formattedDate: string = date2.toLocaleDateString();


const formattedTime: string = date2.toLocaleTimeString();


console.log(`${formattedDate} ${formattedTime}`);


