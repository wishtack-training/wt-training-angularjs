import * as angular from 'angular';
import { helloModule } from './hello/hello.module';


angular.bootstrap(document.body, [helloModule.name]);
