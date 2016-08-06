import { Model } from 'lux-framework';

class Card extends Model {
  static hasMany = {
    messages: {
      inverse: 'card'
    }
  };
}

export default Card;
