import { Component, input } from '@angular/core';
import { Entity } from '@exlibris/exl-cloudapp-angular-lib';

@Component({
	selector: 'app-entity-detail',
	templateUrl: './entity-detail.component.html',
	styleUrl: './entity-detail.component.scss',
})
export class EntityDetailComponent {
	public entity = input.required<Entity | null>();
}
