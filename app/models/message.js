import { Model } from 'lux-framework';

class Message extends Model {
  static belongsTo = {
    card: {
      inverse: 'message'
    }
  };
}

export default Message;
