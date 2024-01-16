const { SlashCommandBuilder } = require('discord.js');
const puppeteer = require('puppeteer'); //RUN: npm install puppeteer in terminal
module.exports = {
data: new SlashCommandBuilder()
.setName('askgpt')
.setDescription('Ask ChatGpt!')
.addStringOption(option => option.setName('query').setDescription('The query for the AI!').setRequired(true)),
