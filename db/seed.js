import Message from '../app/models/message';
import Card from '../app/models/card';

export default async function seed() {
  await Promise.all([
    Card.create({ code: `asdf`}),
    Card.create({ code: `qwer`}),
    Card.create({ code: `kegisiwugu`}),
    Card.create({ code: `qifisupuge`})
  ]);

  await Promise.all([
    Message.create({
      cardId: 1,
      from: 'write',
      body: 'Last time I saw you a knew I had to tell you something. At the time I did not know what I would say. Now I know.'
    }),
    Message.create({
      cardId: 1,
      from: 'receive',
      body: 'What do you want to tell me?'
    }),
    Message.create({
      cardId: 1,
      from: 'write',
      body: 'I only can tell you over a coffee. What about 9PM at Gollem on the Raamstraat, Amsterdam?'
    })
  ]);
}
