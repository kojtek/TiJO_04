describe('app', function () {
    'use strict';
    var app = window.app;

    xdescribe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    xdescribe('DescendingNumbers function', function () {
        it('should return descending numbers from numberFrom to numberTo', function () {
            expect(app.getDescendingNumbers(10, 6)).toEqual('10 9 8 7 6');
            expect(app.getDescendingNumbers(8, -9)).toEqual('8 7 6 5 4 3 2 1 0 -1 -2 -3 -4 -5 -6 -7 -8 -9');
        });
        it('should return false when numberFrom is equal numberTo ', function () {
            expect(app.getDescendingNumbers(7, 7)).toEqual(false);
        });
        it('should return false when numberFrom is less than numberTo ', function () {
            expect(app.getDescendingNumbers(5, 12)).toEqual(false);
        });
        it('should return descending numbers from numberFrom to numberTo ', function () {
            expect(app.getDescendingNumbers(7.8, 1)).toEqual('7.8 6.8 5.8 4.8 3.8 2.8 1.7999999999999998');
        });
        it('should return false when numberFrom is character ', function () {
            expect(app.getDescendingNumbers('c', 1)).toEqual(false);
        });
        it('should return false when numberTo is character ', function () {
            expect(app.getDescendingNumbers(3, 'x')).toEqual(false);
        });
        it('should return false when both numbers are character ', function () {
            expect(app.getDescendingNumbers('c', 'x')).toEqual(false);
        });
    });

    xdescribe('areaOfTrapezoid function', function () {
        it('should return result (0.5*h*(a+b))', function () {
            expect(app.areaOfTrapezoid(1, 2, 3)).toEqual(4.5);
            expect(app.areaOfTrapezoid(2, 4, 6)).toEqual(18);
            expect(app.areaOfTrapezoid(1, 1, 1)).toEqual(1);
            expect(app.areaOfTrapezoid(0, 1, 1)).toEqual(0.5);
            expect(app.areaOfTrapezoid(1, 1, 0)).toEqual(0);
            expect(app.areaOfTrapezoid(5.4, 1.7, 3.2)).toEqual(11.360000000000001);
        });
        it('should return false when "a" is under 0', function () {
            expect(app.areaOfTrapezoid(-5, 10, 12)).toEqual(false);
        });
        it('should return false when "b" is under 0', function () {
            expect(app.areaOfTrapezoid(6, -1, 12)).toEqual(false);
        });
        it('should return false when "h" is under 0', function () {
            expect(app.areaOfTrapezoid(2, 7, -8)).toEqual(false);
        });
        it('should return false when "a" or "b" or "h" is under 0', function () {
            expect(app.areaOfTrapezoid(-4, -5, 6)).toEqual(false);
        });
        it('should return false when "h" is character', function () {
            expect(app.areaOfTrapezoid(3, 2, 'h')).toEqual(false);
        });
        it('should return false when "b" is character', function () {
            expect(app.areaOfTrapezoid(3, 'b', 1)).toEqual(false);
        });
        it('should return false when "a" is character', function () {
            expect(app.areaOfTrapezoid('a', 2, 1)).toEqual(false);
        });
        it('should return false when "a" or "b" or "h" is character', function () {
            expect(app.areaOfTrapezoid('a', 2, 'h')).toEqual(false);
        });
        it('should return result when "a" or "b" or "c" is sum other numbers and are over 0', function () {
            expect(app.areaOfTrapezoid((3+3), 2, 1)).toEqual(4);
        });
        it('should return result first three arguments when is more than 3 arguments', function () {
            expect(app.areaOfTrapezoid(3, 3, 2, 1)).toEqual(6);
        });
    });

    xdescribe('maxArray function', function () {
        it('should return max element of array ', function () {
            expect(app.maxArray([1,4,2])).toEqual(4);
            expect(app.maxArray([6,1,32,55,31,17,99,97,13,26,45])).toEqual(99);
            expect(app.maxArray([])).toEqual();
        });
        it('should return false when array contains elements different than "number" ', function () {
            expect(app.maxArray([5,7,10,'qaz',15,'qwerty',33,21,55,74])).toEqual(false);
            expect(app.maxArray(['asd',1,32,55,31,17,99,97,13,26,45])).toEqual(false);
        });
    });

    describe('squaredOdd function', function () {
        it('should return squared odd numbers array ', function () {
            expect(app.squareOdd([1,2,3,4,5,6,7])).toEqual([1,2,9,4,25,6,49]);
            expect(app.squareOdd([10,9,12,14,15,8,20])).toEqual([10,81,12,14,225,8,20]);
            expect(app.squareOdd([3,4,'asd',1,8,7])).toEqual([9,4,'asd',1,8,49]);
            expect(app.squareOdd([1,2,-2,-3,-5])).toEqual(1,2,-2,9,25);
        });
        it('should return false when array contains elements different than "number" and string ', function () {
            expect(app.squareOdd([1,'asd',false,7,8])).toEqual(false);
            expect(app.squareOdd([10,true,12,'asd',15,'pty',20])).toEqual(false);
        });
    });
});
