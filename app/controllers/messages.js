import { Controller } from 'lux-framework';

class MessagesController extends Controller {
  params = [
    'from',
    'body',
    'card'
  ];
}

export default MessagesController;
