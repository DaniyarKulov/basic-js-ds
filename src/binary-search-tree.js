const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.data = null;
	}
	root() {
		return this.data;
	}

	add(data) {
		if (!this.data) {
			this.data = {
				data,
				left: null,
				right: null
			};
		}

		function insert(localRoot) {
			if (data > localRoot.data) {
				if (!localRoot.right) {
					localRoot.right = {
						data,
						left: null,
						right: null
					};
				} else {
					insert(localRoot.right);
				}
			} else if (data < localRoot.data) {
				if (!localRoot.left) {
					localRoot.left = {
						data,
						left: null,
						right: null
					};
				} else {
					insert(localRoot.left);
				}
			}
		}

		insert(this.data);
	}

	has(data) {
		return this.find(data) !== null;
		// return search(this.data, data);

		// function search(node, data) {
		// 	if (!node) return false;
		// 	if (node.data === data) return true;

		// 	return node.data <= data ? search(node.right, data) : search(node.left, data)
		// }
	}

	find(data) {
		function localFind(localRoot) {
			if (!localRoot) return null;
			if (localRoot.data === data) return localRoot;
			if (data > localRoot.data) return localFind(localRoot.right);
			if (data < localRoot.data) return localFind(localRoot.left);
		}
		return localFind(this.data);

	}

	remove(data) {
		// if (!this.has(data)) return;
		// const indexInsert = this.data.findIndex((a) => a > data);
		// this.data.splice(indexInsert, 1);

		this.data = removeNode(this.data, data);
		function removeNode(node, data) {
			if (node === null) return null;
			if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			}
			if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (node.left === null && node.rigth === null) {
					return null;
				}
			}
			if (!node.right) {
				node = node.left;
				return node;
			}
			if (!node.left) {
				node = node.right;
				return node;
			}

			let minFromRight = node.right;
			while (minFromRight.left) {
				minFromRight = minFromRight.left;
			}
			node.data = minFromRight.data;

			node.right = removeNode(node.right, minFromRight.data)

			return node;
		}
	}
	min() {
		function findMin(localRoot) {
			if (!localRoot.left) return localRoot.data;
			return findMin(localRoot.left);
		}

		return findMin(this.data);
	}

	max() {
		function findMax(localRoot) {
			if (!localRoot.right) return localRoot.data;
			return findMax(localRoot.right);
		}

		return findMax(this.data);
	}
}



module.exports = {
	BinarySearchTree
};

