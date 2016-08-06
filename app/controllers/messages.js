import { Controller } from 'lux-framework';

class MessagesController extends Controller {
  params = [
    'message',
    'from'
  ];
}

export default MessagesController;
