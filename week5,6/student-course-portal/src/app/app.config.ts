import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {
  provideStore,
  provideState
} from '@ngrx/store';

import {
  provideEffects
} from '@ngrx/effects';

import {
  provideStoreDevtools
} from '@ngrx/store-devtools';

import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects';

import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [

    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideRouter(routes),

    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorHandlerInterceptor,
        loadingInterceptor
      ])
    ),

    provideStore({}),

    provideState('course', courseReducer),

    provideEffects(
      CourseEffects
    ),

    provideStoreDevtools({
      maxAge: 25
    })

  ]
};