import { Controller } from 'lux-framework';

class UsersController extends Controller {
  params = [
    'email',
    'address',
    'name'
  ];
}

export default UsersController;
