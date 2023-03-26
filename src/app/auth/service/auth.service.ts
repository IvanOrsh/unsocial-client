import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GetResult, Preferences } from '@capacitor/preferences';
import {
  BehaviorSubject,
  Observable,
  switchMap,
  take,
  tap,
  of,
  from,
  map,
} from 'rxjs';

import jwtDecode from 'jwt-decode';

import { environment } from 'src/environments/environment';
import { NewUser } from '../models/newUser.model';
import { Role, User } from '../models/user.model';
import { UserResponse } from '../models/userResponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);

  private httpOptions: {
    headers: HttpHeaders;
  } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  get isUserLoggedIn(): Observable<boolean> {
    return this.user$.asObservable().pipe(
      switchMap((user: User | null) => {
        const isUserAuthenticated = user !== null;
        return of(isUserAuthenticated);
      })
    );
  }

  get userRole(): Observable<Role | undefined> {
    return this.user$.asObservable().pipe(
      switchMap((user: User | null) => {
        return of(user?.role);
      })
    );
  }

  constructor(private http: HttpClient, private router: Router) {}

  register(newUser: NewUser): Observable<User> {
    return this.http
      .post<User>(
        `${environment.baseApiUrl}/auth/register`,
        newUser,
        this.httpOptions
      )
      .pipe(take(1));
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(
        `${environment.baseApiUrl}/auth/login`,
        {
          email,
          password,
        },
        this.httpOptions
      )
      .pipe(
        take(1),
        tap((response: { token: string }) => {
          // Preferences?
          Preferences.set({
            key: 'token',
            value: response.token,
          });
          const decodedToken: UserResponse = jwtDecode(response.token);
          this.user$.next(decodedToken.user);
        })
      );
  }

  isTokenInStorage(): Observable<boolean> {
    return from(
      Preferences.get({
        key: 'token',
      })
    ).pipe(
      map((data: GetResult) => {
        if (!data || !data.value) return false;

        const decodedToken: UserResponse = jwtDecode(data.value);
        const jwtExpirationInMsSinceUnixEpoch = decodedToken.exp * 1000;
        const isExpired =
          new Date() > new Date(jwtExpirationInMsSinceUnixEpoch);

        if (isExpired) return false;
        if (decodedToken.user) {
          this.user$.next(decodedToken.user);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    this.user$.next(null);
    Preferences.remove({
      key: 'token',
    });
    this.router.navigateByUrl('/auth');
  }
}
