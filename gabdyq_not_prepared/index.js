#! /usr/bin/env node

const { program } = require('commander')

const welcome = () => {
    console.log("nFactorial Incubator 22' author Gabdylgaziz Zhagypar")
}

const ab = (a, b) => {
    console.log(a+b)
}

program
    .command('welcome')
    .description('about this plug')
    .action(welcome)

program
    .command('a+b')
    .arguments("<int>", "a")
    .arguments("<int>", "b")
    .description('a+b')
    .action(ab)

program.parse();