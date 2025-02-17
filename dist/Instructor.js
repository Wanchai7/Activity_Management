"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const Activity_1 = require("./Activity");
const User_1 = require("./User");
class Instructor extends User_1.User {
    constructor(username, password, name, role, email) {
        super(username, password, name, role, email);
    }
    createActivity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, cortificateIssued, instructor, schedule) {
        let activity = Activity_1.Activity.createActivity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, cortificateIssued, instructor, schedule);
    }
    approvePaticipant(activity, participant, registrations) {
        activity.approveParticipant(participant, registrations);
    }
    issueCertificate(Activity, participant, registration, tamplate) {
        return activity.generatrCertificate(registration, this, this.username, '');
    }
    searchActivity() {
        let activity = Activity_1.Activity.searchActivity();
        return activity;
    }
}
exports.Instructor = Instructor;
