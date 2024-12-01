import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

enum EnumTabGuard {
  system,
  user
}

export const tabGuard: CanActivateChildFn = (route, state) => {
  const tab: string = route.paramMap.get('tab')!;
  const deviceId: string = route.paramMap.get('id')!;
  const router: Router = inject(Router);
  const isInEnum = Object.values(EnumTabGuard).includes(tab);

  if (!isInEnum) {
    router.navigateByUrl(`/devices/${deviceId}/system`);
    return false;
  }
  return true;
};
