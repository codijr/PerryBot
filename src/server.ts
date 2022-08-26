import axios from 'axios';
import DiscordJS, { GatewayIntentBits as Intents } from 'discord.js';
import dotenv from 'dotenv';
import { commands } from './commands';
import { loremIpsumApi, weatherApi } from './services/api';

let prefix = "!";

dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.Guilds,
		Intents.GuildMessages,
		Intents.MessageContent,
	],
});

client.on('ready', () => {
	console.log('Perry ta na área 😎');
});

client.on('messageCreate', async message => {
	//See weather of city
	if (message.content.toLowerCase().startsWith(prefix + "clima")) {
		const city = message.content.split(' ').slice(1).join(" ");

		weatherApi.get('/data/2.5/weather', {
			params: {
				q: city,
				appid: process.env.OPEN_WEATHER_MAP_API_KEY
			}
		}).then(e => {
			const response = e.data;

			const weatherMessage = `Temperatura em ${response.name} é de ${(response.main.temp - 273).toFixed(1)}°C com umidade de ${response.main.humidity}%`;

			message.reply(weatherMessage);
		}).catch(err => {
			console.log(err)
			message.reply("Cidade não encontrada");
		})

		//Generator of Lorem Ipsum
	} else if (message.content.startsWith(prefix + "lorem")) {
		const numberOfParagraphs = message.content.split(' ').slice(1).join(" ");

		loremIpsumApi.get(`/${numberOfParagraphs}/plaintext/medium`).then(e => {
			const lorem = e.data;

			message.reply(lorem);
		}).catch(err => console.log(err));

		//Simple text messages
	} else {
		for (const command of commands) {
			if (message.content.toLowerCase().startsWith(prefix + command.name)) {
				await message.reply(command.reply);
			}
		}
	}
}
);

client.login(process.env.DISCORD_TOKEN);
