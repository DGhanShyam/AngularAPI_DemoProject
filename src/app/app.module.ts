import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import {MenuModule} from 'primeng/menu';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SkillTestComponent } from './skill-test/skill-test.component';

import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';
import { UserInfoHeaderComponent } from './user-info-header/user-info-header.component';
import {HttpClientModule} from '@angular/common/http';
import { TemplateRoutingComponent } from './template-routing/template-routing.component'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserProfileComponent,
    AppointmentComponent,
    SkillTestComponent,
    UserInfoHeaderComponent,
    TemplateRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,    MatCardModule,    CardModule,
     ButtonModule, AccordionModule, MenuModule,
      InputTextareaModule, InputTextModule,
      CheckboxModule, RadioButtonModule,
       DropdownModule, TabViewModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
