import { ConfigControl } from '@joka00.dev/libs/data-access';
import { FormBuilder, FormGroup } from '@angular/forms';

export class ConfigGroup {
  key: string;
  label: string;
  order: number;
  members: (ConfigControl<string | boolean> | ConfigGroup)[];

  constructor(
    key: string,
    label: string,
    order: number,
    members: (ConfigControl<string | boolean> | ConfigGroup)[]
  ) {
    this.key = key;
    this.label = label;
    this.order = order === undefined ? 1 : order;
    this.members = members ?? [];
  }

  asFormGroup(formBuilder: FormBuilder): FormGroup {
    let group = {};
    this.members.forEach((member) => {
      if (member instanceof ConfigGroup) {
        group = { ...group, [member.key]: member.asFormGroup(formBuilder) };
      } else {
        group = { ...group, [member.key]: member.asFormControl(formBuilder) };
      }
    });
    return formBuilder.group(group);
  }
}
