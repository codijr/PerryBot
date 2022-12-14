import axios from 'axios';
import { Command } from './@types';


export const commands: Command[] = [
  {
    name: 'comandos',
    reply: '**Estes são os comandos disponíveis:**```!ping - Responde com um Pong \n!teste - Responde com um Teste \n!comandos - Mostra os comandos disponíveis \n!lorem [número de parágrafos] - Gera um texto aleatório \n!clima [cidade] - Mostra o clima da cidade```',
  },
  {
    name: 'ping',
    reply: 'pong',
  },
  {
    name: 'teste',
    reply: 'testando...',
  },

  {
    name: 'bom dia',
    reply: 'Bom dia :grin: ',
  },

  {
    name: 'oi perry',
    reply: `Olá eu sou o Perry, o bot oficial da CODI no servidor :grin: `,
  },

];
