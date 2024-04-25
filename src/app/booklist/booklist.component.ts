import { Component } from "@angular/core";
import {bookList,Star,Book,starArray} from "../../booklist";

@Component({
    selector:"app-booklist",
    templateUrl:"./booklist.component.html",
    styleUrl:"./booklist.component.css",
    standalone:true
})
export class BookListComponent {
    books = bookList;
    
    activeBook = 0;
    tempEditBook: Book = this.books[this.activeBook];
    currentBookCount = 0;
    currentTotalRating = 0;
    currentAverageRating = 0;
    isRatingFinished = false;
    isRatingConfirmed = false;

    showEditForm = () => {
        const form = document.querySelector<HTMLFormElement>('.edit-form');
        const overlay = document.querySelector<HTMLDivElement>('.overlay');
        if(form) form.classList.add('show');
        if(overlay) overlay.classList.add('show');
    }
    closeEditForm = (event: any) => {
        event.preventDefault();
        const submittedForm = event.target;

        const title = submittedForm.querySelector('#title').value;
        const description = submittedForm.querySelector('#description').value;
        const authors = submittedForm.querySelector('#authors').value.split(",");
        const imgUrl = submittedForm.querySelector('#img-url').value;
    
        this.tempEditBook = {title,description,authors,imgUrl,starsRating: starArray};

        const overlay = document.querySelector<HTMLDivElement>('.overlay');
        submittedForm.classList.remove('show');
        if(overlay) overlay.classList.remove('show');
    }
    calculateAvgRating = (rating: number) => {
        this.currentBookCount++;
        this.currentTotalRating += rating;
        this.currentAverageRating = this.currentTotalRating / this.currentBookCount;
        const formattedRating = this.currentAverageRating.toFixed(1);
        this.currentAverageRating = parseFloat(formattedRating);
    }
    showNextBook = (rating: number) => {
        this.books[this.activeBook] = this.tempEditBook;
      
        if(this.activeBook >= bookList.length - 1) {
            this.calculateAvgRating(rating)
            this.isRatingFinished = true;
            return;
        }
        this.activeBook++;
        this.tempEditBook = this.books[this.activeBook];
        this.calculateAvgRating(rating)
    }
    resetRating = () => {
        this.isRatingFinished = false;
        this.activeBook = 0;
        this.tempEditBook = this.books[this.activeBook]
        this.currentBookCount = 0;
        this.currentTotalRating = 0;
        this.currentAverageRating = 0;
    }
    finishRating = () => this.isRatingConfirmed = true;
}