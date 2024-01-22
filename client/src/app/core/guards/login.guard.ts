import { inject } from "@angular/core";
import { Router } from "@angular/router";


export const loginWard = () => {
  const router = inject(Router)
  const userJSON = localStorage.getItem('User');
  if (userJSON) {
    const user = JSON.parse(userJSON);
    if (user && user.documentNumber) {
      return true;
    }
  }
  router.navigate(['/login'])
  return false;
}
