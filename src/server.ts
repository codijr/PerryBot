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
	for (const command of commands) {
		if (message.content.toLowerCase() === (command.name)) {
			await message.channel.send(command.reply);
		}
	}
});

client.login(process.env.DISCORD_TOKEN);
