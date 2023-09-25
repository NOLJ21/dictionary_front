import { PartOfSpeech } from "./partOfSpeech";

export interface Word{
    id: number;
    name: string;
    description: string;
    partOfSpeech: PartOfSpeech;
}