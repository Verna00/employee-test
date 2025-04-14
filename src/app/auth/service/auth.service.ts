import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  // Fake login with mock users
  login(username: string, password: string): Observable<{ token: string }> {
    // Mock user validation
    const mockUsers = [
      { username: 'admin', password: 'admin123', role: 'admin', userId: '1' },
      { username: 'user', password: 'user123', role: 'user', userId: '2' }
    ];

    const user = mockUsers.find(u => u.username === username && u.password === password);

    if (user) {
      return of({
        token: this.generateFakeJWT(user.userId, user.username, user.role)
      }).pipe(
        delay(500),
        tap(response => {
          this.storeToken(response.token);
          this.isAuthenticated = true;
          this.router.navigate(['/home']); // Changed from '/' to '/home'
        })
      );
    }
    return throwError(() => 'Invalid username or password').pipe(delay(500));
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('auth_token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  private storeToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  private generateFakeJWT(userId: string, username: string, role: string): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      userId,
      username,
      role,
      exp: Math.floor(Date.now() / 1000) + 3600 // Expires in 1 hour
    }));
    return `${header}.${payload}.fake-signature`;
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (!token) return null;
    
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }
}