export class ListNode {
  constructor(public value: any, public next: ListNode | null = null) {}
}

export class LinkedList {
  constructor(public start: ListNode | null = null) {}

  public addToTail = (value: any): void => {
    if (!this.start) {
      this.start = new ListNode(value);
    } else {
      let currentNode = this.start;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new ListNode(value);
    }
  };

  public find = (value: any) => {
    let currentNode = this.start;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  };
}
