import DiscordJS, {GatewayIntentBits as Intents} from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.Guilds,
		Intents.GuildMessages,
		Intents.MessageContent
	]
});

client.on('ready', () => {
	console.log('Perry ta na área 😎');
});

client.on('messageCreate', async message => {
	if(message.content === '!teste') {
		await message.channel.send('deu bom');
	}
});

client.login(process.env.DISCORD_TOKEN);