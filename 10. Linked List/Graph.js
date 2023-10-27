class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.get(node1).push(node2);
      this.nodes.get(node2).push(node1);
    }
  }

  getNeighbors(node) {
    return this.nodes.get(node);
  }

  hasNode(node) {
    return this.nodes.has(node);
  }

  toString() {
    let result = '';
    for (const [node, neighbors] of this.nodes) {
      result += `${node} -> ${neighbors.join(', ')}\n`;
    }
    return result;
  }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

console.log(graph.toString());
