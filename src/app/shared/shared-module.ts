import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importacion de eu componente manito xd 
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { PrincipalNewsComponent } from './components/principal-news/principal-news.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { LinkComponent } from './components/link/link.component';
import { SelectComponent } from './components/select/select.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    ModalComponent,
    LinkComponent,
    SelectComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    ModalComponent,
    LinkComponent,
    SelectComponent,
    UserFormComponent
  ]
})
export class SharedModule {}
