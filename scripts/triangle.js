module.exports = (function (parent) {
    var triangle = Object.create(parent),
        validator = require('./validator.js');

    Object.defineProperty(triangle, 'init', {
        value: function (xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB, xCoordinateC, yCoordinateC, collisionProfile, fill, stroke, strokeWidth) {
            parent.init.call(this, xCoordinateA, yCoordinateA, collisionProfile, fill, stroke, strokeWidth);
            this.xCoordinateB = xCoordinateB;
            this.yCoordinateB = yCoordinateB;
            this.xCoordinateC = xCoordinateC;
            this.yCoordinateC = yCoordinateC;

            return this;
        }
    });

    // Triangle's xCoordinate and yCoordinate are the coordinates of its point A.
    Object.defineProperty(triangle, 'xCoordinateA', {
        get: function () {
            return this.xCoordinate;
        },
        set: function (value) {
            this.xCoordinate = value;
        }
    });

    Object.defineProperty(triangle, 'yCoordinateA', {
        get: function () {
            return this.yCoordinate;
        },
        set: function (value) {
            this.yCoordinate = value;
        }
    });

    Object.defineProperty(triangle, 'xCoordinateB', {
        get: function () {
            return this._xCoordinateB;
        },
        set: function (value) {
            validator.validateIfRealNumber(value, "xCoordinateB");
            this._xCoordinateB = value;
        }
    });

    Object.defineProperty(triangle, 'yCoordinateB', {
        get: function () {
            return this._yCoordinateB;
        },
        set: function (value) {
            validator.validateIfRealNumber(value, "yCoordinateB");
            this._yCoordinateB = value;
        }
    });

    Object.defineProperty(triangle, 'xCoordinateC', {
        get: function () {
            return this._xCoordinateC;
        },
        set: function (value) {
            validator.validateIfRealNumber(value, "xCoordinateC");
            this._xCoordinateC = value;
        }
    });

    Object.defineProperty(triangle, 'yCoordinateC', {
        get: function () {
            return this._yCoordinateC;
        },
        set: function (value) {
            validator.validateIfRealNumber(value, "yCoordinateC");
            this._yCoordinateC = value;
        }
    });

    Object.defineProperty(triangle, 'getCoordinatesAsArray', {
        value: function () {
            var coordinatesAsArray = parent.getCoordinatesAsArray.call(this);
            coordinatesAsArray = coordinatesAsArray.concat([this.xCoordinateB, this.yCoordinateB, this.xCoordinateC, this.yCoordinateC]);
            return coordinatesAsArray;
        }
    });

    return triangle;
}(require('./game-object.js')));
