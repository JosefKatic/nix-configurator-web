import { Component, Pipe, PipeTransform, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  ConfigControl,
  ConfigGroup,
  ControlType,
  GetDeviceDetailGQL,
  SystemConfigInput,
  UpdateSystemConfigGQL,
  UpdateHomeConfigGQL,
  ConfigType,
  HomeConfigInput,
} from '@joka00.dev/libs/data-access';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatCheckbox } from '@angular/material/checkbox';
import { DESCRIPTIONS } from '../../descriptions';
import { DESCRIPTIONS_HOME } from '../../descriptions-home';
import { MatOption, MatSelect } from '@angular/material/select';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MemberType } from './device-detail.map';
import { ConfigGroupComponent } from '../config-group/config-group.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'joka00-device-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatCheckbox,
    MatAccordion,
    MatSelect,
    MatOption,
    FormsModule,
    ReactiveFormsModule,
    ConfigGroupComponent,
    MatButton,
  ],
  templateUrl: './device-detail.component.html',
  styleUrl: './device-detail.component.scss',
})
export class DeviceDetailComponent {
  supportedLocales = ['cs_CZ.utf8', 'en_US.utf8'];
  hostname!: string;
  tab!: string;
  deviceQueryResult$!: Observable<ConfigGroup[]>;
  form!: FormGroup;

  constructor(
    route: ActivatedRoute,
    private getDeviceDetail: GetDeviceDetailGQL,
    private fb: FormBuilder,
    private updateSystemConfigGQL: UpdateSystemConfigGQL,
    private updateHomeConfigGQL: UpdateHomeConfigGQL,
  ) {
    route.paramMap.subscribe((params) => {
      this.hostname = String(params.get('hostname'));
      this.tab = String(params.get('tab'));
      this.deviceQueryResult$ = this.getDeviceDetail
        .watch({
          hostname: this.hostname,
        })
        .valueChanges.pipe(
          map(({ data }) => {
            const generate: any = (
              member: MemberType,
              parentKeys: string[],
            ) => {
              order++;
              if (member.children !== undefined) {
                return new ConfigGroup(
                  member.key,
                  member.label,
                  order,
                  member.children.map((memberChild: MemberType) => {
                    return generate(memberChild, [
                      ...parentKeys,
                      memberChild.key,
                    ]);
                  }),
                );
              } else {
                const value = parentKeys.reduce(
                  (obj, key) =>
                    obj && obj[key] !== 'undefined' ? obj[key] : undefined,
                  resultData as { [key: string]: any },
                );
                return new ConfigControl<typeof value>(
                  value,
                  member.key,
                  member.label,
                  member['controlType'] !== undefined
                    ? member.controlType
                    : ControlType.checkbox,
                  false,
                  order,
                  member.options ?? [],
                );
              }
            };

            const usedDescriptions =
              this.tab === 'system' ? DESCRIPTIONS : DESCRIPTIONS_HOME;
            const resultData =
              this.tab === 'system'
                ? data.device.systemConfig
                : data.device.homeConfig;
            const cfg: ConfigGroup[] = [];
            let order = 0;

            (usedDescriptions as MemberType[]).forEach((member: MemberType) => {
              cfg.push(generate(member, [member.key]));
            });
            let group = {};
            cfg.forEach((c) => {
              group = { ...group, [c.key]: c.asFormGroup(this.fb) };
            });
            this.form = this.fb.group(group);
            console.log(this.form);
            return cfg;
          }),
        );
    });
  }

  public innerForm(rootKey: string, childKey: string): FormGroup {
    return this.form.get(rootKey)?.get(childKey) as FormGroup;
  }

  public typeOf(value: any, type: string) {
    if (type === 'array') {
      return Array.isArray(value);
    }
    return typeof value === type;
  }

  updateConfig() {
    if (this.form.valid) {
      if (this.tab === 'system') {
        this.updateSystemConfigGQL
          .mutate({
            updateDeviceInput: {
              hostname: this.hostname,
              type: ConfigType.System,
              updatedConfig: this.getDirtyValues(
                this.form,
              ) as SystemConfigInput,
            },
          })
          .subscribe();
      } else if (this.tab === 'user') {
        this.updateHomeConfigGQL
          .mutate({
            updateDeviceInput: {
              hostname: this.hostname,
              type: ConfigType.Home,
              updatedConfig: this.getDirtyValues(this.form) as HomeConfigInput,
            },
          })
          .subscribe();
      }
    }
  }

  getDirtyValues(form: any) {
    let dirtyValues = {};

    Object.keys(form.controls).forEach((key) => {
      let currentControl = form.controls[key];

      if (currentControl.dirty) {
        if (currentControl.controls)
          dirtyValues = {
            ...dirtyValues,
            [key]: this.getDirtyValues(currentControl),
          };
        else dirtyValues = { ...dirtyValues, [key]: currentControl.value };
      }
    });

    return dirtyValues;
  }
}
