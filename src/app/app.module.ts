import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleListComponent,
    FooterComponent,
    AboutComponent,
      ArticleComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot([
    { path: 'articles', component: ArticleListComponent },
    { path: 'about', component: AboutComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', component: ArticleListComponent },
    { path: ':key', component: ArticleComponent },
    { path: '**', component: NotFoundComponent }
], {
    initialNavigation: 'enabled'
})

  ],
  providers: [ArticleService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
