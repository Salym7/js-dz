'use strict';

(function () {

    function Student(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.years = (new Date()).getFullYear() - birthday;
        this.attendance = ['', '', '', '', '', '', '', '', '', ''];
        this.assessment = ['', '', '', '', '', '', '', '', '', ''];
    }

    Student.prototype.present = function () {
        const index = this.attendance.indexOf('');
        if (index === -1) return this;
        this.attendance.splice(index, 1, true);
        return this;
    }
    Student.prototype.absent = function () {
        const index = this.attendance.indexOf('');
        if (index === -1) return this;
        this.attendance.splice(index, 1, false);
        return this;
    }
    Student.prototype.mark = function (grade) {
        if (grade <= 10 && grade > 0) {
            const index = this.assessment.indexOf('');
            if (index === -1) return this;
            this.assessment.splice(index, 1, grade);
            return this;
        }
        return 'grade entered incorrectly';
    }
    Student.prototype.summary = function () {
        let sum = this.assessment.reduce((acc, item) => {
            return acc + +item;
        }, 0);
        const evaluations = this.assessment.filter(a => a !== '').length;
        const visits = this.attendance.filter(a => a !== '').length;
        if (!evaluations || !visits) return "data is not entered correctly";
        const averageMark = sum / evaluations;
        const averageVisit = this.attendance.map(item => {
            if (item === true) return 1;
            return 0;
        }).reduce((a, b) => a + b) / visits;

        if (averageMark > 9 && averageVisit > 0.9) return 'Ути какой молодчинка!';
        if (averageMark > 9 || averageVisit > 0.9) return 'Норм, но можно лучше';
        return 'Редиска!';

    }

    const student1 = new Student('Sasha', 'Solyn', 1996);
    const student2 = new Student('Valera', 'Valerian', 2000);
    const student3 = new Student('Anna', 'Petrova', 1991);

    for (let i = 0; i < 5; i++) {
        student1.mark(10);
        student1.present();
    }
    for (let i = 0; i < 5; i++) {
        student1.mark(5);
        student1.present();
    }
    console.log(student1.summary());

    for (let i = 0; i < 5; i++) {
        student2.mark(2);
        student2.absent();
    }

    console.log(student2.summary());

    for (let i = 0; i < 10; i++) {
        student3.mark(10);
        student3.present();
    }
    console.log(student3.summary());

}())

