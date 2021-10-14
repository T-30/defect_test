import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';

import { FormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeproComponent } from './homepro/homepro.component';
import { CreatedefectComponent } from './createdefect/createdefect.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistersComponent } from './registers/registers.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowdefectComponent } from './showdefect/showdefect.component';
import { TestcaseComponent } from './testcase/testcase.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

// const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenubarComponent,
    HomeproComponent,
    CreatedefectComponent,
    BoardComponent,
    HeaderComponent,
    RegistersComponent,
    ShowdefectComponent,
    TestcaseComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    NgbModule,
    MatNativeDateModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatBadgeModule,
    MatTableModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
