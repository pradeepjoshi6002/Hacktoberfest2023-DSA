class Node {
    constructor(d) {
        this.data = d
        this.next = null
    }
}
class lindedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    add(x) {
        const newnode = new Node(x)
        if (this.head == null) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            this.tail.next = newnode
            this.tail = newnode
        }
    }
    show() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}

const l1 = new lindedList()
l1.add(1)
l1.add(2)
l1.add(3)
l1.add(4)
l1.show()
// linked list data structure program in javascript with add() and show() function implemented using oops.
