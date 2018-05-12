import { Subject } from "./subject";

export interface Day{
    schedule?: {start: string, end: string, subject: Subject, h: number}[];
    name?: string;
}