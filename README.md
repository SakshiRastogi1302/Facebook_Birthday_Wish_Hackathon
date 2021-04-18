# Facebook Birthday Wisher


> Facebook Birthday Wisher is a CLI made using node.js which automates the process of wishing Facebook friends on their birthday using puppeteer.

Here is quick summary of my project.
1. The user can use the CLI developed currently in two ways : 
       i) User can see names of his/her friends whose birthday either fall today or were in the recent past 
       ii) User can wish all his/her friends whose birthday either fall today or were the recent past 
2. If user chooses to wish his/her friend a happy birthday, an excel sheet will also be generated to keep track of friends who have been wished so far.

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM .
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.14.10
v14.15.4
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Installation


Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/SakshiRastogi1302/Facebook_Birthday_Wish_Hackathon.git
$ cd Facebook_Birthday_Wish_Hackathon
```

To install and set up the library Puppeteer and XLSX , run:

```sh
$ npm install puppeteer
$ npm install xlsx
```


## Usage

### To know about the list of commands a user can run

```sh
$ node birthday_cli.js Help
```
### To see names  friends whose birthday either fall today or were in the recent past 

```sh
$ node birthday_cli.js View_Birthday_List
```
### To wish all friends whose birthday either fall today or were the recent past 

```sh
$ node birthday_cli.js Wish_All
```

