import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './componentes/wrapper/wrapper.component';
import { AboutComponent } from './componentes/about/about.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContainerComponent } from './componentes/container/container.component';
import { ContactSectionComponent } from './componentes/contact-section/contact-section.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    AboutComponent,
    PortfolioComponent,
    ContainerComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
