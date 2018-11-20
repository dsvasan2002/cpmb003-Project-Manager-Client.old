export class Task {
    public _id: string;
    public task: string;
    public parentTask: string;
    public project: string;
    public startDate: Date;
    public endDate: Date;
    public hasFinished: boolean = false;
    constructor(){}

}