import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

// PAGES
import { FeedPage } from '../pages/feed/feed';
import { ContactPage } from '../pages/contact/contact';
import { FriendRequestPage } from '../pages/friend_request/friend_request';
import { LoginPage } from '../pages/loginPage/login.page';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

// COMPONENTS
import { UserPreviewComponent } from '../components/user-preview/user-preview.component';
import { FeedPreviewComponent } from '../components/feed-preview/feed-preview.component';
import { FriendRequestBtnComponent } from '../components/friend-request-btn/friend-request-btn.component';
import { FeedImagePreviewComponent } from '../components/feed-image-preview/feed-image-preview.component';

// SERVICES
import { ApiCallService } from '../services/core/api-call.service';
import { AssetsService } from '../services/core/assets.service';
import { FriendRequestService } from '../services/friend_request.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FeedItemService } from '../services/feed_item.service';
import { FeedImageService } from '../services/feed_image.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    ContactPage,
    FriendRequestPage,
	LoginPage,
	HomePage,
    TabsPage,
	UserPreviewComponent,
	FeedPreviewComponent,
	FeedImagePreviewComponent,
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
    FeedPage,
    ContactPage,
    FriendRequestPage,
	LoginPage,
	HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	AssetsService,
	ApiCallService,
	FriendRequestService,
	FeedItemService,
	FeedImageService,
	LoginService,
	UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
