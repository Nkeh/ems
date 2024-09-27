import {Headings} from "./headings";
import {LinksDTO} from "./linkDTO";

export  interface AnalysisResult {
    htmlVersion: string;
    pageTitle: string;
    headings: Headings[];
    internalLinks: LinksDTO[];
    externalLinks: LinksDTO[];
    hasLoginForm: boolean;
}