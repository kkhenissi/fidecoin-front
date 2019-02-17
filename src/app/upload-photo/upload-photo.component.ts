import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {
  imageUrl: string = "/assets/photos/default-image.png";
  fileToUpload: File = null;
  @Output() urlPhotoChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
  
    this.fileToUpload = file.item(0);
    console.log('"""""""""""""""1111111111"""""""""""""""""""""""">', this.fileToUpload)
    if (this.fileToUpload) {
      this.imageUrl = "/assets/photos/"+this.fileToUpload.name;
    }
    
    console.log('"""""""""""""""2222222222"""""""""""""""""""""""">', this.imageUrl)
    this.urlPhotoChange.emit(this.imageUrl);
     
  //  //  Show image preview
  //     let readerf = new FileReader();

  //     readerf.onload = (event:any) => {

      

  //       this.imageUrl = event.target.result;
  //       console.log('"""""""""""""""222223333333322222"""""""""""""""""""""""">', this.imageUrl)


  //       readerf.readAsDataURL(this.fileToUpload);
  //     }, err => {
  //       console.log('error was happened', err);
  //     }
  } 

}
