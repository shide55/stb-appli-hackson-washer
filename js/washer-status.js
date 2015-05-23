var WasherStatus = (function() {

    // constructor
    var washerStatus = function() {
        this.status = true;
    };

    washerStatus.prototype.isStatus = function() {
        return this.status;
    }

    washerStatus.prototype.setUsualStatus = function() {
        this.status = true;
    }

    washerStatus.prototype.setErrorStatus = function() {
        this.status = false;
    }

    return washerStatus;
})();
