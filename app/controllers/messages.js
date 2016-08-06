import { Controller } from 'lux-framework';

class MessagesController extends Controller {
  params = [
    'from',
    'body'
  ];
}

export default MessagesController;
