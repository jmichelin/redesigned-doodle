/*
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf 
 * path such that adding up all the values along the path equals the given sum.
 *
 * {
 *  val: number,
 *  left: null or node,
 *  right: null or node
 * }
 * 
 * Constraints: Path must be root to leaf, no partial paths 
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 *
*/

const testTree = {
  val: 5,
  right: {
    val: 8,
    right: {
      val: 12,
      right: {
        val: 13,
        right: null,
        left: null,
      },
      left: {
        val: 13,
        right: null,
        left: null,
      },
    },
    left: null,
  },
  left: {
    val: 3,
    right: {
      val: 4,
      right: null,
      left: null,
    },
    left: {
      val: 2,
      right: null,
      left: null,
    },
  },
};

const hasPathSum = (root, sum) => {
  // return false if no root
  // declare result variable
  // create traverse() function with node and a total as params
    // assign new total to passed in total and the node's value
    // if node has a left child
      // call traverse function on the left child and new total
    // if node has a right child
      // call traverse function on the right child and new total
    // if node is a leaf
      // if new total equals sum
        // assign true to result
  // call traverse function on the root node and zero as total
  // if result equals true
    // return true
  // else return false
};
