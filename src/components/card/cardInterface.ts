import { alignment } from '../globalEnum';
import { IPattern } from "../patternInterface";

export interface ICard extends IPattern {
    alignment: alignment;
    reverseColumn: boolean;
    border: string;
    backgroundColor: string;
    showHeader: boolean;
    showContent: boolean;
    showFooter: boolean;
}