import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { NgForm } from '@angular/forms';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        console.log('AppComponent view initialized');

        this.cards.changes.subscribe((cards: QueryList<CourseCardComponent>) => {
            console.log('cards QueryList changed:', cards);
        });
    }
    courses = [...COURSES];
    selectedCategory = 'ALL';
    title = COURSES[0].description;
    price = 9.99;
    startDate = new Date();
    rate = 0.5;
    course = COURSES[0];

    AppTitle = 'Angular Course Learning';

    @ViewChildren(CourseCardComponent)
    cards!: QueryList<CourseCardComponent>;

    @ViewChildren(UserProfileComponent)
    userProfiles!: QueryList<UserProfileComponent>;

    @ViewChild('cardRef')
    card!: CourseCardComponent;

    @ViewChild('cardRef1')
    card1!: CourseCardComponent;

    @ViewChild('container')
    containerDiv!: ElementRef;

    @ViewChild('addCourseDialog')
    addCourseDialog!: ElementRef<HTMLDialogElement>;

    newCourseForm = {
        id: 0,
        description: '',
        iconUrl: '',
        longDescription: '',
        category: '',
        lessonsCount: ''
    };

    showIconRequiredError = false;
    showLessonsNumericError = false;

    get existingCourseCategories(): string[] {
        return Array.from(new Set(this.courses.map(course => course.category)));
    }

    get nextCourseId(): number {
        return this.courses.reduce((maxId, course) => Math.max(maxId, course.id), 0) + 1;
    }

    openAddCourseDialog() {
        this.newCourseForm = {
            id: this.nextCourseId,
            description: '',
            iconUrl: '',
            longDescription: '',
            category: this.existingCourseCategories[0] ?? 'BEGINNER',
            lessonsCount: ''
        };

        this.showIconRequiredError = false;
        this.showLessonsNumericError = false;

        this.addCourseDialog.nativeElement.showModal();
    }

    closeAddCourseDialog() {
        this.addCourseDialog.nativeElement.close();
    }

    onIconSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];

        if (!file) {
            this.newCourseForm.iconUrl = '';
            this.showIconRequiredError = true;
            return;
        }

        if (!file.type.startsWith('image/')) {
            this.newCourseForm.iconUrl = '';
            this.showIconRequiredError = true;
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            this.newCourseForm.iconUrl = String(reader.result ?? '');
            this.showIconRequiredError = false;
        };
        reader.readAsDataURL(file);
    }

    onLessonsCountInput() {
        this.showLessonsNumericError = this.newCourseForm.lessonsCount.trim() !== '' && !/^\d+$/.test(this.newCourseForm.lessonsCount.trim());
    }

    onSaveNewCourse(form: NgForm) {
        const lessonsCount = Number(this.newCourseForm.lessonsCount);
        const hasNumericLessons = /^\d+$/.test(this.newCourseForm.lessonsCount.trim());

        this.showIconRequiredError = !this.newCourseForm.iconUrl;
        this.showLessonsNumericError = this.newCourseForm.lessonsCount.trim() !== '' && !hasNumericLessons;

        if (form.invalid ||
            this.showIconRequiredError ||
            !hasNumericLessons ||
            Number.isNaN(lessonsCount)) {
            return;
        }

        this.courses.push({
            id: this.newCourseForm.id,
            description: this.newCourseForm.description.trim(),
            iconUrl: this.newCourseForm.iconUrl,
            longDescription: this.newCourseForm.longDescription.trim(),
            category: this.newCourseForm.category,
            lessonsCount
        });

        this.closeAddCourseDialog();
    }

    get categories(): string[] {
        const uniqueCategories = new Set(this.courses.map(course => course.category));
        return ['ALL', ...Array.from(uniqueCategories)];
    }

    get filteredCourses(): Course[] {
        if (this.selectedCategory === 'ALL') {
            return this.courses;
        }

        return this.courses.filter(course => course.category === this.selectedCategory);
    }

    onCategoryChanged(category: string) {
        this.selectedCategory = category;
    }
   
    onCourseSelected(course: Course) {
        console.log("app.component click event bubbled: ", { course, card: this.card, card1: this.card1 });
    }
}
