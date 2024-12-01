import { ConfigControl, ConfigGroup, ControlType } from '@joka00.dev/libs/data-access';

export interface MemberType extends Object {
  key: string;
  label: string;
  children?: MemberType[];
  controlType?: ControlType;
  options?: string[];
}




