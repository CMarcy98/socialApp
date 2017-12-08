import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/loginPage/login.page';
import { TabsPage } from '../pages/tabs/tabs';

//Components
import { UserPreviewComponent } from '../components/user-preview/user-preview.component';
import { FriendRequestBtnComponent } from '../components/friend-request-btn/friend-request-btn.component';

// Services
import { ApiCallService } from '../services/core/api-call.service';
import { AssetsService } from '../services/core/assets.service';
import { FriendRequestService } from '../services/friend_request.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	LoginPage,
    TabsPage,
	UserPreviewComponent,
	FriendRequestBtnComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	AssetsService,
	ApiCallService,
	FriendRequestService,
	LoginService,
	UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
