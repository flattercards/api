import { Serializer } from 'lux-framework';

class MessagesSerializer extends Serializer {
  attributes = [
    'message',
    'from',
    'createdAt',
    'updatedAt'
  ];

  hasOne = [
    'card'
  ];
}

export default MessagesSerializer;
