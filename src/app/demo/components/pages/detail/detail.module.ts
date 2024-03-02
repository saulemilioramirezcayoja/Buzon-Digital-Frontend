import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion'; // Importa AccordionModule
import { TagModule } from 'primeng/tag'; // Importa TagModule
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';


@NgModule({
	imports: [
		CommonModule,
		DetailRoutingModule,
		FormsModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
		ToastModule,
		ToolbarModule,
		ReactiveFormsModule,
		ButtonModule,
		TableModule,
		CardModule,
		FieldsetModule,
		AccordionModule,
		TagModule,
		TabViewModule,
		TimelineModule,
	],
	declarations: [DetailComponent]
})
export class DetailModule { }
