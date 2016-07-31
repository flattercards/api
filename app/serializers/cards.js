import { Serializer } from 'lux-framework';

class CardsSerializer extends Serializer {
  attributes = [
    'receiverCode',
    'senderCode'
  ];
}

export default CardsSerializer;
