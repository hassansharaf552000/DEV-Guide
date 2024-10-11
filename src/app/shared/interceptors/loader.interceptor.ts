import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  let serv = inject(LoaderService);

  console.log("loader start");
  serv.showLoader()
  return next(req).pipe(
    finalize(()=>{
    serv.hideLoader()
    console.log("loader End");

    })
  );
};
