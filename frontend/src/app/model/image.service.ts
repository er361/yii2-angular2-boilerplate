/**
 * Created by Nazira on 30.06.2017.
 */
import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import {GlobalService} from './global.service';

@Injectable()
export class ImageService {
    constructor(
        private http: Http,
        private _globalService : GlobalService
    ){}

    getImages():Promise<any>{
        return this.http.get(this._globalService.apiHost + '/projects')
            .toPromise()
            .then(response => {
                // console.log(response.json())
                return response.json()
            })
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
