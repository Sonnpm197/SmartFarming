import { Injectable } from '@angular/core';
declare var toastr: any
@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor() { }

  Success(title: string, message?: string){
    toastr.success(title, message);
  }
}
