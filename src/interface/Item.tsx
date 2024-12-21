export default interface Item {
    dateStart: String;
    dateEnd: String;
    precipitation?: string;
    humidity?: string;
    clouds: String;

    temperature?: string; // Añade este campo
}