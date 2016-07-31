import { Serializer } from 'lux-framework';

class UsersSerializer extends Serializer {
  attributes = [
    'email',
    'address',
    'name'
  ];
}

export default UsersSerializer;
