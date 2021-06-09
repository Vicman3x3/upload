import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uploadShow',
  templateUrl: './upload-show.component.html',
  styleUrls: ['./upload-show.component.css']
})
export class UploadShowComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }

	files: File[] = [];

	onSelect(event: { addedFiles: any; }) {
		console.log(event);
		if(this.files && this.files.length >=1) {
		  this.onRemove(this.files[0]);
		}
		this.files.push(...event.addedFiles);
	  }
	   
	  onRemove(event: File) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	  }

}

