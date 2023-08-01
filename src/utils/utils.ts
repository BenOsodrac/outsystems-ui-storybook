export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function setStyleAttribute(element: HTMLElement, cssProperty: string, ruleValue: number | string): void {
  if (element) {
    if (cssProperty !== '' && ruleValue !== undefined) {
      element.style.setProperty(cssProperty, ruleValue.toString());
    }
  } else {
    throw Error(`The element does not exist, when trying to apply the rule '${cssProperty}'.`);
  }
}