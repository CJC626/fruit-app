import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FruitAppModule } from './fruit-app.module';
import { Fruit } from './fruit';

platformBrowserDynamic().bootstrapModule(FruitAppModule);