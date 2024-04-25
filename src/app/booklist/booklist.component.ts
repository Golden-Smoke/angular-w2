import { Component } from "@angular/core";
import {bookList} from "../../booklist";

@Component({
    selector:"app-booklist",
    templateUrl:"./booklist.component.html",
    styleUrl:"./booklist.component.css",
    standalone:true
})
export class BookListComponent {
    books = bookList;
    activeBook = 0;
    currentBookCount = 0;
    currentTotalRating = 0;
    currentAverageRating = 0;
    isRatingFinished = false;
    isRatingConfirmed = false;

    calculateAvgRating = (rating: number) => {
        this.currentBookCount++;
        this.currentTotalRating += rating;
        this.currentAverageRating = this.currentTotalRating / this.currentBookCount;
        const formattedRating = this.currentAverageRating.toFixed(1);
        this.currentAverageRating = parseFloat(formattedRating);
    }
    showNextBook = (rating: number) => {

        if(this.activeBook >= bookList.length - 1) {
            this.calculateAvgRating(rating)
            this.isRatingFinished = true;
            return;
        }
        this.activeBook++;
        this.calculateAvgRating(rating)
    }
    resetRating = () => {
        this.isRatingFinished = false;
        this.activeBook = 0;
        this.currentBookCount = 0;
        this.currentTotalRating = 0;
        this.currentAverageRating = 0;
    }
    finishRating = () => this.isRatingConfirmed = true;
}