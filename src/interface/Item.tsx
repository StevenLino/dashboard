export default interface Item {
    dateStart: String;
    dateEnd: String;
    precipitation?: string;
    humidity?: string;
    clouds: string;

    temperature?: string;

    date:string;

    weatherState: string; //estado del clima
}