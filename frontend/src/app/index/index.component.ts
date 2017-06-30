import {Component, OnInit} from '@angular/core';

import { ImageService } from  '../model/image.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
    providers: [ImageService]
})
export class IndexComponent implements OnInit {
    imgs : string[];
    randImg : string;
    constructor(private imageService : ImageService) {}

    ngOnInit() {
        this.imageService.getImages()
            .then(imgs =>{
                this.imgs = imgs.data;
                // console.log(this.imgs)
                this.setRandImg();
        });

    }

    setRandImg(){
        let images = this.imgs;
        this.randImg = images[Math.floor(Math.random()*images.length)];
        console.log(this.randImg)
    }
}
