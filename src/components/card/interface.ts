import { alignment } from '../global-enum';
import { IPattern } from "../pattern-interface";

export interface ICard extends IPattern {
    alignment: alignment;
    reverseColumn: boolean;
    border: string;
    backgroundColor: string;
    showHeader: boolean;
    showContent: boolean;
    showFooter: boolean;
}