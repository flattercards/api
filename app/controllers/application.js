import { Controller } from 'lux-framework';

class ApplicationController extends Controller {
  beforeAction = [
    function setCorsHeader(req, res) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }
  ];
}

export default ApplicationController;
