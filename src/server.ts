import DiscordJS, { GatewayIntentBits as Intents } from 'discord.js';
import dotenv from 'dotenv';
import { commands } from './commands';

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
	if (message.content === commands[0].name) {
		await message.channel.send(commands[0].reply);
	}
});

client.login(process.env.DISCORD_TOKEN);
