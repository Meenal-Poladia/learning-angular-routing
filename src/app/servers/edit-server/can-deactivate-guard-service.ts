import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


export interface CanDeactivateGuardService {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateGuardService> {
  canDeactivate(
    component: CanDeactivateGuardService,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}

