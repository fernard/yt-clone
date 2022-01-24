import { AppConfig  } from './src/config/appConfig';
import {App} from './src/App'
import { VideoController } from './src/rest/video/VideoController';


const app = new App(
  [
    new VideoController(),
  ],
  AppConfig.getInstance().getPort(),
);
 
app.listen();