import { FormBuilder, FormControl, Validators } from '@angular/forms';

export enum ControlType {
  'checkbox',
  'radio',
  'select',
  'multi-select',
  'text'
}

export class ConfigControl<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: ControlType;
  options: { key: string, value: string }[] | string[];

  constructor(
    value: T,
    key: string,
    label: string,
    controlType: ControlType,
    required?: boolean,
    order?: number,
    options?: { key: string, value: string }[] | string[]
  ) {
    this.value = value;
    this.key = key || '';
    this.label = label || '';
    this.required = required || false;
    this.order = order === undefined ? 1 : order;
    this.controlType = controlType || ControlType.checkbox;
    this.options = options || [];
  }

  asFormControl(formBuilder: FormBuilder) {
    return formBuilder.control(this.value, this.required ? [Validators.required] : []);
  }
}
