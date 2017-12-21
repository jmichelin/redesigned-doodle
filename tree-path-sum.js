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

