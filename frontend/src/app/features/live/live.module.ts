
// ROUTER
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeahterIconModule} from '../../core/feather-icon/feather-icon.module';
import { MainLiveComponent } from './main-live.component';
import { LiveDragulaComponent } from './components/live-dragula/live-dragula.component';
import {DragulaModule} from 'ng2-dragula';
import { LiveDragulaElementComponent } from './components/live-dragula-element/live-dragula-element.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {SharedModule} from '../../shared/shared.module';
import { LiveDragulaNotesComponent } from './components/live-dragula-notes/live-dragula-notes.component';
import {NgbCollapseModule, NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxColorsModule} from 'ngx-colors';
import { LiveDragulaNoteDetailComponent } from './components/live-dragula-note-detail/live-dragula-note-detail.component';

const routes: Routes = [
  {
    path: '' ,
    component: MainLiveComponent
  },
]
@NgModule({
  declarations: [
    MainLiveComponent,
    LiveDragulaComponent,
    LiveDragulaElementComponent,
    LiveDragulaNotesComponent,
    LiveDragulaNoteDetailComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        FeahterIconModule,
        DragulaModule,
        ColorPickerModule,
        SharedModule,
        NgbCollapseModule,
        NgbTooltipModule,
        NgbPopoverModule,
        NgxColorsModule,

    ]
})
export class LiveModule { }
