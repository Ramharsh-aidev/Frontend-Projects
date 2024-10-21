class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to add a new node at the end of the list
    add(data) {
        if (this.size >= 40) {
            alert("Maximum number of nodes (40) reached. Cannot add more.");
            return;
        }

        const newNode = new Node(data); // Create a new node with the provided number

        // If the list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            // Traverse to the end of the list
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++; // Increment the size of the list
        this.render(); // to render on page
    }

    // Method to insert a node at a specified position
    insertAt(data, position) {
        if (this.size >= 40) {
            alert("Maximum number of nodes (40) reached. Cannot add more.");
            return;
        }

        const newNode = new Node(data); // Create a new node with the provided data

        // If no position is specified or it's out of bounds, add at the end
        if (position === undefined || position === null || position >
this.size) {
            alert("No index entered, adding at last index.");
            position = this.size;
        } else if (position < 0) {
            alert("Invalid position. Position cannot be negative.");
            return;
        }

        // Handling the case If inserting at the head (position 0)
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            // find the postion where to insert
            for (let i = 0; i < position - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
        this.render(); // to render on page
    }

    // Method to delete a node at a specified position
    deleteAt(position) {
        if (position < 0 || position >= this.size) {
            alert("Position out of bounds");
            return;
        }

        // Handling the head node case If deleting the head
        if (position === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            // finding the position
            for (let i = 0; i < position - 1; i++) {
                current = current.next;
            }
            // adding proper linking to the nodes
            current.next = current.next ? current.next.next : null;
        }
        this.size--;
        this.render(); // render the page
    }

    render() {
        const listContainer = document.getElementById('linkedList');
        listContainer.innerHTML = ''; //render all after each changes
        let current = this.head;

        while (current) {
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'node';

            // Last node address value handling
            if (!current.next) {
                nodeDiv.textContent = `Value: ${current.data}`;
            } else {
                const address = Math.floor(Math.random() * 900000) +
100000; // random 6-digit address generation
                nodeDiv.textContent = `Value: ${current.data}, Addr:
${address}`;
            }

            listContainer.appendChild(nodeDiv);

            // Add an arrow if it's not the last node
            if (current.next) {
                const arrowDiv = document.createElement('div');
                arrowDiv.className = 'arrow';
                arrowDiv.textContent = '→';
                listContainer.appendChild(arrowDiv);
            }

            current = current.next;
        }

        // null box
        const nullDiv = document.createElement('div');
        nullDiv.className = 'node';
        nullDiv.textContent = 'null';
        listContainer.appendChild(nullDiv);
    }
}

const linkedList = new LinkedList();

// Function to add a new node
function addNode() {
    const input = document.getElementById('nodeInput');
    const value = input.value;
    if (!value) {
        alert("Please enter a number to add.");
        return;
    }
    linkedList.add(Number(value));
    input.value = '';
}

// Function to insert a node at a specified position
function insertNode() {
    const positionInput = document.getElementById('positionInput');
    const insertInput = document.getElementById('insertInput');
    const position = positionInput.value;
    const value = insertInput.value;

    if (!value) {
        alert("Please enter a number to insert.");
        return;
    }

    linkedList.insertAt(Number(value), position ? Number(position) : undefined);
    positionInput.value = '';
    insertInput.value = '';
}

// Function to delete a node at a specified position
function deleteNode() {
    const deleteInput = document.getElementById('deleteInput');
    const position = deleteInput.value;

    if (!position) {
        alert("Please enter a position to delete.");
        return;
    }

    linkedList.deleteAt(Number(position));
    deleteInput.value = '';
}
