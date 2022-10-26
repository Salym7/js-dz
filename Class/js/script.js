'use strict';

(function () {

    class Human {
        _firstName = null;
        _lastName = null;
        _years = null;
        #weight = null;
        static genus = 'human';

        constructor(firstName, lastName, birthday, weight = 40) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.years = birthday;
            this.weight = weight
        }

        static getDate() {
            return new Date();
        }

        fullName() {
            return this.firstName + ' ' + this.lastName;
        }

        get firstName() {
            return this._firstName;
        }

        set firstName(value) {
            if (value.length < 4) throw new Error("Имя слишком короткое");
            this._firstName = value
        }

        get lastName() {
            return this._lastName
        }

        set lastName(value) {
            if (value.length < 4) throw new Error("Фамилия слишком короткое");
            this._lastName = value
        }

        get years() {
            return this._years
        }

        set years(value) {
            if (new Date().getFullYear() < value) throw new Error("Такой год еще не настал");
            this._years = new Date().getFullYear() - value
        }

        get weight() {
            return this.#weight
        }

        set weight(value) {
            if (0 >= value) throw new Error("Вы не можете столько весить");
            this.#weight = value
        }

    }

    class Student extends Human {

        attendance = null;
        assessment = null;
        cash = null;
        static genus = 'student';

        constructor(firstName, lastName, birthday, weight, cash = 0) {
            super(firstName, lastName, birthday, weight)
            this.cash = cash;
            this.attendance = ['', '', '', '', '', '', '', '', '', ''];
            this.assessment = ['', '', '', '', '', '', '', '', '', ''];
        }

        present() {
            const index = this.attendance.indexOf('');
            if (index === -1) return this;
            this.attendance.splice(index, 1, true);
            return this;
        }

        absent() {
            const index = this.attendance.indexOf('');
            if (index === -1) return this;
            this.attendance.splice(index, 1, false);
            return this;
        }

        mark(grade) {
            if (grade <= 10 && grade > 0) {
                const index = this.assessment.indexOf('');
                if (index === -1) return this;
                this.assessment.splice(index, 1, grade);
                return this;
            }
            return 'grade entered incorrectly';
        }

        summary() {
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
    }

    const student1 = new Student('Sasha', 'Solyn', 1996, 70, 100);


    student1.absent()
    student1.absent()
    student1.present()
    student1.mark(6)

    console.log(student1);

}())



