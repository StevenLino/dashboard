export default interface Item {
    dateStart: String;
    dateEnd: String;
    precipitation?: string;
    humidity?: string;
    clouds: string;

    temperature?: string; // Añade este campo

    date:string;
}