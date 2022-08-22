import DiscordJS, {GatewayIntentBits as Intents} from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.Guilds,
		Intents.GuildMessages
	]
});

client.on('ready', () => {
	console.log('Perry ta na área 😎');
});

client.on('messageCreate', (message) => {
	if(message.content === 'oi') {
		message.reply({
			content: 'Olá'
		});
	}
});

client.login(process.env.DISCORD_TOKEN);