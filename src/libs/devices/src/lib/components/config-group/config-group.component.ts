import { Component, Input, inject, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberType } from '../device-detail/device-detail.map';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { ConfigControl, ConfigGroup, ControlType } from '@joka00.dev/libs/data-access';
import { DESCRIPTIONS } from '../../descriptions';


@Pipe({
  standalone: true,
  name: 'isLabelVisible'
})
export class IsLabelVisible implements PipeTransform {
  hiddenLabels = ['boot', 'core', 'desktop', 'hardware', 'server', 'utils'];

  transform(label: string) {
    return this.hiddenLabels.includes(label.toLowerCase()) ? '' : `${label}:`;
  }
}

@Component({
  selector: 'joka00-config-group',
  standalone: true,
  imports: [CommonModule, IsLabelVisible, MatCheckbox, MatOption, MatSelect, ReactiveFormsModule, MatFormField, MatLabel],
  templateUrl: './config-group.component.html',
  styleUrl: './config-group.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ConfigGroupComponent {
  readonly ControlType = ControlType;
  private FormGroupDirective = inject(FormGroupDirective);
  @Input() group!: Partial<ConfigGroup & ConfigControl<any>>;
  @Input() form!: FormGroup;


  get innerForm(): FormGroup {
    const innerForm = this.form.get(this.group.key!) as FormGroup;
    return innerForm;
  }
}
