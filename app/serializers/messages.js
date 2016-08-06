import { Serializer } from 'lux-framework';

class MessagesSerializer extends Serializer {
  attributes = [
    'from',
    'body',
    'createdAt',
    'updatedAt'
  ];

  hasOne = [
    'card'
  ];
}

export default MessagesSerializer;
